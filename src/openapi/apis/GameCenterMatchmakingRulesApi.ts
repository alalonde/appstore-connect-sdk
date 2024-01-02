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
  GameCenterMatchmakingBooleanRuleResultsV1MetricResponse,
  GameCenterMatchmakingNumberRuleResultsV1MetricResponse,
  GameCenterMatchmakingRuleCreateRequest,
  GameCenterMatchmakingRuleErrorsV1MetricResponse,
  GameCenterMatchmakingRuleResponse,
  GameCenterMatchmakingRuleUpdateRequest,
} from '../models';
import {
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
    GameCenterMatchmakingBooleanRuleResultsV1MetricResponseFromJSON,
    GameCenterMatchmakingBooleanRuleResultsV1MetricResponseToJSON,
    GameCenterMatchmakingNumberRuleResultsV1MetricResponseFromJSON,
    GameCenterMatchmakingNumberRuleResultsV1MetricResponseToJSON,
    GameCenterMatchmakingRuleCreateRequestFromJSON,
    GameCenterMatchmakingRuleCreateRequestToJSON,
    GameCenterMatchmakingRuleErrorsV1MetricResponseFromJSON,
    GameCenterMatchmakingRuleErrorsV1MetricResponseToJSON,
    GameCenterMatchmakingRuleResponseFromJSON,
    GameCenterMatchmakingRuleResponseToJSON,
    GameCenterMatchmakingRuleUpdateRequestFromJSON,
    GameCenterMatchmakingRuleUpdateRequestToJSON,
} from '../models';

export interface GameCenterMatchmakingRulesCreateInstanceRequest {
    gameCenterMatchmakingRuleCreateRequest: GameCenterMatchmakingRuleCreateRequest;
}

export interface GameCenterMatchmakingRulesDeleteInstanceRequest {
    id: string;
}

export interface GameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsRequest {
    id: string;
    granularity: Array<GameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsGranularityEnum>;
    limit?: number;
    groupBy?: Array<GameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsGroupByEnum>;
    filterResult?: string;
    filterGameCenterMatchmakingQueue?: string;
    sort?: Array<GameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsSortEnum>;
}

export interface GameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsRequest {
    id: string;
    granularity: Array<GameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsGranularityEnum>;
    limit?: number;
    groupBy?: Array<GameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsGroupByEnum>;
    filterGameCenterMatchmakingQueue?: string;
    sort?: Array<GameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsSortEnum>;
}

export interface GameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsRequest {
    id: string;
    granularity: Array<GameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsGranularityEnum>;
    limit?: number;
    groupBy?: Array<GameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsGroupByEnum>;
    filterGameCenterMatchmakingQueue?: string;
    sort?: Array<GameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsSortEnum>;
}

export interface GameCenterMatchmakingRulesUpdateInstanceRequest {
    id: string;
    gameCenterMatchmakingRuleUpdateRequest: GameCenterMatchmakingRuleUpdateRequest;
}

/**
 * 
 */
export class GameCenterMatchmakingRulesApi extends runtime.BaseAPI {

