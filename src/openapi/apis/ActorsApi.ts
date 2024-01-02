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
  ActorResponse,
  ActorsResponse,
  ErrorResponse,
} from '../models';
import {
    ActorResponseFromJSON,
    ActorResponseToJSON,
    ActorsResponseFromJSON,
    ActorsResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface ActorsGetCollectionRequest {
    filterId: Array<string>;
    fieldsActors?: Array<ActorsGetCollectionFieldsActorsEnum>;
    limit?: number;
}

export interface ActorsGetInstanceRequest {
    id: string;
    fieldsActors?: Array<ActorsGetInstanceFieldsActorsEnum>;
}

/**
 * 
 */
export class ActorsApi extends runtime.BaseAPI {

    /**
     */
    async actorsGetCollectionRaw(requestParameters: ActorsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ActorsResponse>> {
        if (requestParameters.filterId === null || requestParameters.filterId === undefined) {
            throw new runtime.RequiredError('filterId','Required parameter requestParameters.filterId was null or undefined when calling actorsGetCollection.');
        }

        const queryParameters: any = {};

        if (requestParameters.filterId) {
            queryParameters['filter[id]'] = requestParameters.filterId.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsActors) {
            queryParameters['fields[actors]'] = requestParameters.fieldsActors.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/actors`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ActorsResponseFromJSON(jsonValue));
    }

    /**
     */
    async actorsGetCollection(requestParameters: ActorsGetCollectionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ActorsResponse> {
        const response = await this.actorsGetCollectionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async actorsGetInstanceRaw(requestParameters: ActorsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ActorResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling actorsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsActors) {
            queryParameters['fields[actors]'] = requestParameters.fieldsActors.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/actors/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ActorResponseFromJSON(jsonValue));
    }

    /**
     */
    async actorsGetInstance(requestParameters: ActorsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ActorResponse> {
        const response = await this.actorsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const ActorsGetCollectionFieldsActorsEnum = {
    ActorType: 'actorType',
    ApiKeyId: 'apiKeyId',
    UserEmail: 'userEmail',
    UserFirstName: 'userFirstName',
    UserLastName: 'userLastName'
} as const;
export type ActorsGetCollectionFieldsActorsEnum = typeof ActorsGetCollectionFieldsActorsEnum[keyof typeof ActorsGetCollectionFieldsActorsEnum];
/**
 * @export
 */
export const ActorsGetInstanceFieldsActorsEnum = {
    ActorType: 'actorType',
    ApiKeyId: 'apiKeyId',
    UserEmail: 'userEmail',
    UserFirstName: 'userFirstName',
    UserLastName: 'userLastName'
} as const;
export type ActorsGetInstanceFieldsActorsEnum = typeof ActorsGetInstanceFieldsActorsEnum[keyof typeof ActorsGetInstanceFieldsActorsEnum];
