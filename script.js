//your JS code here. If required.
function daysOfYear(year) {
	if(year<1 && year>9999)
		return("Invalid Year");
	}
	return(year%4===0 && year%100!==0) || (year%400===0) ? 366:365;
}

console.log(daysOfYear(2022));