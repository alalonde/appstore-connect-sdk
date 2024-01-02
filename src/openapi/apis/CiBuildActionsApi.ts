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


import * as runtime from '../runtime';
import type {
  CiArtifactsResponse,
  CiBuildActionResponse,
  CiBuildRunResponse,
  CiIssuesResponse,
  CiTestResultsResponse,
  ErrorResponse,
} from '../models';
import {
    CiArtifactsResponseFromJSON,
    CiArtifactsResponseToJSON,
    CiBuildActionResponseFromJSON,
    CiBuildActionResponseToJSON,
    CiBuildRunResponseFromJSON,
    CiBuildRunResponseToJSON,
    CiIssuesResponseFromJSON,
    CiIssuesResponseToJSON,
    CiTestResultsResponseFromJSON,
    CiTestResultsResponseToJSON,
    ErrorResponseFromJSON,
    ErrorResponseToJSON,
} from '../models';

export interface CiBuildActionsArtifactsGetToManyRelatedRequest {
    id: string;
    fieldsCiArtifacts?: Array<CiBuildActionsArtifactsGetToManyRelatedFieldsCiArtifactsEnum>;
    limit?: number;
}

export interface CiBuildActionsBuildRunGetToOneRelatedRequest {
    id: string;
    fieldsScmGitReferences?: Array<CiBuildActionsBuildRunGetToOneRelatedFieldsScmGitReferencesEnum>;
    fieldsCiBuildRuns?: Array<CiBuildActionsBuildRunGetToOneRelatedFieldsCiBuildRunsEnum>;
    fieldsCiWorkflows?: Array<CiBuildActionsBuildRunGetToOneRelatedFieldsCiWorkflowsEnum>;
    fieldsScmPullRequests?: Array<CiBuildActionsBuildRunGetToOneRelatedFieldsScmPullRequestsEnum>;
    fieldsCiProducts?: Array<CiBuildActionsBuildRunGetToOneRelatedFieldsCiProductsEnum>;
    fieldsBuilds?: Array<CiBuildActionsBuildRunGetToOneRelatedFieldsBuildsEnum>;
    limitBuilds?: number;
    include?: Array<CiBuildActionsBuildRunGetToOneRelatedIncludeEnum>;
}

export interface CiBuildActionsGetInstanceRequest {
    id: string;
    fieldsCiBuildActions?: Array<CiBuildActionsGetInstanceFieldsCiBuildActionsEnum>;
    include?: Array<CiBuildActionsGetInstanceIncludeEnum>;
    fieldsCiIssues?: Array<CiBuildActionsGetInstanceFieldsCiIssuesEnum>;
    fieldsCiBuildRuns?: Array<CiBuildActionsGetInstanceFieldsCiBuildRunsEnum>;
    fieldsCiTestResults?: Array<CiBuildActionsGetInstanceFieldsCiTestResultsEnum>;
    fieldsCiArtifacts?: Array<CiBuildActionsGetInstanceFieldsCiArtifactsEnum>;
}

export interface CiBuildActionsIssuesGetToManyRelatedRequest {
    id: string;
    fieldsCiIssues?: Array<CiBuildActionsIssuesGetToManyRelatedFieldsCiIssuesEnum>;
    limit?: number;
}

export interface CiBuildActionsTestResultsGetToManyRelatedRequest {
    id: string;
    fieldsCiTestResults?: Array<CiBuildActionsTestResultsGetToManyRelatedFieldsCiTestResultsEnum>;
    limit?: number;
}

/**
 * 
 */
export class CiBuildActionsApi extends runtime.BaseAPI {

