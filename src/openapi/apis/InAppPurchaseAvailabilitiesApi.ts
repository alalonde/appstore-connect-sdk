/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ErrorResponse,
  InAppPurchaseAvailabilityCreateRequest,
  InAppPurchaseAvailabilityResponse,
  TerritoriesResponse,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    InAppPurchaseAvailabilityCreateRequestFromJSON,
    InAppPurchaseAvailabilityCreateRequestToJSON,
    InAppPurchaseAvailabilityResponseFromJSON,
    InAppPurchaseAvailabilityResponseToJSON,
    TerritoriesResponseFromJSON,
    TerritoriesResponseToJSON,
} from '../models';

export interface InAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelatedRequest {
    id: string;
    fieldsTerritories?: Array<InAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelatedFieldsTerritoriesEnum>;
    limit?: number;
}

export interface InAppPurchaseAvailabilitiesCreateInstanceRequest {
    inAppPurchaseAvailabilityCreateRequest: InAppPurchaseAvailabilityCreateRequest;
}

export interface InAppPurchaseAvailabilitiesGetInstanceRequest {
    id: string;
    fieldsInAppPurchaseAvailabilities?: Array<InAppPurchaseAvailabilitiesGetInstanceFieldsInAppPurchaseAvailabilitiesEnum>;
    include?: Array<InAppPurchaseAvailabilitiesGetInstanceIncludeEnum>;
    fieldsTerritories?: Array<InAppPurchaseAvailabilitiesGetInstanceFieldsTerritoriesEnum>;
    limitAvailableTerritories?: number;
}

/**
 * 
 */
export class InAppPurchaseAvailabilitiesApi extends runtime.BaseAPI {

    /**
     */
    async inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelatedRaw(requestParameters: InAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TerritoriesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsTerritories) {
            queryParameters['fields[territories]'] = requestParameters.fieldsTerritories.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/inAppPurchaseAvailabilities/{id}/availableTerritories`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TerritoriesResponseFromJSON(jsonValue));
    }

    /**
     */
    async inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelated(requestParameters: InAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TerritoriesResponse> {
        const response = await this.inAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async inAppPurchaseAvailabilitiesCreateInstanceRaw(requestParameters: InAppPurchaseAvailabilitiesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InAppPurchaseAvailabilityResponse>> {
        if (requestParameters.inAppPurchaseAvailabilityCreateRequest === null || requestParameters.inAppPurchaseAvailabilityCreateRequest === undefined) {
            throw new runtime.RequiredError('inAppPurchaseAvailabilityCreateRequest','Required parameter requestParameters.inAppPurchaseAvailabilityCreateRequest was null or undefined when calling inAppPurchaseAvailabilitiesCreateInstance.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/inAppPurchaseAvailabilities`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InAppPurchaseAvailabilityCreateRequestToJSON(requestParameters.inAppPurchaseAvailabilityCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InAppPurchaseAvailabilityResponseFromJSON(jsonValue));
    }

    /**
     */
    async inAppPurchaseAvailabilitiesCreateInstance(requestParameters: InAppPurchaseAvailabilitiesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InAppPurchaseAvailabilityResponse> {
        const response = await this.inAppPurchaseAvailabilitiesCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async inAppPurchaseAvailabilitiesGetInstanceRaw(requestParameters: InAppPurchaseAvailabilitiesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<InAppPurchaseAvailabilityResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling inAppPurchaseAvailabilitiesGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsInAppPurchaseAvailabilities) {
            queryParameters['fields[inAppPurchaseAvailabilities]'] = requestParameters.fieldsInAppPurchaseAvailabilities.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsTerritories) {
            queryParameters['fields[territories]'] = requestParameters.fieldsTerritories.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitAvailableTerritories !== undefined) {
            queryParameters['limit[availableTerritories]'] = requestParameters.limitAvailableTerritories;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/inAppPurchaseAvailabilities/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InAppPurchaseAvailabilityResponseFromJSON(jsonValue));
    }

    /**
     */
    async inAppPurchaseAvailabilitiesGetInstance(requestParameters: InAppPurchaseAvailabilitiesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<InAppPurchaseAvailabilityResponse> {
        const response = await this.inAppPurchaseAvailabilitiesGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const InAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelatedFieldsTerritoriesEnum = {
    Currency: 'currency'
} as const;
export type InAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelatedFieldsTerritoriesEnum = typeof InAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelatedFieldsTerritoriesEnum[keyof typeof InAppPurchaseAvailabilitiesAvailableTerritoriesGetToManyRelatedFieldsTerritoriesEnum];
/**
 * @export
 */
export const InAppPurchaseAvailabilitiesGetInstanceFieldsInAppPurchaseAvailabilitiesEnum = {
    AvailableInNewTerritories: 'availableInNewTerritories',
    AvailableTerritories: 'availableTerritories',
    InAppPurchase: 'inAppPurchase'
} as const;
export type InAppPurchaseAvailabilitiesGetInstanceFieldsInAppPurchaseAvailabilitiesEnum = typeof InAppPurchaseAvailabilitiesGetInstanceFieldsInAppPurchaseAvailabilitiesEnum[keyof typeof InAppPurchaseAvailabilitiesGetInstanceFieldsInAppPurchaseAvailabilitiesEnum];
/**
 * @export
 */
export const InAppPurchaseAvailabilitiesGetInstanceIncludeEnum = {
    AvailableTerritories: 'availableTerritories'
} as const;
export type InAppPurchaseAvailabilitiesGetInstanceIncludeEnum = typeof InAppPurchaseAvailabilitiesGetInstanceIncludeEnum[keyof typeof InAppPurchaseAvailabilitiesGetInstanceIncludeEnum];
/**
 * @export
 */
export const InAppPurchaseAvailabilitiesGetInstanceFieldsTerritoriesEnum = {
    Currency: 'currency'
} as const;
export type InAppPurchaseAvailabilitiesGetInstanceFieldsTerritoriesEnum = typeof InAppPurchaseAvailabilitiesGetInstanceFieldsTerritoriesEnum[keyof typeof InAppPurchaseAvailabilitiesGetInstanceFieldsTerritoriesEnum];
