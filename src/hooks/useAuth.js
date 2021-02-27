import axios from 'axios';
import { useState } from 'react';

function useAuth() {
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [loged, setLoged] = useState();

    async function login(values) {
        try {
            setLoading(true);
            setError();
            return await axios.post('https://interactive.hussamweb.com/wp-json/jwt-auth/v1/token', values).then((res) => {
                setLoading();
                return res;
            }).catch((error) => {
                setLoading();
                return error.response;
            })
        } catch (err) {
            setLoading();
            setError(err);
        }
    }
    async function signUp(values) {
        try {
            setLoading(true);
            setError();
            const FormData = require('form-data');
            const form = new FormData();
            for (var key in values) {
                form.append(key, values[key]);
            }
            return await axios.post('https://interactive.hussamweb.com/wp-json/interactive/v1/create-user', form).then((res) => {
                setLoading();
                return res;
            }).catch((error) => {
                setLoading();
                setError(error.response);
                return error.response;
            })
        } catch (err) {
            setLoading();
            setError(err);
        }
    }

    async function check(token) {
        try {
            let headers = {
                Authorization: 'Bearer ' + token
            }
            return await axios.post('https://interactive.hussamweb.com/wp-json/jwt-auth/v1/token/validate', {},{headers}).then((res) => {
                setLoged(true);
                return true;
            }).catch((error) => {
                setLoged(false);
                return false;
            })
        } catch (err) {
            setLoged(false);
            return false;
        }
    }
    return { loading, error,loged, login,check, signUp };
}

export { useAuth };