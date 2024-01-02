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
import type { AppCategoryRelationshipsSubcategoriesDataInner } from './AppCategoryRelationshipsSubcategoriesDataInner';
import {
    AppCategoryRelationshipsSubcategoriesDataInnerFromJSON,
    AppCategoryRelationshipsSubcategoriesDataInnerFromJSONTyped,
    AppCategoryRelationshipsSubcategoriesDataInnerToJSON,
} from './AppCategoryRelationshipsSubcategoriesDataInner';

/**
 * 
 * @export
 * @interface AppInfoUpdateRequestDataRelationshipsPrimaryCategory
 */
export interface AppInfoUpdateRequestDataRelationshipsPrimaryCategory {
    /**
     * 
     * @type {AppCategoryRelationshipsSubcategoriesDataInner}
     * @memberof AppInfoUpdateRequestDataRelationshipsPrimaryCategory
     */
    data?: AppCategoryRelationshipsSubcategoriesDataInner;
}

/**
 * Check if a given object implements the AppInfoUpdateRequestDataRelationshipsPrimaryCategory interface.
 */
export function instanceOfAppInfoUpdateRequestDataRelationshipsPrimaryCategory(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AppInfoUpdateRequestDataRelationshipsPrimaryCategoryFromJSON(json: any): AppInfoUpdateRequestDataRelationshipsPrimaryCategory {
    return AppInfoUpdateRequestDataRelationshipsPrimaryCategoryFromJSONTyped(json, false);
}

export function AppInfoUpdateRequestDataRelationshipsPrimaryCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppInfoUpdateRequestDataRelationshipsPrimaryCategory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : AppCategoryRelationshipsSubcategoriesDataInnerFromJSON(json['data']),
    };
}

export function AppInfoUpdateRequestDataRelationshipsPrimaryCategoryToJSON(value?: AppInfoUpdateRequestDataRelationshipsPrimaryCategory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': AppCategoryRelationshipsSubcategoriesDataInnerToJSON(value.data),
    };
}