    /**
     */
    async ciBuildActionsArtifactsGetToManyRelatedRaw(requestParameters: CiBuildActionsArtifactsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiArtifactsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ciBuildActionsArtifactsGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsCiArtifacts) {
            queryParameters['fields[ciArtifacts]'] = requestParameters.fieldsCiArtifacts.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/ciBuildActions/{id}/artifacts`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CiArtifactsResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciBuildActionsArtifactsGetToManyRelated(requestParameters: CiBuildActionsArtifactsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiArtifactsResponse> {
        const response = await this.ciBuildActionsArtifactsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async ciBuildActionsBuildRunGetToOneRelatedRaw(requestParameters: CiBuildActionsBuildRunGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiBuildRunResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ciBuildActionsBuildRunGetToOneRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsScmGitReferences) {
            queryParameters['fields[scmGitReferences]'] = requestParameters.fieldsScmGitReferences.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCiBuildRuns) {
            queryParameters['fields[ciBuildRuns]'] = requestParameters.fieldsCiBuildRuns.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCiWorkflows) {
            queryParameters['fields[ciWorkflows]'] = requestParameters.fieldsCiWorkflows.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsScmPullRequests) {
            queryParameters['fields[scmPullRequests]'] = requestParameters.fieldsScmPullRequests.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCiProducts) {
            queryParameters['fields[ciProducts]'] = requestParameters.fieldsCiProducts.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsBuilds) {
            queryParameters['fields[builds]'] = requestParameters.fieldsBuilds.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limitBuilds !== undefined) {
            queryParameters['limit[builds]'] = requestParameters.limitBuilds;
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/ciBuildActions/{id}/buildRun`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CiBuildRunResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciBuildActionsBuildRunGetToOneRelated(requestParameters: CiBuildActionsBuildRunGetToOneRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiBuildRunResponse> {
        const response = await this.ciBuildActionsBuildRunGetToOneRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async ciBuildActionsGetInstanceRaw(requestParameters: CiBuildActionsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiBuildActionResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ciBuildActionsGetInstance.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsCiBuildActions) {
            queryParameters['fields[ciBuildActions]'] = requestParameters.fieldsCiBuildActions.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.include) {
            queryParameters['include'] = requestParameters.include.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCiIssues) {
            queryParameters['fields[ciIssues]'] = requestParameters.fieldsCiIssues.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCiBuildRuns) {
            queryParameters['fields[ciBuildRuns]'] = requestParameters.fieldsCiBuildRuns.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCiTestResults) {
            queryParameters['fields[ciTestResults]'] = requestParameters.fieldsCiTestResults.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.fieldsCiArtifacts) {
            queryParameters['fields[ciArtifacts]'] = requestParameters.fieldsCiArtifacts.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/ciBuildActions/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CiBuildActionResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciBuildActionsGetInstance(requestParameters: CiBuildActionsGetInstanceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiBuildActionResponse> {
        const response = await this.ciBuildActionsGetInstanceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async ciBuildActionsIssuesGetToManyRelatedRaw(requestParameters: CiBuildActionsIssuesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiIssuesResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ciBuildActionsIssuesGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsCiIssues) {
            queryParameters['fields[ciIssues]'] = requestParameters.fieldsCiIssues.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/ciBuildActions/{id}/issues`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CiIssuesResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciBuildActionsIssuesGetToManyRelated(requestParameters: CiBuildActionsIssuesGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiIssuesResponse> {
        const response = await this.ciBuildActionsIssuesGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async ciBuildActionsTestResultsGetToManyRelatedRaw(requestParameters: CiBuildActionsTestResultsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CiTestResultsResponse>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling ciBuildActionsTestResultsGetToManyRelated.');
        }

        const queryParameters: any = {};

        if (requestParameters.fieldsCiTestResults) {
            queryParameters['fields[ciTestResults]'] = requestParameters.fieldsCiTestResults.join(runtime.COLLECTION_FORMATS["csv"]);
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("itc-bearer-token", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/ciBuildActions/{id}/testResults`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CiTestResultsResponseFromJSON(jsonValue));
    }

    /**
     */
    async ciBuildActionsTestResultsGetToManyRelated(requestParameters: CiBuildActionsTestResultsGetToManyRelatedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CiTestResultsResponse> {
        const response = await this.ciBuildActionsTestResultsGetToManyRelatedRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const CiBuildActionsArtifactsGetToManyRelatedFieldsCiArtifactsEnum = {
    DownloadUrl: 'downloadUrl',
    FileName: 'fileName',
    FileSize: 'fileSize',
    FileType: 'fileType'
} as const;
export type CiBuildActionsArtifactsGetToManyRelatedFieldsCiArtifactsEnum = typeof CiBuildActionsArtifactsGetToManyRelatedFieldsCiArtifactsEnum[keyof typeof CiBuildActionsArtifactsGetToManyRelatedFieldsCiArtifactsEnum];
/**
 * @export
 */
export const CiBuildActionsBuildRunGetToOneRelatedFieldsScmGitReferencesEnum = {
    CanonicalName: 'canonicalName',
    IsDeleted: 'isDeleted',
    Kind: 'kind',
    Name: 'name',
    Repository: 'repository'
} as const;
export type CiBuildActionsBuildRunGetToOneRelatedFieldsScmGitReferencesEnum = typeof CiBuildActionsBuildRunGetToOneRelatedFieldsScmGitReferencesEnum[keyof typeof CiBuildActionsBuildRunGetToOneRelatedFieldsScmGitReferencesEnum];
/**
 * @export
 */
export const CiBuildActionsBuildRunGetToOneRelatedFieldsCiBuildRunsEnum = {
    Actions: 'actions',
    BuildRun: 'buildRun',
    Builds: 'builds',
    CancelReason: 'cancelReason',
    Clean: 'clean',
    CompletionStatus: 'completionStatus',
    CreatedDate: 'createdDate',
    DestinationBranch: 'destinationBranch',
    DestinationCommit: 'destinationCommit',
    ExecutionProgress: 'executionProgress',
    FinishedDate: 'finishedDate',
    IsPullRequestBuild: 'isPullRequestBuild',
    IssueCounts: 'issueCounts',
    Number: 'number',
    Product: 'product',
    PullRequest: 'pullRequest',
    SourceBranchOrTag: 'sourceBranchOrTag',
    SourceCommit: 'sourceCommit',
    StartReason: 'startReason',
    StartedDate: 'startedDate',
    Workflow: 'workflow'
} as const;
export type CiBuildActionsBuildRunGetToOneRelatedFieldsCiBuildRunsEnum = typeof CiBuildActionsBuildRunGetToOneRelatedFieldsCiBuildRunsEnum[keyof typeof CiBuildActionsBuildRunGetToOneRelatedFieldsCiBuildRunsEnum];
/**
 * @export
 */
export const CiBuildActionsBuildRunGetToOneRelatedFieldsCiWorkflowsEnum = {
    Actions: 'actions',
    BranchStartCondition: 'branchStartCondition',
    BuildRuns: 'buildRuns',
    Clean: 'clean',
    ContainerFilePath: 'containerFilePath',
    Description: 'description',
    IsEnabled: 'isEnabled',
    IsLockedForEditing: 'isLockedForEditing',
    LastModifiedDate: 'lastModifiedDate',
    MacOsVersion: 'macOsVersion',
    Name: 'name',
    Product: 'product',
    PullRequestStartCondition: 'pullRequestStartCondition',
    Repository: 'repository',
    ScheduledStartCondition: 'scheduledStartCondition',
    TagStartCondition: 'tagStartCondition',
    XcodeVersion: 'xcodeVersion'
} as const;
export type CiBuildActionsBuildRunGetToOneRelatedFieldsCiWorkflowsEnum = typeof CiBuildActionsBuildRunGetToOneRelatedFieldsCiWorkflowsEnum[keyof typeof CiBuildActionsBuildRunGetToOneRelatedFieldsCiWorkflowsEnum];
/**
 * @export
 */
export const CiBuildActionsBuildRunGetToOneRelatedFieldsScmPullRequestsEnum = {
    DestinationBranchName: 'destinationBranchName',
    DestinationRepositoryName: 'destinationRepositoryName',
    DestinationRepositoryOwner: 'destinationRepositoryOwner',
    IsClosed: 'isClosed',
    IsCrossRepository: 'isCrossRepository',
    Number: 'number',
    Repository: 'repository',
    SourceBranchName: 'sourceBranchName',
    SourceRepositoryName: 'sourceRepositoryName',
    SourceRepositoryOwner: 'sourceRepositoryOwner',
    Title: 'title',
    WebUrl: 'webUrl'
} as const;
export type CiBuildActionsBuildRunGetToOneRelatedFieldsScmPullRequestsEnum = typeof CiBuildActionsBuildRunGetToOneRelatedFieldsScmPullRequestsEnum[keyof typeof CiBuildActionsBuildRunGetToOneRelatedFieldsScmPullRequestsEnum];
/**
 * @export
 */
export const CiBuildActionsBuildRunGetToOneRelatedFieldsCiProductsEnum = {
    AdditionalRepositories: 'additionalRepositories',
    App: 'app',
    BuildRuns: 'buildRuns',
    BundleId: 'bundleId',
    CreatedDate: 'createdDate',
    Name: 'name',
    PrimaryRepositories: 'primaryRepositories',
    ProductType: 'productType',
    Workflows: 'workflows'
} as const;
export type CiBuildActionsBuildRunGetToOneRelatedFieldsCiProductsEnum = typeof CiBuildActionsBuildRunGetToOneRelatedFieldsCiProductsEnum[keyof typeof CiBuildActionsBuildRunGetToOneRelatedFieldsCiProductsEnum];
/**
 * @export
 */
export const CiBuildActionsBuildRunGetToOneRelatedFieldsBuildsEnum = {
    App: 'app',
    AppEncryptionDeclaration: 'appEncryptionDeclaration',
    AppStoreVersion: 'appStoreVersion',
    BetaAppReviewSubmission: 'betaAppReviewSubmission',
    BetaBuildLocalizations: 'betaBuildLocalizations',
    BetaGroups: 'betaGroups',
    BuildAudienceType: 'buildAudienceType',
    BuildBetaDetail: 'buildBetaDetail',
    BuildBundles: 'buildBundles',
    ComputedMinMacOsVersion: 'computedMinMacOsVersion',
    DiagnosticSignatures: 'diagnosticSignatures',
    ExpirationDate: 'expirationDate',
    Expired: 'expired',
    IconAssetToken: 'iconAssetToken',
    Icons: 'icons',
    IndividualTesters: 'individualTesters',
    LsMinimumSystemVersion: 'lsMinimumSystemVersion',
    MinOsVersion: 'minOsVersion',
    PerfPowerMetrics: 'perfPowerMetrics',
    PreReleaseVersion: 'preReleaseVersion',
    ProcessingState: 'processingState',
    UploadedDate: 'uploadedDate',
    UsesNonExemptEncryption: 'usesNonExemptEncryption',
    Version: 'version'
} as const;
export type CiBuildActionsBuildRunGetToOneRelatedFieldsBuildsEnum = typeof CiBuildActionsBuildRunGetToOneRelatedFieldsBuildsEnum[keyof typeof CiBuildActionsBuildRunGetToOneRelatedFieldsBuildsEnum];
/**
 * @export
 */
export const CiBuildActionsBuildRunGetToOneRelatedIncludeEnum = {
    Builds: 'builds',
    DestinationBranch: 'destinationBranch',
    Product: 'product',
    PullRequest: 'pullRequest',
    SourceBranchOrTag: 'sourceBranchOrTag',
    Workflow: 'workflow'
} as const;
export type CiBuildActionsBuildRunGetToOneRelatedIncludeEnum = typeof CiBuildActionsBuildRunGetToOneRelatedIncludeEnum[keyof typeof CiBuildActionsBuildRunGetToOneRelatedIncludeEnum];
/**
 * @export
 */
export const CiBuildActionsGetInstanceFieldsCiBuildActionsEnum = {
    ActionType: 'actionType',
    Artifacts: 'artifacts',
    BuildRun: 'buildRun',
    CompletionStatus: 'completionStatus',
    ExecutionProgress: 'executionProgress',
    FinishedDate: 'finishedDate',
    IsRequiredToPass: 'isRequiredToPass',
    IssueCounts: 'issueCounts',
    Issues: 'issues',
    Name: 'name',
    StartedDate: 'startedDate',
    TestResults: 'testResults'
} as const;
export type CiBuildActionsGetInstanceFieldsCiBuildActionsEnum = typeof CiBuildActionsGetInstanceFieldsCiBuildActionsEnum[keyof typeof CiBuildActionsGetInstanceFieldsCiBuildActionsEnum];
/**
 * @export
 */
export const CiBuildActionsGetInstanceIncludeEnum = {
    BuildRun: 'buildRun'
} as const;
export type CiBuildActionsGetInstanceIncludeEnum = typeof CiBuildActionsGetInstanceIncludeEnum[keyof typeof CiBuildActionsGetInstanceIncludeEnum];
/**
 * @export
 */
export const CiBuildActionsGetInstanceFieldsCiIssuesEnum = {
    Category: 'category',
    FileSource: 'fileSource',
    IssueType: 'issueType',
    Message: 'message'
} as const;
export type CiBuildActionsGetInstanceFieldsCiIssuesEnum = typeof CiBuildActionsGetInstanceFieldsCiIssuesEnum[keyof typeof CiBuildActionsGetInstanceFieldsCiIssuesEnum];
/**
 * @export
 */
export const CiBuildActionsGetInstanceFieldsCiBuildRunsEnum = {
    Actions: 'actions',
    BuildRun: 'buildRun',
    Builds: 'builds',
    CancelReason: 'cancelReason',
    Clean: 'clean',
    CompletionStatus: 'completionStatus',
    CreatedDate: 'createdDate',
    DestinationBranch: 'destinationBranch',
    DestinationCommit: 'destinationCommit',
    ExecutionProgress: 'executionProgress',
    FinishedDate: 'finishedDate',
    IsPullRequestBuild: 'isPullRequestBuild',
    IssueCounts: 'issueCounts',
    Number: 'number',
    Product: 'product',
    PullRequest: 'pullRequest',
    SourceBranchOrTag: 'sourceBranchOrTag',
    SourceCommit: 'sourceCommit',
    StartReason: 'startReason',
    StartedDate: 'startedDate',
    Workflow: 'workflow'
} as const;
export type CiBuildActionsGetInstanceFieldsCiBuildRunsEnum = typeof CiBuildActionsGetInstanceFieldsCiBuildRunsEnum[keyof typeof CiBuildActionsGetInstanceFieldsCiBuildRunsEnum];
/**
 * @export
 */
export const CiBuildActionsGetInstanceFieldsCiTestResultsEnum = {
    ClassName: 'className',
    DestinationTestResults: 'destinationTestResults',
    FileSource: 'fileSource',
    Message: 'message',
    Name: 'name',
    Status: 'status'
} as const;
export type CiBuildActionsGetInstanceFieldsCiTestResultsEnum = typeof CiBuildActionsGetInstanceFieldsCiTestResultsEnum[keyof typeof CiBuildActionsGetInstanceFieldsCiTestResultsEnum];
/**
 * @export
 */
export const CiBuildActionsGetInstanceFieldsCiArtifactsEnum = {
    DownloadUrl: 'downloadUrl',
    FileName: 'fileName',
    FileSize: 'fileSize',
    FileType: 'fileType'
} as const;
export type CiBuildActionsGetInstanceFieldsCiArtifactsEnum = typeof CiBuildActionsGetInstanceFieldsCiArtifactsEnum[keyof typeof CiBuildActionsGetInstanceFieldsCiArtifactsEnum];
/**
 * @export
 */
export const CiBuildActionsIssuesGetToManyRelatedFieldsCiIssuesEnum = {
    Category: 'category',
    FileSource: 'fileSource',
    IssueType: 'issueType',
    Message: 'message'
} as const;
export type CiBuildActionsIssuesGetToManyRelatedFieldsCiIssuesEnum = typeof CiBuildActionsIssuesGetToManyRelatedFieldsCiIssuesEnum[keyof typeof CiBuildActionsIssuesGetToManyRelatedFieldsCiIssuesEnum];
/**
 * @export
 */
export const CiBuildActionsTestResultsGetToManyRelatedFieldsCiTestResultsEnum = {
    ClassName: 'className',
    DestinationTestResults: 'destinationTestResults',
    FileSource: 'fileSource',
    Message: 'message',
    Name: 'name',
    Status: 'status'
} as const;
export type CiBuildActionsTestResultsGetToManyRelatedFieldsCiTestResultsEnum = typeof CiBuildActionsTestResultsGetToManyRelatedFieldsCiTestResultsEnum[keyof typeof CiBuildActionsTestResultsGetToManyRelatedFieldsCiTestResultsEnum];