    /**
     */
    async gameCenterMatchmakingRulesCreateInstanceRaw(requestParameters: GameCenterMatchmakingRulesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingRuleResponse>> {
        if (requestParameters.gameCenterMatchmakingRuleCreateRequest === null || requestParameters.gameCenterMatchmakingRuleCreateRequest === undefined) {
            throw new runtime.RequiredError('gameCenterMatchmakingRuleCreateRequest','Required parameter requestParameters.gameCenterMatchmakingRuleCreateRequest was null or undefined when calling gameCenterMatchmakingRulesCreateInstance.');
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
            path: `/v1/gameCenterMatchmakingRules`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GameCenterMatchmakingRuleCreateRequestToJSON(requestParameters.gameCenterMatchmakingRuleCreateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterMatchmakingRuleResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterMatchmakingRulesCreateInstance(requestParameters: GameCenterMatchmakingRulesCreateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingRuleResponse> {
        const response = await this.gameCenterMatchmakingRulesCreateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterMatchmakingRulesDeleteInstanceRaw(requestParameters: GameCenterMatchmakingRulesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gameCenterMatchmakingRulesDeleteInstance.');
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
            path: `/v1/gameCenterMatchmakingRules/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async gameCenterMatchmakingRulesDeleteInstance(requestParameters: GameCenterMatchmakingRulesDeleteInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.gameCenterMatchmakingRulesDeleteInstanceRaw(requestParameters, initOverrides);
    }

    /**
     */
    async gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsRaw(requestParameters: GameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingBooleanRuleResultsV1MetricResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics.');
        }

        if (requestParameters.granularity === null || requestParameters.granularity === undefined) {
            throw new runtime.RequiredError('granularity','Required parameter requestParameters.granularity was null or undefined when calling gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.granularity) {
            queryParameters['granularity'] = requestParameters.granularity.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.groupBy) {
            queryParameters['groupBy'] = requestParameters.groupBy.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterResult !== undefined) {
            queryParameters['filter[result]'] = requestParameters.filterResult;
        }

        if (requestParameters.filterGameCenterMatchmakingQueue !== undefined) {
            queryParameters['filter[gameCenterMatchmakingQueue]'] = requestParameters.filterGameCenterMatchmakingQueue;
        }

        if (requestParameters.sort) {
            queryParameters['sort'] = requestParameters.sort.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/gameCenterMatchmakingRules/{id}/metrics/matchmakingBooleanRuleResults`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterMatchmakingBooleanRuleResultsV1MetricResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetrics(requestParameters: GameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingBooleanRuleResultsV1MetricResponse> {
        const response = await this.gameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsRaw(requestParameters: GameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingNumberRuleResultsV1MetricResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics.');
        }

        if (requestParameters.granularity === null || requestParameters.granularity === undefined) {
            throw new runtime.RequiredError('granularity','Required parameter requestParameters.granularity was null or undefined when calling gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.granularity) {
            queryParameters['granularity'] = requestParameters.granularity.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.groupBy) {
            queryParameters['groupBy'] = requestParameters.groupBy.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterGameCenterMatchmakingQueue !== undefined) {
            queryParameters['filter[gameCenterMatchmakingQueue]'] = requestParameters.filterGameCenterMatchmakingQueue;
        }

        if (requestParameters.sort) {
            queryParameters['sort'] = requestParameters.sort.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/gameCenterMatchmakingRules/{id}/metrics/matchmakingNumberRuleResults`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterMatchmakingNumberRuleResultsV1MetricResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetrics(requestParameters: GameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingNumberRuleResultsV1MetricResponse> {
        const response = await this.gameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsRaw(requestParameters: GameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingRuleErrorsV1MetricResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics.');
        }

        if (requestParameters.granularity === null || requestParameters.granularity === undefined) {
            throw new runtime.RequiredError('granularity','Required parameter requestParameters.granularity was null or undefined when calling gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics.');
        }

        const queryParameters: any = {};

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.granularity) {
            queryParameters['granularity'] = requestParameters.granularity.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.groupBy) {
            queryParameters['groupBy'] = requestParameters.groupBy.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.filterGameCenterMatchmakingQueue !== undefined) {
            queryParameters['filter[gameCenterMatchmakingQueue]'] = requestParameters.filterGameCenterMatchmakingQueue;
        }

        if (requestParameters.sort) {
            queryParameters['sort'] = requestParameters.sort.join(runtime.COLLECTION_FORMATS["csv"]);
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
            path: `/v1/gameCenterMatchmakingRules/{id}/metrics/matchmakingRuleErrors`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterMatchmakingRuleErrorsV1MetricResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetrics(requestParameters: GameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingRuleErrorsV1MetricResponse> {
        const response = await this.gameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async gameCenterMatchmakingRulesUpdateInstanceRaw(requestParameters: GameCenterMatchmakingRulesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GameCenterMatchmakingRuleResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling gameCenterMatchmakingRulesUpdateInstance.');
        }

        if (requestParameters.gameCenterMatchmakingRuleUpdateRequest === null || requestParameters.gameCenterMatchmakingRuleUpdateRequest === undefined) {
            throw new runtime.RequiredError('gameCenterMatchmakingRuleUpdateRequest','Required parameter requestParameters.gameCenterMatchmakingRuleUpdateRequest was null or undefined when calling gameCenterMatchmakingRulesUpdateInstance.');
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
            path: `/v1/gameCenterMatchmakingRules/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: GameCenterMatchmakingRuleUpdateRequestToJSON(requestParameters.gameCenterMatchmakingRuleUpdateRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GameCenterMatchmakingRuleResponseFromJSON(jsonValue));
    }

    /**
     */
    async gameCenterMatchmakingRulesUpdateInstance(requestParameters: GameCenterMatchmakingRulesUpdateInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GameCenterMatchmakingRuleResponse> {
        const response = await this.gameCenterMatchmakingRulesUpdateInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const GameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsGranularityEnum = {
    P1D: 'P1D',
    Pt1H: 'PT1H',
    Pt15M: 'PT15M'
} as const;
export type GameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsGranularityEnum = typeof GameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsGranularityEnum[keyof typeof GameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsGranularityEnum];
/**
 * @export
 */
export const GameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsGroupByEnum = {
    GameCenterMatchmakingQueue: 'gameCenterMatchmakingQueue',
    Result: 'result'
} as const;
export type GameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsGroupByEnum = typeof GameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsGroupByEnum[keyof typeof GameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsGroupByEnum];
/**
 * @export
 */
export const GameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsSortEnum = {
    Count: 'count',
    Count: '-count'
} as const;
export type GameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsSortEnum = typeof GameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsSortEnum[keyof typeof GameCenterMatchmakingRulesMatchmakingBooleanRuleResultsGetMetricsSortEnum];
/**
 * @export
 */
export const GameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsGranularityEnum = {
    P1D: 'P1D',
    Pt1H: 'PT1H',
    Pt15M: 'PT15M'
} as const;
export type GameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsGranularityEnum = typeof GameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsGranularityEnum[keyof typeof GameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsGranularityEnum];
/**
 * @export
 */
export const GameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsGroupByEnum = {
    GameCenterMatchmakingQueue: 'gameCenterMatchmakingQueue'
} as const;
export type GameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsGroupByEnum = typeof GameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsGroupByEnum[keyof typeof GameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsGroupByEnum];
/**
 * @export
 */
export const GameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsSortEnum = {
    AverageResult: 'averageResult',
    AverageResult: '-averageResult',
    Count: 'count',
    Count: '-count',
    P50Result: 'p50Result',
    P50Result: '-p50Result',
    P95Result: 'p95Result',
    P95Result: '-p95Result'
} as const;
export type GameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsSortEnum = typeof GameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsSortEnum[keyof typeof GameCenterMatchmakingRulesMatchmakingNumberRuleResultsGetMetricsSortEnum];
/**
 * @export
 */
export const GameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsGranularityEnum = {
    P1D: 'P1D',
    Pt1H: 'PT1H',
    Pt15M: 'PT15M'
} as const;
export type GameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsGranularityEnum = typeof GameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsGranularityEnum[keyof typeof GameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsGranularityEnum];
/**
 * @export
 */
export const GameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsGroupByEnum = {
    GameCenterMatchmakingQueue: 'gameCenterMatchmakingQueue'
} as const;
export type GameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsGroupByEnum = typeof GameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsGroupByEnum[keyof typeof GameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsGroupByEnum];
/**
 * @export
 */
export const GameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsSortEnum = {
    Count: 'count',
    Count: '-count'
} as const;
export type GameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsSortEnum = typeof GameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsSortEnum[keyof typeof GameCenterMatchmakingRulesMatchmakingRuleErrorsGetMetricsSortEnum];
