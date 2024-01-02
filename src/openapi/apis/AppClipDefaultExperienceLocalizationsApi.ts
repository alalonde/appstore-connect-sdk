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
  AppClipDefaultExperienceLocalizationCreateRequest,
  AppClipDefaultExperienceLocalizationResponse,
  AppClipDefaultExperienceLocalizationUpdateRequest,
  AppClipHeaderImageResponse,
  ErrorResponse,
} from '../models';
import {
    AppClipDefaultExperienceLocalizationCreateRequestFromJSON,
    AppClipDefaultExperienceLocalizationCreateRequestToJSON,
    AppClipDefaultExperienceLocalizationResponseFromJSON,
    AppClipDefaultExperienceLocalizationResponseToJSON,
    AppClipDefaultExperienceLocalizationUpdateRequestFromJSON,
    AppClipDefaultExperienceLocalizationUpdateRequestToJSON,
    AppClipHeaderImageResponseFromJSON,
    AppClipHeaderImageResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelatedRequest {
    id: string;
    fieldsAppClipHeaderImages?: Array<AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelatedFieldsAppClipHeaderImagesEnum>;
    fieldsAppClipDefaultExperienceLocalizations?: Array<AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelatedFieldsAppClipDefaultExperienceLocalizationsEnum>;
    include?: Array<AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelatedIncludeEnum>;
}

export interface AppClipDefaultExperienceLocalizationsCreateInstanceRequest {
    appClipDefaultExperienceLocalizationCreateRequest: AppClipDefaultExperienceLocalizationCreateRequest;
}

export interface AppClipDefaultExperienceLocalizationsDeleteInstanceRequest {
    id: string;
}

export interface AppClipDefaultExperienceLocalizationsGetInstanceRequest {
    id: string;
    fieldsAppClipDefaultExperienceLocalizations?: Array<AppClipDefaultExperienceLocalizationsGetInstanceFieldsAppClipDefaultExperienceLocalizationsEnum>;
    include?: Array<AppClipDefaultExperienceLocalizationsGetInstanceIncludeEnum>;
    fieldsAppClipHeaderImages?: Array<AppClipDefaultExperienceLocalizationsGetInstanceFieldsAppClipHeaderImagesEnum>;
}

export interface AppClipDefaultExperienceLocalizationsUpdateInstanceRequest {
    id: string;
    appClipDefaultExperienceLocalizationUpdateRequest: AppClipDefaultExperienceLocalizationUpdateRequest;
}

/**
 * 
 */
export class AppClipDefaultExperienceLocalizationsApi extends runtime.BaseAPI {

    /**
     */
    async appClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelatedRaw(requestParameters: AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipHeaderImageResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsAppClipHeaderImages) {
            queryParameters['fields[appClipHeaderImages]'] = requestParameters.fieldsAppClipHeaderImages.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppClipDefaultExperienceLocalizations) {
            queryParameters['fields[appClipDefaultExperienceLocalizations]'] = requestParameters.fieldsAppClipDefaultExperienceLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/appClipDefaultExperienceLocalizations/{id}/appClipHeaderImage`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipHeaderImageResponseFromJSON(jsonValue));
    }

    /**
     */
    async appClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelated(requestParameters: AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipHeaderImageResponse> {
        const response = await this.appClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appClipDefaultExperienceLocalizationsCreateInstanceRaw(requestParameters: AppClipDefaultExperienceLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipDefaultExperienceLocalizationResponse>> {
        if (requestParameters.appClipDefaultExperienceLocalizationCreateRequest === null || requestParameters.appClipDefaultExperienceLocalizationCreateRequest === undefined) {
            throw new runtime.RequiredError('appClipDefaultExperienceLocalizationCreateRequest','Required parameter requestParameters.appClipDefaultExperienceLocalizationCreateRequest was null or undefined when calling appClipDefaultExperienceLocalizationsCreateInstance.');
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
            path: `/v1/appClipDefaultExperienceLocalizations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppClipDefaultExperienceLocalizationCreateRequestToJSON(requestParameters.appClipDefaultExperienceLocalizationCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipDefaultExperienceLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async appClipDefaultExperienceLocalizationsCreateInstance(requestParameters: AppClipDefaultExperienceLocalizationsCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipDefaultExperienceLocalizationResponse> {
        const response = await this.appClipDefaultExperienceLocalizationsCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appClipDefaultExperienceLocalizationsDeleteInstanceRaw(requestParameters: AppClipDefaultExperienceLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appClipDefaultExperienceLocalizationsDeleteInstance.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/appClipDefaultExperienceLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async appClipDefaultExperienceLocalizationsDeleteInstance(requestParameters: AppClipDefaultExperienceLocalizationsDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.appClipDefaultExperienceLocalizationsDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async appClipDefaultExperienceLocalizationsGetInstanceRaw(requestParameters: AppClipDefaultExperienceLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipDefaultExperienceLocalizationResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appClipDefaultExperienceLocalizationsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsAppClipDefaultExperienceLocalizations) {
            queryParameters['fields[appClipDefaultExperienceLocalizations]'] = requestParameters.fieldsAppClipDefaultExperienceLocalizations.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsAppClipHeaderImages) {
            queryParameters['fields[appClipHeaderImages]'] = requestParameters.fieldsAppClipHeaderImages.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/appClipDefaultExperienceLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipDefaultExperienceLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async appClipDefaultExperienceLocalizationsGetInstance(requestParameters: AppClipDefaultExperienceLocalizationsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipDefaultExperienceLocalizationResponse> {
        const response = await this.appClipDefaultExperienceLocalizationsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async appClipDefaultExperienceLocalizationsUpdateInstanceRaw(requestParameters: AppClipDefaultExperienceLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppClipDefaultExperienceLocalizationResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling appClipDefaultExperienceLocalizationsUpdateInstance.');
        }

        if (requestParameters.appClipDefaultExperienceLocalizationUpdateRequest === null || requestParameters.appClipDefaultExperienceLocalizationUpdateRequest === undefined) {
            throw new runtime.RequiredError('appClipDefaultExperienceLocalizationUpdateRequest','Required parameter requestParameters.appClipDefaultExperienceLocalizationUpdateRequest was null or undefined when calling appClipDefaultExperienceLocalizationsUpdateInstance.');
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
            path: `/v1/appClipDefaultExperienceLocalizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AppClipDefaultExperienceLocalizationUpdateRequestToJSON(requestParameters.appClipDefaultExperienceLocalizationUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppClipDefaultExperienceLocalizationResponseFromJSON(jsonValue));
    }

    /**
     */
    async appClipDefaultExperienceLocalizationsUpdateInstance(requestParameters: AppClipDefaultExperienceLocalizationsUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppClipDefaultExperienceLocalizationResponse> {
        const response = await this.appClipDefaultExperienceLocalizationsUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelatedFieldsAppClipHeaderImagesEnum = {
    AppClipDefaultExperienceLocalization: 'appClipDefaultExperienceLocalization',
    AssetDeliveryState: 'assetDeliveryState',
    FileName: 'fileName',
    FileSize: 'fileSize',
    ImageAsset: 'imageAsset',
    SourceFileChecksum: 'sourceFileChecksum',
    UploadOperations: 'uploadOperations',
    Uploaded: 'uploaded'
} as const;
export type AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelatedFieldsAppClipHeaderImagesEnum = typeof AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelatedFieldsAppClipHeaderImagesEnum[keyof typeof AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelatedFieldsAppClipHeaderImagesEnum];
/**
 * @export
 */
export const AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelatedFieldsAppClipDefaultExperienceLocalizationsEnum = {
    AppClipDefaultExperience: 'appClipDefaultExperience',
    AppClipHeaderImage: 'appClipHeaderImage',
    Locale: 'locale',
    Subtitle: 'subtitle'
} as const;
export type AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelatedFieldsAppClipDefaultExperienceLocalizationsEnum = typeof AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelatedFieldsAppClipDefaultExperienceLocalizationsEnum[keyof typeof AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelatedFieldsAppClipDefaultExperienceLocalizationsEnum];
/**
 * @export
 */
export const AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelatedIncludeEnum = {
    AppClipDefaultExperienceLocalization: 'appClipDefaultExperienceLocalization'
} as const;
export type AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelatedIncludeEnum = typeof AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelatedIncludeEnum[keyof typeof AppClipDefaultExperienceLocalizationsAppClipHeaderImageGetToOneRelatedIncludeEnum];
/**
 * @export
 */
export const AppClipDefaultExperienceLocalizationsGetInstanceFieldsAppClipDefaultExperienceLocalizationsEnum = {
    AppClipDefaultExperience: 'appClipDefaultExperience',
    AppClipHeaderImage: 'appClipHeaderImage',
    Locale: 'locale',
    Subtitle: 'subtitle'
} as const;
export type AppClipDefaultExperienceLocalizationsGetInstanceFieldsAppClipDefaultExperienceLocalizationsEnum = typeof AppClipDefaultExperienceLocalizationsGetInstanceFieldsAppClipDefaultExperienceLocalizationsEnum[keyof typeof AppClipDefaultExperienceLocalizationsGetInstanceFieldsAppClipDefaultExperienceLocalizationsEnum];
/**
 * @export
 */
export const AppClipDefaultExperienceLocalizationsGetInstanceIncludeEnum = {
    AppClipDefaultExperience: 'appClipDefaultExperience',
    AppClipHeaderImage: 'appClipHeaderImage'
} as const;
export type AppClipDefaultExperienceLocalizationsGetInstanceIncludeEnum = typeof AppClipDefaultExperienceLocalizationsGetInstanceIncludeEnum[keyof typeof AppClipDefaultExperienceLocalizationsGetInstanceIncludeEnum];
/**
 * @export
 */
export const AppClipDefaultExperienceLocalizationsGetInstanceFieldsAppClipHeaderImagesEnum = {
    AppClipDefaultExperienceLocalization: 'appClipDefaultExperienceLocalization',
    AssetDeliveryState: 'assetDeliveryState',
    FileName: 'fileName',
    FileSize: 'fileSize',
    ImageAsset: 'imageAsset',
    SourceFileChecksum: 'sourceFileChecksum',
    UploadOperations: 'uploadOperations',
    Uploaded: 'uploaded'
} as const;
export type AppClipDefaultExperienceLocalizationsGetInstanceFieldsAppClipHeaderImagesEnum = typeof AppClipDefaultExperienceLocalizationsGetInstanceFieldsAppClipHeaderImagesEnum[keyof typeof AppClipDefaultExperienceLocalizationsGetInstanceFieldsAppClipHeaderImagesEnum];
