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
import type { AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters } from './AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters';
import {
    AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersFromJSON,
    AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersFromJSONTyped,
    AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersToJSON,
} from './AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensions
 */
export interface GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensions {
    /**
     * 
     * @type {AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters}
     * @memberof GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensions
     */
    gameCenterMatchmakingQueue?: AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTesters;
}

/**
 * Check if a given object implements the GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensions interface.
 */
export function instanceOfGameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensionsFromJSON(json: any): GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensions {
    return GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensionsFromJSONTyped(json, false);
}

export function GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensions {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gameCenterMatchmakingQueue': !exists(json, 'gameCenterMatchmakingQueue') ? undefined : AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersFromJSON(json['gameCenterMatchmakingQueue']),
    };
}

export function GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensionsToJSON(value?: GameCenterMatchmakingNumberRuleResultsV1MetricResponseDataInnerDimensions | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gameCenterMatchmakingQueue': AppsBetaTesterUsagesV1MetricResponseDataInnerDimensionsBetaTestersToJSON(value.gameCenterMatchmakingQueue),
    };
}

