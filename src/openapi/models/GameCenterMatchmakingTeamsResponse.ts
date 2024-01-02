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
import type { GameCenterMatchmakingTeam } from './GameCenterMatchmakingTeam';
import {
    GameCenterMatchmakingTeamFromJSON,
    GameCenterMatchmakingTeamFromJSONTyped,
    GameCenterMatchmakingTeamToJSON,
} from './GameCenterMatchmakingTeam';
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
 * @interface GameCenterMatchmakingTeamsResponse
 */
export interface GameCenterMatchmakingTeamsResponse {
    /**
     * 
     * @type {Array<GameCenterMatchmakingTeam>}
     * @memberof GameCenterMatchmakingTeamsResponse
     */
    data: Array<GameCenterMatchmakingTeam>;
    /**
     * 
     * @type {PagedDocumentLinks}
     * @memberof GameCenterMatchmakingTeamsResponse
     */
    links: PagedDocumentLinks;
    /**
     * 
     * @type {PagingInformation}
     * @memberof GameCenterMatchmakingTeamsResponse
     */
    meta?: PagingInformation;
}

/**
 * Check if a given object implements the GameCenterMatchmakingTeamsResponse interface.
 */
export function instanceOfGameCenterMatchmakingTeamsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function GameCenterMatchmakingTeamsResponseFromJSON(json: any): GameCenterMatchmakingTeamsResponse {
    return GameCenterMatchmakingTeamsResponseFromJSONTyped(json, false);
}

export function GameCenterMatchmakingTeamsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GameCenterMatchmakingTeamsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(GameCenterMatchmakingTeamFromJSON)),
        'links': PagedDocumentLinksFromJSON(json['links']),
        'meta': !exists(json, 'meta') ? undefined : PagingInformationFromJSON(json['meta']),
    };
}

export function GameCenterMatchmakingTeamsResponseToJSON(value?: GameCenterMatchmakingTeamsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': ((value.data as Array<any>).map(GameCenterMatchmakingTeamToJSON)),
        'links': PagedDocumentLinksToJSON(value.links),
        'meta': PagingInformationToJSON(value.meta),
    };
}

