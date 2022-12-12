import dayjs from "dayjs";

export function formateDate( date , format = "MM月DD日"){
  return dayjs(date).format(format)
}

export function diffDate(startDate,endDate){
  return dayjs(endDate).diff(startDate,"day")
}