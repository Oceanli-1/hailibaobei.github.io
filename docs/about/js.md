---
layout: about
title: js
date: 2022-04-06
tags:
  - Vuepress
---

```js
import { defineStore } from 'pinia';

export const useIndexStore = defineStore('test', {
  state: () => ({
    name: '超级管理员',
    age: 18,
  }),
  getters: {
    nameLength: (state) => state.name.length,
  },
  actions: {
    updateAction(data = 'action name') {
      this.name = data;
    },
  },
});
```