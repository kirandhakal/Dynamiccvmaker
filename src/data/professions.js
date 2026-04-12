import { PROFESSION_CATALOG_RAW } from './professionCatalog';
import { materializeProfession } from './cvRoleFactory';

export const professions = PROFESSION_CATALOG_RAW.map(materializeProfession);

export const getProfessionById = (id) => professions.find((p) => p.id === id);

export const getProfessionByTemplateStyleId = (templateStyleId) =>
  professions.find((p) => p.templateStyleId === templateStyleId);
