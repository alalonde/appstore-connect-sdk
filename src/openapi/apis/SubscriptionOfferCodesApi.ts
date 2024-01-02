/* tslint:disable */
/* eslint-disable */
/**
 * App Store Connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  ErrorResponse,
  SubscriptionOfferCodeCreateRequest,
  SubscriptionOfferCodeCustomCodesResponse,
  SubscriptionOfferCodeOneTimeUseCodesResponse,
  SubscriptionOfferCodePricesResponse,
  SubscriptionOfferCodeResponse,
  SubscriptionOfferCodeUpdateRequest,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    SubscriptionOfferCodeCreateRequestFromJSON,
    SubscriptionOfferCodeCreateRequestToJSON,
    SubscriptionOfferCodeCustomCodesResponseFromJSON,
    SubscriptionOfferCodeCustomCodesResponseToJSON,
    SubscriptionOfferCodeOneTimeUseCodesResponseFromJSON,
    SubscriptionOfferCodeOneTimeUseCodesResponseToJSON,
    SubscriptionOfferCodePricesResponseFromJSON,
    SubscriptionOfferCodePricesResponseToJSON,
    SubscriptionOfferCodeResponseFromJSON,
    SubscriptionOfferCodeResponseToJSON,
    SubscriptionOfferCodeUpdateRequestFromJSON,
    SubscriptionOfferCodeUpdateRequestToJSON,
} from '../models';

export interface SubscriptionOfferCodesCreateInstanceRequest {
    subscriptionOfferCodeCreateRequest: SubscriptionOfferCodeCreateRequest;
}

export interface SubscriptionOfferCodesCustomCodesGetToManyRelatedRequest {
    id: string;
    fieldsSubscriptionOfferCodeCustomCodes?: Array<SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodeCustomCodesEnum>;
    fieldsSubscriptionOfferCodes?: Array<SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum>;
    limit?: number;
    include?: Array<SubscriptionOfferCodesCustomCodesGetToManyRelatedIncludeEnum>;
}

export interface SubscriptionOfferCodesGetInstanceRequest {
    id: string;
    fieldsSubscriptionOfferCodes?: Array<SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodesEnum>;
    include?: Array<SubscriptionOfferCodesGetInstanceIncludeEnum>;
    fieldsSubscriptionOfferCodeCustomCodes?: Array<SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeCustomCodesEnum>;
    fieldsSubscriptionOfferCodeOneTimeUseCodes?: Array<SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeOneTimeUseCodesEnum>;
    fieldsSubscriptionOfferCodePrices?: Array<SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodePricesEnum>;
    limitCustomCodes?: number;
    limitOneTimeUseCodes?: number;
    limitPrices?: number;
}

export interface SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedRequest {
    id: string;
    fieldsSubscriptionOfferCodes?: Array<SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum>;
    fieldsSubscriptionOfferCodeOneTimeUseCodes?: Array<SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodeOneTimeUseCodesEnum>;
    limit?: number;
    include?: Array<SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedIncludeEnum>;
}

export interface SubscriptionOfferCodesPricesGetToManyRelatedRequest {
    id: string;
    filterTerritory?: Array<string>;
    fieldsSubscriptionPricePoints?: Array<SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum>;
    fieldsTerritories?: Array<SubscriptionOfferCodesPricesGetToManyRelatedFieldsTerritoriesEnum>;
    fieldsSubscriptionOfferCodePrices?: Array<SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionOfferCodePricesEnum>;
    limit?: number;
    include?: Array<SubscriptionOfferCodesPricesGetToManyRelatedIncludeEnum>;
}

export interface SubscriptionOfferCodesUpdateInstanceRequest {
    id: string;
    subscriptionOfferCodeUpdateRequest: SubscriptionOfferCodeUpdateRequest;
}

/**
 * 
 */
export class SubscriptionOfferCodesApi extends runtime.BaseAPI {

