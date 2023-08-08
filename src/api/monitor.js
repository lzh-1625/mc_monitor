import request from "./request";

async function getEchartData(id) {
	let data = await request("GET", "/chart/data", null, id);
	return data;
}

export { getEchartData };