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
/**
 * 
 * @export
 * @interface GameCenterAchievementReleaseAttributes
 */
export interface GameCenterAchievementReleaseAttributes {
    /**
     * 
     * @type {boolean}
     * @memberof GameCenterAchievementReleaseAttributes
     */
    live?: boolean;
}

/**
 * Check if a given object implements the GameCenterAchievementReleaseAttributes interface.
 */
export function instanceOfGameCenterAchievementReleaseAttributes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterAchievementReleaseAttributesFromJSON(json: any): GameCenterAchievementReleaseAttributes {
    return GameCenterAchievementReleaseAttributesFromJSONTyped(json, false);
}

export function GameCenterAchievementReleaseAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterAchievementReleaseAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'live': !exists(json, 'live') ? undefined : json['live'],
    };
}

export function GameCenterAchievementReleaseAttributesToJSON(value?: GameCenterAchievementReleaseAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'live': value.live,
    };
}

