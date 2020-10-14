export const commarize = (num) =>
	num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
