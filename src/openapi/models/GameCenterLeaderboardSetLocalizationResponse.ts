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
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { GameCenterLeaderboardSetLocalization } from './GameCenterLeaderboardSetLocalization';
import {
    GameCenterLeaderboardSetLocalizationFromJSON,
    GameCenterLeaderboardSetLocalizationFromJSONTyped,
    GameCenterLeaderboardSetLocalizationToJSON,
} from './GameCenterLeaderboardSetLocalization';
import type { GameCenterLeaderboardSetLocalizationsResponseIncludedInner } from './GameCenterLeaderboardSetLocalizationsResponseIncludedInner';
import {
    GameCenterLeaderboardSetLocalizationsResponseIncludedInnerFromJSON,
    GameCenterLeaderboardSetLocalizationsResponseIncludedInnerFromJSONTyped,
    GameCenterLeaderboardSetLocalizationsResponseIncludedInnerToJSON,
} from './GameCenterLeaderboardSetLocalizationsResponseIncludedInner';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetLocalizationResponse
 */
export interface GameCenterLeaderboardSetLocalizationResponse {
    /**
     * 
     * @type {GameCenterLeaderboardSetLocalization}
     * @memberof GameCenterLeaderboardSetLocalizationResponse
     */
    data: GameCenterLeaderboardSetLocalization;
    /**
     * 
     * @type {Array<GameCenterLeaderboardSetLocalizationsResponseIncludedInner>}
     * @memberof GameCenterLeaderboardSetLocalizationResponse
     */
    included?: Array<GameCenterLeaderboardSetLocalizationsResponseIncludedInner>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof GameCenterLeaderboardSetLocalizationResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetLocalizationResponse interface.
 */
export function instanceOfGameCenterLeaderboardSetLocalizationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterLeaderboardSetLocalizationResponseFromJSON(json: any): GameCenterLeaderboardSetLocalizationResponse {
    return GameCenterLeaderboardSetLocalizationResponseFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetLocalizationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetLocalizationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterLeaderboardSetLocalizationFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(GameCenterLeaderboardSetLocalizationsResponseIncludedInnerFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function GameCenterLeaderboardSetLocalizationResponseToJSON(value?: GameCenterLeaderboardSetLocalizationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterLeaderboardSetLocalizationToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(GameCenterLeaderboardSetLocalizationsResponseIncludedInnerToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

