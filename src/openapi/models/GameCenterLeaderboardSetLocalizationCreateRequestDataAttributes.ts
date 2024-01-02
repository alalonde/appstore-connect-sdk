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
 * @interface GameCenterLeaderboardSetLocalizationCreateRequestDataAttributes
 */
export interface GameCenterLeaderboardSetLocalizationCreateRequestDataAttributes {
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetLocalizationCreateRequestDataAttributes
     */
    locale: string;
    /**
     * 
     * @type {string}
     * @memberof GameCenterLeaderboardSetLocalizationCreateRequestDataAttributes
     */
    name: string;
}

/**
 * Check if a given object implements the GameCenterLeaderboardSetLocalizationCreateRequestDataAttributes interface.
 */
export function instanceOfGameCenterLeaderboardSetLocalizationCreateRequestDataAttributes(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "locale" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function GameCenterLeaderboardSetLocalizationCreateRequestDataAttributesFromJSON(json: any): GameCenterLeaderboardSetLocalizationCreateRequestDataAttributes {
    return GameCenterLeaderboardSetLocalizationCreateRequestDataAttributesFromJSONTyped(json, false);
}

export function GameCenterLeaderboardSetLocalizationCreateRequestDataAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterLeaderboardSetLocalizationCreateRequestDataAttributes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'locale': json['locale'],
        'name': json['name'],
    };
}

export function GameCenterLeaderboardSetLocalizationCreateRequestDataAttributesToJSON(value?: GameCenterLeaderboardSetLocalizationCreateRequestDataAttributes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'locale': value.locale,
        'name': value.name,
    };
}

