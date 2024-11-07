package com.cascon.web.rest.util;

import org.springframework.http.HttpHeaders;

public class CustomHeaderUtil {

    public static HttpHeaders createFailureAlert(String applicationName, String errorKey, String[] params) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("x-" + applicationName + "-error", errorKey);
        headers.add("x-" + applicationName + "-param-length", "" + params.length);
        if (params.length == 1) {
            headers.add("x-" + applicationName + "-param", params[0]);
        } else {
            for (int i = 0; i < params.length; i++) {
                headers.add("x-" + applicationName + "-param" + i, params[i]);
            }
        }
        return headers;
    }

    public static HttpHeaders createGeneralFailureAlert(String applicationName, String identificador) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("x-" + applicationName + "-error-general", identificador);
        return headers;
    }
}
