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
import type { AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks } from './AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks';
import {
    AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSON,
    AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSONTyped,
    AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksToJSON,
} from './AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks';
import type { GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData } from './GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData';
import {
    GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataFromJSON,
    GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataFromJSONTyped,
    GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataToJSON,
} from './GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData';

/**
 * 
 * @export
 * @interface GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization
 */
export interface GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization {
    /**
     * 
     * @type {AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks}
     * @memberof GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization
     */
    links?: AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinks;
    /**
     * 
     * @type {GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData}
     * @memberof GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization
     */
    data?: GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationData;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization interface.
 */
export function instanceOfGameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationFromJSON(json: any): GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization {
    return GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksFromJSON(json['links']),
        'data': !exists(json, 'data') ? undefined : GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataFromJSON(json['data']),
    };
}

export function GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationToJSON(value?: GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': AppAvailabilityV2RelationshipsTerritoryAvailabilitiesLinksToJSON(value.links),
        'data': GameCenterLeaderboardSetImageRelationshipsGameCenterLeaderboardSetLocalizationDataToJSON(value.data),
    };
}

