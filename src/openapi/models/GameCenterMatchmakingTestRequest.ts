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
import type { ResourceLinks } from './ResourceLinks';
import {
    ResourceLinksFromJSON,
    ResourceLinksFromJSONTyped,
    ResourceLinksToJSON,
} from './ResourceLinks';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingTestRequest
 */
export interface GameCenterMatchmakingTestRequest {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingTestRequest
     */
    type: GameCenterMatchmakingTestRequestTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingTestRequest
     */
    id: string;
    /**
     * 
     * @type {ResourceLinks}
     * @memberof GameCenterMatchmakingTestRequest
     */
    links?: ResourceLinks;
}


/**
 * @export
 */
export const GameCenterMatchmakingTestRequestTypeEnum = {
    GameCenterMatchmakingTestRequests: 'gameCenterMatchmakingTestRequests'
} as const;
export type GameCenterMatchmakingTestRequestTypeEnum = typeof GameCenterMatchmakingTestRequestTypeEnum[keyof typeof GameCenterMatchmakingTestRequestTypeEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingTestRequest interface.
 */
export function instanceOfGameCenterMatchmakingTestRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterMatchmakingTestRequestFromJSON(json: any): GameCenterMatchmakingTestRequest {
    return GameCenterMatchmakingTestRequestFromJSONTyped(json, false);
}

export function GameCenterMatchmakingTestRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingTestRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
        'links': !exists(json, 'links') ? undefined : ResourceLinksFromJSON(json['links']),
    };
}

export function GameCenterMatchmakingTestRequestToJSON(value?: GameCenterMatchmakingTestRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
        'links': ResourceLinksToJSON(value.links),
    };
}

