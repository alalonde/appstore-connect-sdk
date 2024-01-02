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
 * @interface GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsDataInner
 */
export interface GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsDataInner {
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsDataInner
     */
    type: GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsDataInner
     */
    id: string;
}


/**
 * @export
 */
export const GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsDataInnerTypeEnum = {
    GameCenterMatchmakingTestRequests: 'gameCenterMatchmakingTestRequests'
} as const;
export type GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsDataInnerTypeEnum = typeof GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsDataInnerTypeEnum[keyof typeof GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsDataInnerTypeEnum];


/**
 * Check if a given object implements the GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsDataInner interface.
 */
export function instanceOfGameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsDataInner(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "id" in value;

    return isInstance;
}

export function GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsDataInnerFromJSON(json: any): GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsDataInner {
    return GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsDataInnerFromJSONTyped(json, false);
}

export function GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsDataInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsDataInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
        'id': json['id'],
    };
}

export function GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsDataInnerToJSON(value?: GameCenterMatchmakingRuleSetTestCreateRequestDataRelationshipsMatchmakingRequestsDataInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'id': value.id,
    };
}

