import { USER_API, http } from "@/utils";

export const userService = {
  register(data) {
    return http.post(`${USER_API}/register`, data);
  },

  getUserService() {
    return http.get(`${USER_API}`);
  },

  resendEmail() {
    return http.post(`${USER_API}/resend-email`);
  },

  updateProfile(data) {
    return http.patch(`${USER_API}`, data);
  },

  changePassword(data) {
    return http.post(`${USER_API}/change-password`, data);
  },

  getAddress() {
    return http.get(`${USER_API}/address`);
  },
};
