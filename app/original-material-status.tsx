// Explicitly recorded source gaps. These are not inferred from a failed link or a score.
export const unavailableOriginals: Record<string, string> = {
  'VR-PH-005-012': 'Bu等2017年K10家长验证研究全文未取得；现有摘要不能证明与官网中文表逐字一致。',
  'VR-PH-007-019': '1996年WHO-28／WHO-10直接研究全文及该历史形式的完整原始题本未取得。',
  'VR-PH-007-020': '1996年WHO-28／WHO-10直接研究全文及该历史形式的完整原始题本未取得。',
  'VR-HB-003-082': '1993年AUDIT开发论文全文未取得；已核官方手册及已取得的题本范围另见下文。',
  'VR-HB-004-083': '2007年AUDIT-C男女阈值研究全文未取得；该研究的说明限正式摘要，不代替完整原文核验。',
  'VR-HB-006-BASE': '1984年CAGE原论文全文未取得；已有题本与后续评论的核对范围另列。',
  'VR-HB-006-086': '1995年CAGE-AID原论文全文未取得；工具包所引统计不当作已逐表核实的原研究结果。',
  'VR-AG-005-BASE': '1969年Lawton原论文及历史协议原件未取得；现有HIGN修订原件不代替历史版本逐字核对。',
  'VR-AG-005-155': '1969年Lawton原论文及历史5／8项协议原件未取得；不以现代修订表补写历史原稿。',
  'VR-AG-004-095': '1965年Barthel原期刊页未取得；已核后期重印，不等于与原始出版页逐字匹配。',
  'VR-AG-004-097': 'Leung等2007年香港MBI-C全文及完整中文附录未取得；Shah1989原论文和附录已核，二者分别说明。',
  'VR-SS-002-069': 'Hays与DiMatteo1987年开发全文未取得；2008年台湾研究已核，不代替原开发论文。',
  'VR-SS-002-072': '1992年机构扫描件已取得，但未见书目所列末页22；已见部分可核，刊页完整性尚不能确认。',
  'VR-QL-002-040': '1997年SF-36急性形式原文扫描件未取得；回顾期及评分说明仅在已列来源范围内解释。',
  'VR-SL-003-032': '1991年ESS开发原文未取得；现有摘要及公开重印的核对范围另列，不代替现行正式许可题本。',
  'VR-MA-004-BASE': 'SDSCA2000年原作者公开全文文字已核，尚未取得有效本地PDF，原页视觉未核；不属于正文完全未读。',
  'VR-MA-004-166': 'SDSCA2000年原作者公开全文文字已核，尚未取得有效本地PDF，原页视觉未核；不属于正文完全未读。',
  'VR-MA-004-167': 'SDSCA2000年原作者公开全文文字已核，尚未取得有效本地PDF，原页视觉未核；不属于正文完全未读。',
};

// Content was checked from embedded data; original XFA appearance remains unverified.
export const unrenderedOriginals: Record<string, string> = {
  'VR-SL-003-033': '2017年四份与2022年八份利益披露PDF已取得，内嵌填写数据和披露内容已核；原文件采用XFA格式，现有阅读器只能显示占位页，原表排版未完成视觉核验。披露附件不属于施测题本，也不证明本项目获得量表许可。',
  'VR-SL-002-029': 'Chung等2011年三份利益披露PDF已取得，内嵌填写数据及选项编码已核；XFA原表排版无法在现有阅读器可靠显示，未完成视觉核验。独立中文施测题本与正式许可仍未取得。',
  'VR-SL-004-034': 'Chung等2011年三份利益披露PDF已取得，内嵌填写数据及选项编码已核；XFA原表排版无法在现有阅读器可靠显示，未完成视觉核验。独立中文施测题本与正式许可仍未取得。',
};

export default function OriginalMaterialStatus({versionId}:{versionId:string}) {
  const unavailable = unavailableOriginals[versionId];
  const gap = unavailable ?? unrenderedOriginals[versionId];
  if (!gap) return null;
  return <aside className="intro-evidence-note" aria-label="原始材料核验限制">
    <h3>{unavailable ? '原始材料未取得或不完整' : '原始材料存在未核验部分'}</h3>
    <p>{gap}</p>
    <p>本页仅展示已取得资料的核对结果；缺失或无法显示的部分未完成核验，不作逐字一致性或完整性确认。取得可核对原件后更新。</p>
  </aside>;
}
