(function (win) {
  var REGEXP_IMAGE_TYPE = /^image\//;
  var util = {};
  var defaultOptions = {
    file: null,
    quality: 0.8
  };
  var isFunc = function (fn) { return typeof fn === 'function'; };
  var isImageType = function (value) { return REGEXP_IMAGE_TYPE.test(value); };

  /**
   * 简易图片压缩构造函数
   * @param {Object} options 相关参数
   */
  function SimpleImageCompressor(options) {
    options = Object.assign({}, defaultOptions, options);
    this.options = options;
    this.file = options.file;
    this.init();
  }

  var _proto = SimpleImageCompressor.prototype;
  win.SimpleImageCompressor = SimpleImageCompressor;

  /**
   * 初始化
   */
  _proto.init = function init() {
    var _this = this;
    var file = this.file;
    var options = this.options;

    if (!file || !isImageType(file.type)) {
      console.error('请上传图片文件!');
      return;
    }

    if (!isImageType(options.mimeType)) {
      options.mimeType = file.type;
    }

    util.file2Image(file, function (img) {
      var canvas = util.image2Canvas(img);
      file.width = img.naturalWidth;
      file.height = img.naturalHeight;
      _this.beforeCompress(file, canvas);

      util.canvas2Blob(canvas, function (blob) {
        blob.width = canvas.width;
        blob.height = canvas.height;
        options.success && options.success(blob);
      }, options.quality, options.mimeType)
    })
  }

  /**
   * 压缩之前，读取图片之后钩子函数
   */
  _proto.beforeCompress = function beforeCompress() {
    if (isFunc(this.options.beforeCompress)) {
      this.options.beforeCompress(this.file);
    }
  }

  /**
  * 文件转化成 `data URL` 字符串
  * @param {File} file 文件对象
  * @param {Function} callback 回调函数
  */
  util.file2DataUrl = function file2DataUrl(file, callback) {
    var reader = new FileReader();
    reader.onload = function () {
      callback(reader.result);
    };
    reader.readAsDataURL(file);
  }

  /**
     * 文件转化成 `Image` 对象
     * @param {File} file 文件对象
     * @param {Function} callback 回调函数
     */
  util.file2Image = function file2Image(file, callback) {
    var image = new Image();
    var URL = window.URL || window.webkitURL;
    image.alt = file.name;
    if (URL) {
      var url = URL.createObjectURL(file);
      image.onload = function () {
        callback(image);
        URL.revokeObjectURL(url);
      };
      image.src = url;
    } else {
      this.file2DataUrl(file, function (dataUrl) {
        image.onload = function () {
          callback(image);
        }
        image.src = dataUrl;
      });
    }
  }

  /**
   * `url` 转化成 `Image` 对象
   * @param {File} url `url`
   * @param {Function} callback 回调函数
   */
  util.url2Image = function url2Image(url, callback) {
    var image = new Image();
    image.src = url;
    image.onload = function () {
      callback(image);
    }
  }

  /**
   * `Image` 转化成 `Canvas` 对象
   * @param {File} file `Image` 对象
   * @return {HTMLCanvasElement} `canvas` 对象
   */
  util.image2Canvas = function image2Canvas(image) {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas;
  }

  /**
   * `Canvas` 转化成 `data URL` 对象
   * @param {File} file  `Canvas` 对象
   * @param {Float} quality 输出质量比例
   * @return {String} `data URL` 字符串
   */
  util.canvas2DataUrl = function canvas2DataUrl(canvas, quality, type) {
    return canvas.toDataURL(type || 'image/jpeg', quality);
  }

  /**
   * `data URL` 转化成 `Image` 对象
   * @param {File} dataUrl `data URL` 字符串
   * @param {Function} callback `canvas` 对象
   */
  util.dataUrl2Image = function dataUrl2Image(dataUrl, callback) {
    var image = new Image();
    image.onload = function () {
      callback(image);
    };
    image.src = dataUrl;
  }

  /**
   * `data URL` 转化成 `Blob` 对象
   * @param {File} dataUrl `data URL` 字符串
   * @param {String} type `mime`
   * @return {Blob} `Blob` 对象
   */
  util.dataUrl2Blob = function dataUrl2Blob(dataUrl, type) {
    var data = dataUrl.split(',')[1];
    var mimePattern = /^data:(.*?)(;base64)?,/;
    var mime = dataUrl.match(mimePattern)[1];
    var binStr = atob(data);
    var arr = new Uint8Array(len);

    for (var i = 0; i < len; i++) {
      arr[i] = binStr.charCodeAt(i);
    }
    return new Blob([arr], { type: type || mime });
  }

  /**
   * `Blob` 对象转化成 `data URL`
   * @param {Blob} blob `Blob` 对象
   * @param {Function} callback 回调函数
   */
  util.blob2DataUrl = function blob2DataUrl(blob, callback) {
    this.file2DataUrl(blob, callback);
  }

  /**
   * `Blob`对象 转化成 `Image` 对象
   * @param {Blob} blob `Blob` 对象
   * @param {Function} callback 回调函数
   */
  util.blob2Image = function blob2Image(blob, callback) {
    this.blob2Image(blob, callback);
  }

  /**
   * `Canvas` 对象转化成 `Blob` 对象
   * @param {HTMLCanvasElement} canvas `Canvas` 对象
   * @param {Function} callback 回调函数
   * @param {Float} quality 输出质量比例
   * @param {String} type `mime`
   */
  util.canvas2Blob = function canvas2Blob(canvas, callback, quality, type) {
    if (!HTMLCanvasElement.prototype.toBlob) {
      Object.defineProperty(HTMLCanvasElement.prototype, 'toBlob', {
        value: function (callback, type, quality) {
          let dataUrl = this.toDataURL(type, quality);
          callback(dataUrl2Blob(dataUrl));
        }
      });
    }
    canvas.toBlob(function (blob) {
      callback(blob);
    }, type || 'image/jpeg', quality || 0.8);
  }

  util.upload = function upload(url, file, callback) {
    var xhr = new XMLHttpRequest();
    var fd = new FormData();
    fd.append('file', file);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // 上传成功
        callback && callback(xhr.responseText);
      } else {
        throw new Error(xhr);
      }
    }
    xhr.open('POST', url, true);
    xhr.send(fd);
  }

  for (var key in util) {
    if (util.hasOwnProperty(key)) {
      SimpleImageCompressor[key] = util[key];
    }
  }
})(window)
