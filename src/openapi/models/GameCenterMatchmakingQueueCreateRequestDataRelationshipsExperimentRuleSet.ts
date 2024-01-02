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
import type { GameCenterMatchmakingQueueRelationshipsRuleSetData } from './GameCenterMatchmakingQueueRelationshipsRuleSetData';
import {
    GameCenterMatchmakingQueueRelationshipsRuleSetDataFromJSON,
    GameCenterMatchmakingQueueRelationshipsRuleSetDataFromJSONTyped,
    GameCenterMatchmakingQueueRelationshipsRuleSetDataToJSON,
} from './GameCenterMatchmakingQueueRelationshipsRuleSetData';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingQueueCreateRequestDataRelationshipsExperimentRuleSet
 */
export interface GameCenterMatchmakingQueueCreateRequestDataRelationshipsExperimentRuleSet {
    /**
     * 
     * @type {GameCenterMatchmakingQueueRelationshipsRuleSetData}
     * @memberof GameCenterMatchmakingQueueCreateRequestDataRelationshipsExperimentRuleSet
     */
    data?: GameCenterMatchmakingQueueRelationshipsRuleSetData;
}

/**
 * Check if a given object implements the GameCenterMatchmakingQueueCreateRequestDataRelationshipsExperimentRuleSet interface.
 */
export function instanceOfGameCenterMatchmakingQueueCreateRequestDataRelationshipsExperimentRuleSet(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterMatchmakingQueueCreateRequestDataRelationshipsExperimentRuleSetFromJSON(json: any): GameCenterMatchmakingQueueCreateRequestDataRelationshipsExperimentRuleSet {
    return GameCenterMatchmakingQueueCreateRequestDataRelationshipsExperimentRuleSetFromJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueCreateRequestDataRelationshipsExperimentRuleSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueueCreateRequestDataRelationshipsExperimentRuleSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : GameCenterMatchmakingQueueRelationshipsRuleSetDataFromJSON(json['data']),
    };
}

export function GameCenterMatchmakingQueueCreateRequestDataRelationshipsExperimentRuleSetToJSON(value?: GameCenterMatchmakingQueueCreateRequestDataRelationshipsExperimentRuleSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterMatchmakingQueueRelationshipsRuleSetDataToJSON(value.data),
    };
}

