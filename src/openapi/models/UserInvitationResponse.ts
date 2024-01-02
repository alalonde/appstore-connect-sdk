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
import type { App } from './App';
import {
    AppFromJSON,
    AppFromJSONTyped,
    AppToJSON,
} from './App';
import type { DocumentLinks } from './DocumentLinks';
import {
    DocumentLinksFromJSON,
    DocumentLinksFromJSONTyped,
    DocumentLinksToJSON,
} from './DocumentLinks';
import type { UserInvitation } from './UserInvitation';
import {
    UserInvitationFromJSON,
    UserInvitationFromJSONTyped,
    UserInvitationToJSON,
} from './UserInvitation';

/**
 * 
 * @export
 * @interface UserInvitationResponse
 */
export interface UserInvitationResponse {
    /**
     * 
     * @type {UserInvitation}
     * @memberof UserInvitationResponse
     */
    data: UserInvitation;
    /**
     * 
     * @type {Array<App>}
     * @memberof UserInvitationResponse
     */
    included?: Array<App>;
    /**
     * 
     * @type {DocumentLinks}
     * @memberof UserInvitationResponse
     */
    links: DocumentLinks;
}

/**
 * Check if a given object implements the UserInvitationResponse interface.
 */
export function instanceOfUserInvitationResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "data" in value;
    isInstance = isInstance && "links" in value;

    return isInstance;
}

export function UserInvitationResponseFromJSON(json: any): UserInvitationResponse {
    return UserInvitationResponseFromJSONTyped(json, false);
}

export function UserInvitationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserInvitationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': UserInvitationFromJSON(json['data']),
        'included': !exists(json, 'included') ? undefined : ((json['included'] as Array<any>).map(AppFromJSON)),
        'links': DocumentLinksFromJSON(json['links']),
    };
}

export function UserInvitationResponseToJSON(value?: UserInvitationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': UserInvitationToJSON(value.data),
        'included': value.included === undefined ? undefined : ((value.included as Array<any>).map(AppToJSON)),
        'links': DocumentLinksToJSON(value.links),
    };
}

