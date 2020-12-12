// 获取已安排会议室中最早结束的会议
const getEarlyEndMetting = function (meetingRooms) {
  meetingRooms.sort((a, b) => a.end - b.end)
  return meetingRooms.shift()
}

const minMeetingRooms = function (intervals) {
  // 将会议按开始时间排序
  intervals.sort((a, b) => a.start - b.start)

  const meetingRooms = []

  // 让第一个会议在第一个会议室举行
  meetingRooms.push(intervals[0])

  for (let i = 1; i < intervals.length; i++) {
    const meeting = getEarlyEndMetting(meetingRooms)

    // 从第二个会议开始，对于每个会议，都从安排会议室的会议中取出一个最早结束的
    // 若当前会议可以等会议室被腾出才开始，那么就可以重复利用这个会议室
    if (intervals[i].start >= meeting.end) {
      meeting.end = intervals[i].end
    } else {
      meetingRooms.push(intervals[i])
    }
    // 将取出的会议重新放回已分配的会议室里
    meetingRooms.push(meeting)
  }
  console.log('meetingRooms: ', meetingRooms)
  return meetingRooms.length
}

const arr = [
  { start: 1, end: 3 },
  { start: 4, end: 5 },
  { start: 5, end: 6 },
  { start: 2, end: 4 },
  { start: 4, end: 7 },
  { start: 6, end: 7 },
  { start: 7, end: 8 }
]

minMeetingRooms(arr)
