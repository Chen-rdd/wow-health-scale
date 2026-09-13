import {reviewedProfiles} from './reviewed-profiles';
export function evidenceStatus(versionId:string){
 const reviewed=reviewedProfiles[versionId];
 return reviewed?`已补充有来源的版本说明（${reviewed.reviewed}）；题文、译本验证和授权的完成范围以本页具体说明为准。`:'历史索引资料已收录；本轮完整题文、评分、译本验证和授权的逐项复核尚未完成。';
}
