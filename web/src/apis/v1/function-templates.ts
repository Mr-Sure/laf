// @ts-ignore
/* eslint-disable */
///////////////////////////////////////////////////////////////////////
//                                                                   //
// this file is autogenerated by service-generate                    //
// do not edit this file manually                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
/// <reference path = "api-auto.d.ts" />
import request from "@/utils/request";
import useGlobalStore from "@/pages/globalStore";

/**
 * create a function template
 */
export async function FunctionTemplateControllerCreateFunctionTemplate(
  params: Definitions.CreateFunctionTemplateDto,
): Promise<{
  error: string;
  data: Paths.FunctionTemplateControllerCreateFunctionTemplate.Responses;
}> {
  // /v1/function-templates
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/function-templates`, {
    method: "POST",
    data: params,
  });
}

/**
 * get all function template
 */
export async function FunctionTemplateControllerGetAllFunctionTemplate(
  params: Paths.FunctionTemplateControllerGetAllFunctionTemplate.BodyParameters,
): Promise<{
  error: string;
  data: Paths.FunctionTemplateControllerGetAllFunctionTemplate.Responses;
}> {
  // /v1/function-templates
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/function-templates`, {
    method: "GET",
    params: params,
  });
}

/**
 * use a function template
 */
export async function FunctionTemplateControllerUseFunctionTemplate(
  params: Paths.FunctionTemplateControllerUseFunctionTemplate.BodyParameters,
): Promise<{
  error: string;
  data: Paths.FunctionTemplateControllerUseFunctionTemplate.Responses;
}> {
  // /v1/function-templates/{templateId}/{appid}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/function-templates/${_params.templateId}/${_params.appid}`, {
    method: "POST",
    data: params,
  });
}

/**
 * update a function template
 */
export async function FunctionTemplateControllerUpdateFunctionTemplate(
  params: Definitions.UpdateFunctionTemplateDto,
): Promise<{
  error: string;
  data: Paths.FunctionTemplateControllerUpdateFunctionTemplate.Responses;
}> {
  // /v1/function-templates/update/{id}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/function-templates/update/${_params.id}`, {
    method: "PATCH",
    data: params,
  });
}

/**
 * delete a function template
 */
export async function FunctionTemplateControllerDeleteFunctionTemplate(
  params: Paths.FunctionTemplateControllerDeleteFunctionTemplate.BodyParameters,
): Promise<{
  error: string;
  data: Paths.FunctionTemplateControllerDeleteFunctionTemplate.Responses;
}> {
  // /v1/function-templates/{id}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/function-templates/${_params.id}`, {
    method: "DELETE",
    data: params,
  });
}

/**
 * get one function template
 */
export async function FunctionTemplateControllerGetOneFunctionTemplate(
  params: Paths.FunctionTemplateControllerGetOneFunctionTemplate.BodyParameters,
): Promise<{
  error: string;
  data: Paths.FunctionTemplateControllerGetOneFunctionTemplate.Responses;
}> {
  // /v1/function-templates/{id}
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/function-templates/${_params.id}`, {
    method: "GET",
    params: params,
  });
}

/**
 * star a function template
 */
export async function FunctionTemplateControllerStarFunctionTemplate(
  params: Paths.FunctionTemplateControllerStarFunctionTemplate.BodyParameters,
): Promise<{
  error: string;
  data: Paths.FunctionTemplateControllerStarFunctionTemplate.Responses;
}> {
  // /v1/function-templates/{templateId}/star
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/function-templates/${_params.templateId}/star`, {
    method: "PUT",
    data: params,
  });
}

/**
 * get function template user star state
 */
export async function FunctionTemplateControllerGetUserFunctionTemplateStarState(
  params: Paths.FunctionTemplateControllerGetUserFunctionTemplateStarState.BodyParameters,
): Promise<{
  error: string;
  data: Paths.FunctionTemplateControllerGetUserFunctionTemplateStarState.Responses;
}> {
  // /v1/function-templates/{id}/star-state
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/function-templates/${_params.id}/star-state`, {
    method: "GET",
    params: params,
  });
}

/**
 * get people who use this function template
 */
export async function FunctionTemplateControllerGetFunctionTemplateUsedBy(
  params: Paths.FunctionTemplateControllerGetFunctionTemplateUsedBy.BodyParameters,
): Promise<{
  error: string;
  data: Paths.FunctionTemplateControllerGetFunctionTemplateUsedBy.Responses;
}> {
  // /v1/function-templates/{id}/used-by
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/function-templates/${_params.id}/used-by`, {
    method: "GET",
    params: params,
  });
}

/**
 * get my function template
 */
export async function FunctionTemplateControllerGetMyFunctionTemplate(
  params: Paths.FunctionTemplateControllerGetMyFunctionTemplate.BodyParameters,
): Promise<{
  error: string;
  data: Paths.FunctionTemplateControllerGetMyFunctionTemplate.Responses;
}> {
  // /v1/function-templates/my
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/function-templates/my`, {
    method: "GET",
    params: params,
  });
}

/**
 * get all recommend function template
 */
export async function FunctionTemplateControllerGetRecommendFunctionTemplate(
  params: Paths.FunctionTemplateControllerGetRecommendFunctionTemplate.BodyParameters,
): Promise<{
  error: string;
  data: Paths.FunctionTemplateControllerGetRecommendFunctionTemplate.Responses;
}> {
  // /v1/function-templates/recommend
  let _params: { [key: string]: any } = {
    appid: useGlobalStore.getState().currentApp?.appid || "",
    ...params,
  };
  return request(`/v1/function-templates/recommend`, {
    method: "GET",
    params: params,
  });
}
