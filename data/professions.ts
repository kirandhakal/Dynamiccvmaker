import professionCatalog from './professionCatalog.json';
import { materializeProfession } from './cvRoleFactory';

export const professions = professionCatalog.map(materializeProfession);

export const getProfessionById = (id) => professions.find((p) => p.id === id);

export const getProfessionByTemplateStyleId = (templateStyleId) =>
  professions.find((p) => p.templateStyleId === templateStyleId);
