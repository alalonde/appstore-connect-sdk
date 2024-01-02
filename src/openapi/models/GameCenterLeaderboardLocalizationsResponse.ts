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
import type { GameCenterLeaderboardLocalization } from './GameCenterLeaderboardLocalization';
import {
    GameCenterLeaderboardLocalizationFromJSON,
    GameCenterLeaderboardLocalizationFromJSONTyped,
    GameCenterLeaderboardLocalizationToJSON,
} from './GameCenterLeaderboardLocalization';
import type { GameCenterLeaderboardLocalizationsResponseIncludedInner } from './GameCenterLeaderboardLocalizationsResponseIncludedInner';
import {
    GameCenterLeaderboardLocalizationsResponseIncludedInnerFromJSON,
    GameCenterLeaderboardLocalizationsResponseIncludedInnerFromJSONTyped,
    GameCenterLeaderboardLocalizationsResponseIncludedInnerToJSON,
} from './GameCenterLeaderboardLocalizationsResponseIncludedInner';
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
 * @interface GameCenterLeaderboardLocalizationsResponse
 */
export interface GameCenterLeaderboardLocalizationsResponse {
    /**
     * 
     * @type {Array<GameCenterLeaderboardLocalization>}
     * @memberof GameCenterLeaderboardLocalizationsResponse
     */
    data: Array<GameCenterLeaderboardLocalization>;
    /**
     * 
     * @type {Array<GameCenterLeaderboardLocalizationsResponseIncludedInner>}
     * @memberof GameCenterLeaderboardLocalizationsResponse
     */
    included?: Array<GameCenterLeaderboardLocalizationsResponseIncludedInner>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof GameCenterLeaderboardLocalizationsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterLeaderboardLocalizationsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the GameCenterLeaderboardLocalizationsResponse interface.
 */
export function instanceOfGameCenterLeaderboardLocalizationsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterLeaderboardLocalizationsResponseFromJSON(json: any): GameCenterLeaderboardLocalizationsResponse {
    return GameCenterLeaderboardLocalizationsResponseFromJSONTyped(json, false);
}

export function GameCenterLeaderboardLocalizationsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardLocalizationsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GameCenterLeaderboardLocalizationFromJSON)),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(GameCenterLeaderboardLocalizationsResponseIncludedInnerFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function GameCenterLeaderboardLocalizationsResponseToJSON(value?: GameCenterLeaderboardLocalizationsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(GameCenterLeaderboardLocalizationToJSON)),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(GameCenterLeaderboardLocalizationsResponseIncludedInnerToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

