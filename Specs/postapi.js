import { sleep } from "k6";
import http from "k6/http";
import {check} from "k6";

export const options={
    executor: 'shared-iterations',
    vus: 1,
    duration: '10s',
}

export default function () {
    const url = 'https://dummyjson.com/auth/login';
    const payload = JSON.stringify({
        usename: 'kminchelle',
        password: '0lelplR',
    });
    
    const params = {
        headers:{
            'Content-Type' : 'application/json',
        },
        
    }

    
    const res = http.post(url, payload, params);
    check(res, {
        'is status 200': (r) => r.status === 200,
        'is res body has username': (r) => r.body.includes('kminchelle'),
    })
}