import axios from "axios";
const API_URL = 'http://localhost:8080';

export default {
    getList() {
        return axios.get(`${API_URL}/customer/list`);
    },
    getCustomer(id) {
        return axios.get(`${API_URL}/customer/find/${id}`);
    },
    createCustomer(customer) {
        return axios.post(`${API_URL}/customer/create`, customer);
    },
    updateCustomer(id, customer) {
        return axios.put(`${API_URL}/customer/update/${id}`, customer);
    },
    deleteCustomer(id) {
        return axios.delete(`${API_URL}/customer/delete/${id}`);
    }
};
