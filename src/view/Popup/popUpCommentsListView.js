import {generateComments} from '../../utils/utils';
export const createPopUpCommentsList = (comments) => {
  return `<ul class="film-details__comments-list">${generateComments(comments)}</ul>`;
};
