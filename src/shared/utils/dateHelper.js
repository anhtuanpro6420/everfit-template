export const getDatesOfWeek = () => {
	const currentDate = new Date();
	const currentWeek = [];

	for (let i = 1; i <= 7; i++) {
		const first = currentDate.getDate() - currentDate.getDay() + i;
		const day = new Date(currentDate.setDate(first)).toISOString().slice(0, 10)
		currentWeek.push(day)
	}

	return currentWeek;
}

export const getCurrentDate = (date) => { 
  return date < 10 ? `0${date}` : date;
}