    /**
     */
    async subscriptionOfferCodesCreateInstanceRaw(requestParameters: SubscriptionOfferCodesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionOfferCodeResponse>> {
        if (requestParameters.subscriptionOfferCodeCreateRequest === null || requestParameters.subscriptionOfferCodeCreateRequest === undefined) {
            throw new runtime.RequiredError('subscriptionOfferCodeCreateRequest','Required parameter requestParameters.subscriptionOfferCodeCreateRequest was null or undefined when calling subscriptionOfferCodesCreateInstance.');
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
            path: `/v1/subscriptionOfferCodes`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionOfferCodeCreateRequestToJSON(requestParameters.subscriptionOfferCodeCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionOfferCodeResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionOfferCodesCreateInstance(requestParameters: SubscriptionOfferCodesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionOfferCodeResponse> {
        const response = await this.subscriptionOfferCodesCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async subscriptionOfferCodesCustomCodesGetToManyRelatedRaw(requestParameters: SubscriptionOfferCodesCustomCodesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionOfferCodeCustomCodesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subscriptionOfferCodesCustomCodesGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsSubscriptionOfferCodeCustomCodes) {
            queryParameters['fields[subscriptionOfferCodeCustomCodes]'] = requestParameters.fieldsSubscriptionOfferCodeCustomCodes.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsSubscriptionOfferCodes) {
            queryParameters['fields[subscriptionOfferCodes]'] = requestParameters.fieldsSubscriptionOfferCodes.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/subscriptionOfferCodes/{id}/customCodes`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionOfferCodeCustomCodesResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionOfferCodesCustomCodesGetToManyRelated(requestParameters: SubscriptionOfferCodesCustomCodesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionOfferCodeCustomCodesResponse> {
        const response = await this.subscriptionOfferCodesCustomCodesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async subscriptionOfferCodesGetInstanceRaw(requestParameters: SubscriptionOfferCodesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionOfferCodeResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subscriptionOfferCodesGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsSubscriptionOfferCodes) {
            queryParameters['fields[subscriptionOfferCodes]'] = requestParameters.fieldsSubscriptionOfferCodes.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsSubscriptionOfferCodeCustomCodes) {
            queryParameters['fields[subscriptionOfferCodeCustomCodes]'] = requestParameters.fieldsSubscriptionOfferCodeCustomCodes.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsSubscriptionOfferCodeOneTimeUseCodes) {
            queryParameters['fields[subscriptionOfferCodeOneTimeUseCodes]'] = requestParameters.fieldsSubscriptionOfferCodeOneTimeUseCodes.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsSubscriptionOfferCodePrices) {
            queryParameters['fields[subscriptionOfferCodePrices]'] = requestParameters.fieldsSubscriptionOfferCodePrices.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitCustomCodes !== undefined) {
            queryParameters['limit[customCodes]'] = requestParameters.limitCustomCodes;
        }

        if (requestParameters.limitOneTimeUseCodes !== undefined) {
            queryParameters['limit[oneTimeUseCodes]'] = requestParameters.limitOneTimeUseCodes;
        }

        if (requestParameters.limitPrices !== undefined) {
            queryParameters['limit[prices]'] = requestParameters.limitPrices;
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
            path: `/v1/subscriptionOfferCodes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionOfferCodeResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionOfferCodesGetInstance(requestParameters: SubscriptionOfferCodesGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionOfferCodeResponse> {
        const response = await this.subscriptionOfferCodesGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async subscriptionOfferCodesOneTimeUseCodesGetToManyRelatedRaw(requestParameters: SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionOfferCodeOneTimeUseCodesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subscriptionOfferCodesOneTimeUseCodesGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsSubscriptionOfferCodes) {
            queryParameters['fields[subscriptionOfferCodes]'] = requestParameters.fieldsSubscriptionOfferCodes.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsSubscriptionOfferCodeOneTimeUseCodes) {
            queryParameters['fields[subscriptionOfferCodeOneTimeUseCodes]'] = requestParameters.fieldsSubscriptionOfferCodeOneTimeUseCodes.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/subscriptionOfferCodes/{id}/oneTimeUseCodes`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionOfferCodeOneTimeUseCodesResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionOfferCodesOneTimeUseCodesGetToManyRelated(requestParameters: SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionOfferCodeOneTimeUseCodesResponse> {
        const response = await this.subscriptionOfferCodesOneTimeUseCodesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async subscriptionOfferCodesPricesGetToManyRelatedRaw(requestParameters: SubscriptionOfferCodesPricesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionOfferCodePricesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subscriptionOfferCodesPricesGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.filterTerritory) {
            queryParameters['filter[territory]'] = requestParameters.filterTerritory.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsSubscriptionPricePoints) {
            queryParameters['fields[subscriptionPricePoints]'] = requestParameters.fieldsSubscriptionPricePoints.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsTerritories) {
            queryParameters['fields[territories]'] = requestParameters.fieldsTerritories.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsSubscriptionOfferCodePrices) {
            queryParameters['fields[subscriptionOfferCodePrices]'] = requestParameters.fieldsSubscriptionOfferCodePrices.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/subscriptionOfferCodes/{id}/prices`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionOfferCodePricesResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionOfferCodesPricesGetToManyRelated(requestParameters: SubscriptionOfferCodesPricesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionOfferCodePricesResponse> {
        const response = await this.subscriptionOfferCodesPricesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async subscriptionOfferCodesUpdateInstanceRaw(requestParameters: SubscriptionOfferCodesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SubscriptionOfferCodeResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling subscriptionOfferCodesUpdateInstance.');
        }

        if (requestParameters.subscriptionOfferCodeUpdateRequest === null || requestParameters.subscriptionOfferCodeUpdateRequest === undefined) {
            throw new runtime.RequiredError('subscriptionOfferCodeUpdateRequest','Required parameter requestParameters.subscriptionOfferCodeUpdateRequest was null or undefined when calling subscriptionOfferCodesUpdateInstance.');
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
            path: `/v1/subscriptionOfferCodes/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: SubscriptionOfferCodeUpdateRequestToJSON(requestParameters.subscriptionOfferCodeUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SubscriptionOfferCodeResponseFromJSON(jsonValue));
    }

    /**
     */
    async subscriptionOfferCodesUpdateInstance(requestParameters: SubscriptionOfferCodesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SubscriptionOfferCodeResponse> {
        const response = await this.subscriptionOfferCodesUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodeCustomCodesEnum = {
    Active: 'active',
    CreatedDate: 'createdDate',
    CustomCode: 'customCode',
    ExpirationDate: 'expirationDate',
    NumberOfCodes: 'numberOfCodes',
    OfferCode: 'offerCode'
} as const;
export type SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodeCustomCodesEnum = typeof SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodeCustomCodesEnum[keyof typeof SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodeCustomCodesEnum];
/**
 * @export
 */
export const SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum = {
    Active: 'active',
    CustomCodes: 'customCodes',
    CustomerEligibilities: 'customerEligibilities',
    Duration: 'duration',
    Name: 'name',
    NumberOfPeriods: 'numberOfPeriods',
    OfferEligibility: 'offerEligibility',
    OfferMode: 'offerMode',
    OneTimeUseCodes: 'oneTimeUseCodes',
    Prices: 'prices',
    Subscription: 'subscription',
    TotalNumberOfCodes: 'totalNumberOfCodes'
} as const;
export type SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum = typeof SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum[keyof typeof SubscriptionOfferCodesCustomCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum];
/**
 * @export
 */
export const SubscriptionOfferCodesCustomCodesGetToManyRelatedIncludeEnum = {
    OfferCode: 'offerCode'
} as const;
export type SubscriptionOfferCodesCustomCodesGetToManyRelatedIncludeEnum = typeof SubscriptionOfferCodesCustomCodesGetToManyRelatedIncludeEnum[keyof typeof SubscriptionOfferCodesCustomCodesGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodesEnum = {
    Active: 'active',
    CustomCodes: 'customCodes',
    CustomerEligibilities: 'customerEligibilities',
    Duration: 'duration',
    Name: 'name',
    NumberOfPeriods: 'numberOfPeriods',
    OfferEligibility: 'offerEligibility',
    OfferMode: 'offerMode',
    OneTimeUseCodes: 'oneTimeUseCodes',
    Prices: 'prices',
    Subscription: 'subscription',
    TotalNumberOfCodes: 'totalNumberOfCodes'
} as const;
export type SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodesEnum = typeof SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodesEnum[keyof typeof SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodesEnum];
/**
 * @export
 */
export const SubscriptionOfferCodesGetInstanceIncludeEnum = {
    CustomCodes: 'customCodes',
    OneTimeUseCodes: 'oneTimeUseCodes',
    Prices: 'prices',
    Subscription: 'subscription'
} as const;
export type SubscriptionOfferCodesGetInstanceIncludeEnum = typeof SubscriptionOfferCodesGetInstanceIncludeEnum[keyof typeof SubscriptionOfferCodesGetInstanceIncludeEnum];
/**
 * @export
 */
export const SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeCustomCodesEnum = {
    Active: 'active',
    CreatedDate: 'createdDate',
    CustomCode: 'customCode',
    ExpirationDate: 'expirationDate',
    NumberOfCodes: 'numberOfCodes',
    OfferCode: 'offerCode'
} as const;
export type SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeCustomCodesEnum = typeof SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeCustomCodesEnum[keyof typeof SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeCustomCodesEnum];
/**
 * @export
 */
export const SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeOneTimeUseCodesEnum = {
    Active: 'active',
    CreatedDate: 'createdDate',
    ExpirationDate: 'expirationDate',
    NumberOfCodes: 'numberOfCodes',
    OfferCode: 'offerCode',
    Values: 'values'
} as const;
export type SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeOneTimeUseCodesEnum = typeof SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeOneTimeUseCodesEnum[keyof typeof SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodeOneTimeUseCodesEnum];
/**
 * @export
 */
export const SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodePricesEnum = {
    SubscriptionPricePoint: 'subscriptionPricePoint',
    Territory: 'territory'
} as const;
export type SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodePricesEnum = typeof SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodePricesEnum[keyof typeof SubscriptionOfferCodesGetInstanceFieldsSubscriptionOfferCodePricesEnum];
/**
 * @export
 */
export const SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum = {
    Active: 'active',
    CustomCodes: 'customCodes',
    CustomerEligibilities: 'customerEligibilities',
    Duration: 'duration',
    Name: 'name',
    NumberOfPeriods: 'numberOfPeriods',
    OfferEligibility: 'offerEligibility',
    OfferMode: 'offerMode',
    OneTimeUseCodes: 'oneTimeUseCodes',
    Prices: 'prices',
    Subscription: 'subscription',
    TotalNumberOfCodes: 'totalNumberOfCodes'
} as const;
export type SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum = typeof SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum[keyof typeof SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodesEnum];
/**
 * @export
 */
export const SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodeOneTimeUseCodesEnum = {
    Active: 'active',
    CreatedDate: 'createdDate',
    ExpirationDate: 'expirationDate',
    NumberOfCodes: 'numberOfCodes',
    OfferCode: 'offerCode',
    Values: 'values'
} as const;
export type SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodeOneTimeUseCodesEnum = typeof SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodeOneTimeUseCodesEnum[keyof typeof SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedFieldsSubscriptionOfferCodeOneTimeUseCodesEnum];
/**
 * @export
 */
export const SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedIncludeEnum = {
    OfferCode: 'offerCode'
} as const;
export type SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedIncludeEnum = typeof SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedIncludeEnum[keyof typeof SubscriptionOfferCodesOneTimeUseCodesGetToManyRelatedIncludeEnum];
/**
 * @export
 */
export const SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum = {
    CustomerPrice: 'customerPrice',
    Equalizations: 'equalizations',
    Proceeds: 'proceeds',
    ProceedsYear2: 'proceedsYear2',
    Subscription: 'subscription',
    Territory: 'territory'
} as const;
export type SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum = typeof SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum[keyof typeof SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionPricePointsEnum];
/**
 * @export
 */
export const SubscriptionOfferCodesPricesGetToManyRelatedFieldsTerritoriesEnum = {
    Currency: 'currency'
} as const;
export type SubscriptionOfferCodesPricesGetToManyRelatedFieldsTerritoriesEnum = typeof SubscriptionOfferCodesPricesGetToManyRelatedFieldsTerritoriesEnum[keyof typeof SubscriptionOfferCodesPricesGetToManyRelatedFieldsTerritoriesEnum];
/**
 * @export
 */
export const SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionOfferCodePricesEnum = {
    SubscriptionPricePoint: 'subscriptionPricePoint',
    Territory: 'territory'
} as const;
export type SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionOfferCodePricesEnum = typeof SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionOfferCodePricesEnum[keyof typeof SubscriptionOfferCodesPricesGetToManyRelatedFieldsSubscriptionOfferCodePricesEnum];
/**
 * @export
 */
export const SubscriptionOfferCodesPricesGetToManyRelatedIncludeEnum = {
    SubscriptionPricePoint: 'subscriptionPricePoint',
    Territory: 'territory'
} as const;
export type SubscriptionOfferCodesPricesGetToManyRelatedIncludeEnum = typeof SubscriptionOfferCodesPricesGetToManyRelatedIncludeEnum[keyof typeof SubscriptionOfferCodesPricesGetToManyRelatedIncludeEnum];
