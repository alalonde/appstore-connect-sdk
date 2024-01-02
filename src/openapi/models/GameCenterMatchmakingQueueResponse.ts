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
import type { GameCenterMatchmakingQueue } from './GameCenterMatchmakingQueue';
import {
    GameCenterMatchmakingQueueFromJSON,
    GameCenterMatchmakingQueueFromJSONTyped,
    GameCenterMatchmakingQueueToJSON,
} from './GameCenterMatchmakingQueue';
import type { GameCenterMatchmakingRuleSet } from './GameCenterMatchmakingRuleSet';
import {
    GameCenterMatchmakingRuleSetFromJSON,
    GameCenterMatchmakingRuleSetFromJSONTyped,
    GameCenterMatchmakingRuleSetToJSON,
} from './GameCenterMatchmakingRuleSet';

/**
 * 
 * @export
 * @interface GameCenterMatchmakingQueueResponse
 */
export interface GameCenterMatchmakingQueueResponse {
    /**
     * 
     * @type {GameCenterMatchmakingQueue}
     * @memberof GameCenterMatchmakingQueueResponse
     */
    data: GameCenterMatchmakingQueue;
    /**
     * 
     * @type {Array<GameCenterMatchmakingRuleSet>}
     * @memberof GameCenterMatchmakingQueueResponse
     */
    included?: Array<GameCenterMatchmakingRuleSet>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof GameCenterMatchmakingQueueResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the GameCenterMatchmakingQueueResponse interface.
 */
export function instanceOfGameCenterMatchmakingQueueResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterMatchmakingQueueResponseFromJSON(json: any): GameCenterMatchmakingQueueResponse {
    return GameCenterMatchmakingQueueResponseFromJSONTyped(json, false);
}

export function GameCenterMatchmakingQueueResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingQueueResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': GameCenterMatchmakingQueueFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(GameCenterMatchmakingRuleSetFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function GameCenterMatchmakingQueueResponseToJSON(value?: GameCenterMatchmakingQueueResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': GameCenterMatchmakingQueueToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(GameCenterMatchmakingRuleSetToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

