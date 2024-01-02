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
import type { GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner } from './GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner';
import {
    GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerFromJSON,
    GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerFromJSONTyped,
    GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerToJSON,
} from './GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner';
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
 * @interface GameCenterDetailGameCenterLeaderboardSetsLinkagesResponse
 */
export interface GameCenterDetailGameCenterLeaderboardSetsLinkagesResponse {
    /**
     * 
     * @type {Array<GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner>}
     * @memberof GameCenterDetailGameCenterLeaderboardSetsLinkagesResponse
     */
    data: Array<GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof GameCenterDetailGameCenterLeaderboardSetsLinkagesResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterDetailGameCenterLeaderboardSetsLinkagesResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the GameCenterDetailGameCenterLeaderboardSetsLinkagesResponse interface.
 */
export function instanceOfGameCenterDetailGameCenterLeaderboardSetsLinkagesResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterDetailGameCenterLeaderboardSetsLinkagesResponseFromJSON(json: any): GameCenterDetailGameCenterLeaderboardSetsLinkagesResponse {
    return GameCenterDetailGameCenterLeaderboardSetsLinkagesResponseFromJSONTyped(json, false);
}

export function GameCenterDetailGameCenterLeaderboardSetsLinkagesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterDetailGameCenterLeaderboardSetsLinkagesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function GameCenterDetailGameCenterLeaderboardSetsLinkagesResponseToJSON(value?: GameCenterDetailGameCenterLeaderboardSetsLinkagesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(GameCenterDetailRelationshipsGameCenterLeaderboardSetsDataInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

