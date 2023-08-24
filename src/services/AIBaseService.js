import axios from "axios";
import appConfig from "configs/app.config";
import {
  TOKEN_TYPE,
  REQUEST_HEADER_AUTH_KEY,
  REQUEST_HEADER_TOKEN_KEY_NAME,
  REQUEST_HEADER_FINGERPRINT_KEY_NAME,
} from "constants/api.constant";
import { PERSIST_STORE_NAME } from "constants/app.constant";
import deepParseJson from "utils/deepParseJson";
import store from "../store";
import { onSignOutSuccess } from "../store/auth/sessionSlice";

const unauthorizedCode = [401];

const AIBaseService = axios.create({
  timeout: 60000,
  baseURL: "https://predev-api.readabilitytutor.com/AI/v1/", //appConfig.apiPrefix,
});

// AIBaseService.interceptors.request.use(
//   (config) => {
//     // if(config.url=='/Login' || config.url =='/sign-up' ||  config.url =='/ForgotPassword' || config.url =='/Profile/Save' || config.url =='/ChangePassword'  || config.url =='/reset-password' ){

//     //     config.baseURL="https://predev-api.readabilitytutor.com/API/v1";
//     //    // console.log('baseURL if>>>>',config.baseURL);
//     // }
//     const rawPersistData = localStorage.getItem(PERSIST_STORE_NAME);
//     const persistData = deepParseJson(rawPersistData);

//     const accessToken = persistData.auth.session.token;

//     if (accessToken) {
//       config.headers[REQUEST_HEADER_AUTH_KEY] = `${TOKEN_TYPE}${accessToken}`;
//       config.headers[REQUEST_HEADER_TOKEN_KEY_NAME] = `${accessToken}`;
//     }
//     config.headers[REQUEST_HEADER_FINGERPRINT_KEY_NAME] = "readability";

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// AIBaseService.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const { response } = error;

//     if (response && unauthorizedCode.includes(response.status)) {
//       store.dispatch(onSignOutSuccess());
//     }

//     return Promise.reject(error);
//   }
// );

export default AIBaseService;
