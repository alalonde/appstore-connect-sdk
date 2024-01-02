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

import { exists, mapValues } from '../runtime';
import type { GameCenterMatchmakingQueueRequestsV1MetricResponseDataInner } from './GameCenterMatchmakingQueueRequestsV1MetricResponseDataInner';
import {
    GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerFromJSON,
    GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerFromJSONTyped,
    GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerToJSON,
} from './GameCenterMatchmakingQueueRequestsV1MetricResponseDataInner';
import type { PagedDocumentLinks } from './PagedDocumentLinks';
import {
    PagedDocumentLinksFromJSON,
    PagedDocumentLinksFromJSONTyped,
    PagedDocumentLinksToJSON,
} from './PagedDocumentLinks';
import type { PagingInformation } from './PagingInformation';
import {
    PagingInformationFromJSON,
    PagingInformationFromJSONTyped,
    PagingInformationToJSON,
} from './PagingInformation';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingQueueRequestsV1MetricResponse
 */
export interface GameCenterMatchmakingQueueRequestsV1MetricResponse {
    /**
     * 
     * @type {Array<GameCenterMatchmakingQueueRequestsV1MetricResponseDataInner>}
     * @memberof GameCenterMatchmakingQueueRequestsV1MetricResponse
     */
    data: Array<GameCenterMatchmakingQueueRequestsV1MetricResponseDataInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof GameCenterMatchmakingQueueRequestsV1MetricResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterMatchmakingQueueRequestsV1MetricResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the GameCenterMatchmakingQueueRequestsV1MetricResponse interface.
 */
export function instanceOfGameCenterMatchmakingQueueRequestsV1MetricResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterMatchmakingQueueRequestsV1MetricResponseFromJSON(json: any): GameCenterMatchmakingQueueRequestsV1MetricResponse {
    return GameCenterMatchmakingQueueRequestsV1MetricResponseFromJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueRequestsV1MetricResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueueRequestsV1MetricResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function GameCenterMatchmakingQueueRequestsV1MetricResponseToJSON(value?: GameCenterMatchmakingQueueRequestsV1MetricResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(GameCenterMatchmakingQueueRequestsV1MetricResponseDataInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

