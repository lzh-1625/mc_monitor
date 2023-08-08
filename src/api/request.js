import Axios from "axios";

const instance = Axios.create({
	headers: {
		"Content-Type": "application/json",
	},
	timeout: 10000,
});

instance.interceptors.request.use(
	(config) => {
		if (sessionStorage.getItem("token")) {
			config.headers = {
				Token: sessionStorage.getItem("token"),
				...config.headers,
			};
		}
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

async function request(method, uri, data, params) {
	let resp;
	let commonError = { code: -1, message: "http访问失败！" };
	let prefix = "/service/api";
	uri = prefix + uri;
	switch (method) {
		case "GET":
			try {
				resp = await instance.get(uri, { params: params });
			} catch (e) {
				return commonError;
			}
			break;
		case "POST":
			try {
				resp = await instance.post(uri, data, { params: params });
			} catch (e) {
				return commonError;
			}
			break;
		case "PUT":
			try {
				resp = await instance.put(uri, data, { params: params });
			} catch (e) {
				return commonError;
			}
			break;
		case "DELETE":
			try {
				resp = await instance.delete(uri, { params: params });
			} catch (e) {
				return commonError;
			}
			break;
		default:
			return commonError;
	}
	return resp.data;
}

export default request;
