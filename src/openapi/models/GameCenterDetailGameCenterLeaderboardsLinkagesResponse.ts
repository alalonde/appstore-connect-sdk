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
import type { GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner } from './GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner';
import {
    GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSON,
    GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSONTyped,
    GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSON,
} from './GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner';
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
 * @interface GameCenterDetailGameCenterLeaderboardsLinkagesResponse
 */
export interface GameCenterDetailGameCenterLeaderboardsLinkagesResponse {
    /**
     * 
     * @type {Array<GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner>}
     * @memberof GameCenterDetailGameCenterLeaderboardsLinkagesResponse
     */
    data: Array<GameCenterDetailRelationshipsGameCenterLeaderboardsDataInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof GameCenterDetailGameCenterLeaderboardsLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterDetailGameCenterLeaderboardsLinkagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the GameCenterDetailGameCenterLeaderboardsLinkagesResponse interface.
 */
export function instanceOfGameCenterDetailGameCenterLeaderboardsLinkagesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterDetailGameCenterLeaderboardsLinkagesResponseFromJSON(json: any): GameCenterDetailGameCenterLeaderboardsLinkagesResponse {
    return GameCenterDetailGameCenterLeaderboardsLinkagesResponseFromJSONTyped(json, false);
}

export function GameCenterDetailGameCenterLeaderboardsLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailGameCenterLeaderboardsLinkagesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function GameCenterDetailGameCenterLeaderboardsLinkagesResponseToJSON(value?: GameCenterDetailGameCenterLeaderboardsLinkagesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(GameCenterDetailRelationshipsGameCenterLeaderboardsDataInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

