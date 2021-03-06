/**
 * @file 项目/Github数据状态 / ES module
 * @author Surmon <surmon@foxmail.com>
 */

export const state = () => {
  return {
    repositories: {
      fetching: false,
      data: []
    }
  }
}

export const mutations = {
  REQUEST_GUTHUB_REPOSITORIES(state) {
    state.repositories.fetching = true
  },
  REQUEST_GUTHUB_REPOSITORIES_SUCCESS(state, action) {
    state.repositories.fetching = false
    state.repositories.data = action.result.filter(rep => !rep.description || !rep.description.startsWith('#'))
  },
  REQUEST_GUTHUB_REPOSITORIES_FAILURE(state) {
    state.repositories.fetching = false
    state.repositories.data = {}
  }
}
