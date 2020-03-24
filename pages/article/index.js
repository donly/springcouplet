// pages/article/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.type == "readme") {
      this.setData({
        title: '使用须知',
        subtitle: '最后更新：2019年1月8日',
        content: '在使用本春联对联程序制作您的对联之前，请仔细阅读微软网站“使用条款（http://www.microsoft.com/en-us/legal/intellectualproperty/copyright/default.aspx）”以了解我们提供此项功能的条件以及您应担负的责任。 特别地：\n\n1. 本春联对联的数据由微软公司向公众免费提供，微软公司保留自主决定修改、暂停或停止该网站及所属服务的权利，由此可能给用户造成的一切不便与损失，微软不负有任何责任。\n\n2. 微软有权记录用户在本程序的所有行为。\n\n3. 本春联对联所提供的下联及横批自动生成服务，其结果是利用机器学习算法由电脑自动生成，微软不保证所生成下联及横批的质量，同时所生成横批和下联亦不代表微软观点。\n\n4. 我们鼓励用户进行创作，并要求用户尊重他人的知识产权，每一用户应对自己上传的内容负责，并承担由此可能产生任何侵权责任。一旦我们知悉您上载到本程序上的内容侵犯了其他人的版权，我们必须将其删除。如果您认为我们误将您有权或得到允许上载的内容删除，请告知我们。\n\n5. 用户在本程序所输入内容（包括修改）版权仅归原作者所有。用户授予本程序及公众免费使用经其输入或以其他方式提交的原创内容，并可将这些许可授予其他人。用户应当对其所输入的内容享有做出以上授权的所有必要权利。\n\n6. 用户利用本程序所提供之“春联对联”功能生成的文本及图片的版权归微软所有。'
      })
    }
    else if (options.type == "help") {
      this.setData({
        title: '帮助',
        subtitle: '最后更新：2019年1月8日',
        content: '微软对联是由微软亚洲研究院自然语言计算组研发的计算机自动对联系统。当用户给定上联，它能够自动提供若干下联供用户选择； 并且当用户确定一副对联后，它还能够生成若干四字横批供用户参考。'
      })
    }
    else {
      this.setData({
        title: '赞赏支持',
        subtitle: '请点击下面二维码打赏',
        supportUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDdBQzdENzMwRUFEMTFFOTk3MjNGQTQ5REMwMjBFMEYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDdBQzdENzIwRUFEMTFFOTk3MjNGQTQ5REMwMjBFMEYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iQzU0ODlFMUI4MzcyRTA2NTA2NjY4RDUzOUE4MDc4NEYiIHN0UmVmOmRvY3VtZW50SUQ9IkM1NDg5RTFCODM3MkUwNjUwNjY2OEQ1MzlBODA3ODRGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Q9JgHwAAAMBQTFRF1tbW69aa6enqq6ur3bpK4rZF/f39kpKSd3d3Dw8J5clz9e3MMSwsUE9P0ZYy3bY48vLy4rY8/PnmZkoZjmET+/v7TS0TLCMV2bJtGxcO/v3w///5q38ZWleLTktzRjxS0aFK4cBd6ckhzaYXqoFQxsfI+v//5suIODU3YWBhijZFubm5vpQZ9vb28eK0/vr4+//4dFw8/vv++vPdIyAe+fn5+vvv37Ue+/v9QkE+pI6BJyUmHRsY4LdBAAAA////EM/JygAAPpBJREFUeNrsnQtjmkj38BF0AIVHtGtTY9/d+n+WCMtq06jZ5ZHA9/9W7zlzgQExMW0uas5pmxpvMZzfnNvMnDEKkg8tBl0CAoCEACAhAEgIABICgOQDA8AYXY+PIDU9awCw2n8kF6/7fQtgmua/dJEuGoCiCExz2QYAK5ZhmCRhIL9fBiSXJMq+G6hkcx8AVrAwCQGBcCtMBYBCckGyFb7dFEo2S09fARAk+EiYmBQPXq77n4CKUcnGHgCcDXwoMfiTCYCL0z+qFNw8twBhSxBo6haAcoFLjP+K4t/SAuwDMNFjAJJLrfuoGKAlDQzA/ldZAMll2gGeBRhtaSAr/jUNFSySXKwfACUHWpRPcwEf3SfQJSAASAgAPVUg+bAAUPnnQwSC7BAAVP/7IAAcWA+wDMgFfAyZmK0ABCZdGgKA5APIlgAgC0AAEAAEAAFAABAABAABQAAQAAQAAUAAEAB0aQgAEgKAhAAgIQBICAASAoCEACAhAEgIABICgIQAICEASAgAEgKAhAAgIQBICAASAoCEACAhAEgIABICgIQAICEASAgAEgKAhAAgIQBICAASAoCEACAhAEgIABICgIQAICEASAgAEgKAhAAgIQBICAASAoCEACAhAEgIABICgIQAICEASAgAEgKAhAAgIQBICAASAuAlhDF28CEC4GMQENiOUdQ4YJZjMQLgo4iT51FQU3eS53lILuCix311YxuBuo0aADbcYxMAl+nxwbzXBzdLQd1WDQBjl3t1JLYWuInLdAofywKwwsrzrK5cfw+AwkzM+h1gE3YmAXAhHr9h3p12g1/TdsyjAgLgAgT9e1xTM97jFOxR7VpungaXmSVeOACs+V0I6t4FTQDip94nRKfACIDz5yHY5bkb6mrEpM8/LoIkF3B+YoTb+qj1m0k+2oRoeVQGoceJoUkAnIFYrhvXi3qJm0e1gN5w89wLaop+aqyzwvAa70IAnKbAeHcbijIaOZ45hczQ1AA4xpPYPHckC3AOWZ8X7I9U/Q4eFRi1QNF68re3hCNhBMCJS2A3Cn9ihOuKW3qgzEQDAJyE99SvP7GcyzAAH28uYN/E+w0AnNr3ly6XXgfYt/5sa8e10Vuv86pq8UdJCi/dArS4f6sxwpll12YHWGIbBQFwnuP9GK2I2u/R78iOXhvCCID3H+9PFmiEBYiWx6nryIHOeMGJAHh/EVP5TzAy5dXgo1QLTzKd+GmPIApOBMC7GwCrpUADOjS2up32+QRwpa9JmOilYDPRqgJsAs+Otvr76e+mJK0VkwiAdwOgdTlfuHP9oBEE6ABA3udMWEnLLp9qb4GV4ppum++m3uKI+QQC4NWDwAlf0LuvnYoKeNRMXX3JF4tqM8RJfYGI3ZgrYn4bYyZfWkwAnEQWwFrC/qrWi88JwkALAVic5/6kNuSTCpe4sVwgdGuVYy3+ZwTAiWaEgRM/WrcNbLtm4+2kei0vFOuvRgOg4UJ1gFNMBVGhJQDsqeHJajl844loD6aGlu65vIzECIATFrDa+mwOL+WwR2s9tZ0CNQowBEhZ7b3zdEsAnPD4Fyv941px92n3zFpvCoU7mgGYPrYQgJ1hNfCCAChLthj1Pzmfd5ymcLGA/lb41l5wqGbEGAFwChSYmzx/ekr/KMEFg1oVgPNwWbvGLgeAwDQDObSt/KWm9J16CGBmBw0AXsvADLYEwHu4/SKwYm+32/mYzzG1k+exX9tOnUBPEFhLTiCrxtrMIXPczCrqCQOTt0Ingk8Q4Qqkc5orvgwALMzWuWQ2OoHA9i322CtCTbE44WPqV0SSwaQz0feEMUNPMIskdkyBj+GrT+D6RkEAvK3YuSb+kzO9TE4Jb9Vwtzeb0rEHcRYZ6gHkZGPWjY2mXORDYBTutE+wO6dthOcOAFP6T23Lsn23JODxQWiIgq54zlafDLDEVkHx3o62a4iVsX6tKsTLxGGGpDiWZTlIwuaM2kucOQBMhnyZJaqzYXpwuU9t0cYk1WYEsXCQbjVromr/LNWCfrHYpIbVJHYzrAqa6IEccclMR6QgjAB4IwMQwNXPQvWdGdX2/uliTdE4aOF9XJLhx6H+gK0F/W65/N/Y4W6g+tULeUjgKOq42ZHfMQLgbSyAWAMiwzZQZnZos6+v5/ChBsBe6U+ZBpwZ9pbqCfu7gaSjwFDA15KCmAcOBMAbWYBYy9RRB05tdr+R05cRHXM2UWuspjcMcWpTwZZuW1ixDeoPVBzhjLFFALxV/ceT49qI/QS1EPKmTy2CetHKeOay0OK5UtKqhrSMai9glj6rHKY7uyIrncB7LG3fRiomURlHEgCvLuZOGmY0vIGcr2kPAmLRHEKb+a2XfxRPapzzEMCo23umvZlrlgD4tQWJPgHwdi6gBACu+tR8BADxyLQs5LBq9ojZkS9/+WBTKR0r/2m9vQDTacoqAOJ9ACgLeM3Qj5XLv1BLPGhLdpnNo0D3EACF7eZx24Sd6Yq4HR5BSMpAwUr9sBnzlRfLj7RQgVsA0898HvylJQCcspOuC54jALUSPi7S9EU+aKqeP+0rtFG94aQ4AEAsa39utQaUlQUlGN1+bDbejGnpwZSXfyfmFv9DiOzGpAIB8KJiWEk5kuWST1W+DyAC81m72WBF20QNvJOzS42ibCIla8RipZCsAUwbVl08xsqyolO9GVqEablG2LSsgAB4rcBPbfSJTFmnF5FefcLOCIOGFWd7fj2YVCmdMgb6E51HWonxlcNuUsKVuNpbWJsTjwfOEoCwVu/lK/dV3BbvLdq1XK0ACLmaUeGwXO71flOVYLy/eiJWlw6uBBM237WqnyeWkWJdEj9OHk0IgBe2AJ6uji3WbjInNAzDxsx9V5+OjbVpH4abQtRkX5FEkdVWLXJEocfZ+aZ2bxQcLkbx6ajYgk+Q8Glh+baJmKV2yAW8dO5nWHoVb8kvuutO3VzqX392vf+DVRXq+Y4gs+HYnbISbFVVIJY2NpPtxaRiQlp+AvmywBHfOQG5gFdNCIEAean5cgCjqAd7S9vWcjks78sIbVs1B2JWbLOyjaBVBhMqmYurlWD1NFKFnoVVLQjYWQLSlH/nnXi3mfOfCxD5XcwVkOFCIB74mW0LAtCvR9V8f7XeKywnAHw1tcTXfyoPYThx2FY3LqofZdoRUuhGfFMKk2uTc0weqQ7wmgmhY4uhGYQgphiPk3i6qXbvaNefiShP1gn4po+JusVRCKRVEAWBqXkgd9Cun+NuLPEztgZ8AmOiMk4+92QVBRWCXlNwQO8753KlTpsJqFZ2h+W2L1ut/KmaBlZbgmoV4BI48cgkzrWp4AoXtAzRRnWWIABezwC4eP2bF9h8LPlGzYrYLyg3fmJkkKp8TzDhl+mAbgPwJU5D/3sVoiVfKAr/ncMVPHMAJn6VgGvCV+seGHc4xydNQBnnJWK4C8PPVxPgpJCMECFADFSwIYCr6z9q1IiNaBoHpSEgAF7ZByT7HVuf2A/syCZRYvqOm3nU6yaQXoHH+9W5AnhXuShgG2vAlfpneyYmKY7oOU0AvJgs7dTe37JrWC0r9EXtmC/gEOOZA6C2/JWVYFH7ZdWJIuonhYYGgz7+mZz64y84n2XBlwFAW28o9OfTsK1TpON64v6J74oachC7u0Qk7/IecYPndz5/OtsLJ526/WdqTWDg+DbtC3gPANj+nXZb6WjLpwNwtJYTA2LHD9OmCvCGMOMTvEsBwMrlJHzxWKT3mC0MOzm7/cFnBMAjV9b0p77ZzNfBwLtt6z7ZE99pZYPWQIJVsYTu/8vFSY90CWAEwM+rH7Rh+Yfq6kuThwDLQA/+Qjt8tTIcVhSsWmshpi81b5Ewjo0TDAvPyQUY7mOb83FBcLSzJ0Vjgpe9mYEyo9acVCIqFqowAuDnJTy87UuYbm2lbj0lfB1/tDcvZFqHo3++wpQA+KVLvoynXnhYAbywMxWhgJ6Ev4HdNWKnNePkd+EhRVgeyDaneMjIOcUAfOv+Y0GV4adWuYBfj+UKNqkLAoL/ad9WIu+Z1B6sXtv8uUzsLt0f3Uy4fheXKGCkahYUA/ySBdCvXsgnZfZCeH6HaVtB7VqbTvpyEvl7CSeuLPDaesdB2OpqK4QIgF+2AaVKd4c33/D+3toyjBkGZyi5+uuW39fvz2s35R05n+bP1U38uxeJ2tOpvZ/kTRLZNoRvNao2MxAAv24MjIMZFxOzPa6WMMZK07hqrEVa73xM9o8UMlqul1wSBN7hlBcFnWklcClmAVvLNFtftYoRcptKFU8PKH6q33EMDUd0ICuXBIH6T7p/5HkCwMSkTPv+j8IUBKiEYZIK5SoKplPxXXWLq/0ZdmAPgLbdJnyy2Y2Tk60BnrUF0AVivkZfKGbr+3onqT7Gp6XKy6/TCo/jnMJxFsBIvfj0ZwXPHwC0+PbeSk3Hr6btlQWYTl39jysswLQCYFrx8KsA8B8cnMHlO38A+PT+YwaZA1BafI7BVPKgY6Ebh6eigaMAYMWh6SQC4EV/A79lhoA1AKiULr6U31U4uNVtV1iGXwSgqPehJwB+Mew7bAKsZKs9aW/IcQA0dWs36lhUlmGqjMD0VwB4/q9CAPxakYiJz832AJg2xd2/5er2oOERXhQAsgCvoH3p9pNd5ieTfQugxvVBqQNReoUSAgLgnVVsOUclVLwAkFrbQl/bw9LHVH/IGpRRQVtimNQsz1OtiaunMtNyHIMAeLZYsgvIU240FsW3yJZ7xPjzvj8BwAEmKjNQAjDdB+A47yQWFwZ2muXNHckEwDHiqC2boW0Zj7RbMHy5TXinrdaaPA8AtwwQ3Wm9bFAhoLkAw3nKOJVnksracG4QAM+VMBPrL7H7ihs5yeFPh9Pv4uCA0tT+hAWoeQTlCTQOSgAS/HGbpw4sT8QGdWmf/IAAeLaoVTXqWAhfnAzYtv3GcKbiSVNneVQMcIQnaNgBCQBT073G4wbAki0JrCnSa51WffC8soCkagSRBgeLbIaT6YqZ/DQATbdQIiAAwJawvAfA9mkHxrvYGolxcmcKnc+SMP4vdCK39KTY1S3ctpXfTNurzndjvwyAW68RlhYgFknHU8eGhy4/QKDcW0IA/AoEW8OOPXUsnO3qHZj0RWNLO1JdPp9rAbKDiaKiQMUAZjzlZxO1bUqsfy/qU4w2hryMBKFt80Zsker2YYodXfoV3qoL/jwAsiybij9tFEgnoIJAZrTVeI1dvjEe3YBEAPyaFSjz61h2c7YydxfbtZXZVZfPx7KArKZ6cU82lX8POYPSBTTOkNI7kdkEwGvWfVVpxbRFsidW37l2c2NfuwXIyv8z/U4c+pVM2zCQwYCbNH4EN0JlKBC2HFt5srPClzEZpCqATJsQLFPEMgi8Unq8ktrXrH3WItNWZ6BZgPIkMWwWkkXl9UuchA6NelMxHQ+TA9ULXp3nogCoKfAKlX+VXQlvn+0N/ccREOtIkurdJ2I/qpGf0RkBlwcAjwv59izphaOdb6tD4r6nXOtX/E9W3YB/V4c036BA8xucAGXgzcRJRUNZfeOqWAdCJ4a8n2wjvebKUqF0qXX+J8v4X/wzxZvHMFDZAQWAnZWdYZntOyZZgNMCQK4LRgsghjtqHo2//CchuMo2+EfKYQimTQAm8sTisz5P/iIBkG26ZX/vCVoAoX5N/+K2+HO1uaoIQAZaOai8gIoBYnFYtEkAnFymGCS2r86BmqXS7HO1K8n41w38D9rf8C81yTYHAShdQBB7sW1UZ08RAK8T3zm+LbZWGmawrNKvMuN7YsvlRMQAmVR6phBArcsb+KVNsppPqExAmeVv2wpV2i7Qql8x3LFVpwv7FgHwDLHlzI+RutnO4y3Y9L9P1lnQApQe4KDsrja7zW4nvugMaPpXCDy2JrDxSZgZhlbIeTCijTMpykOOCIBjxZH7/NRiABw+WyeKeYeuZWKHofmUBRDqf0T58Kchm9aocPo0ANhhLpRLQIow3eAaFkcdKm1ovw8BcKQYURYvNQBs2ZALg+8JX5KRpdrcy7LFAoiY/1H1w1/vytt5XgsEWd0MtAAw0dap2R6uSOHtopjcIc7b0Dry7Br1+xAARwcBJjf2WO5zc9FvJZEAGHJ1gK/MrxF7vh/btpWEhmzxjBYAZHpQ+6D4Snb8SwOBRiyosgBmGEliOU7sp5GzVOfETauPpABIsSZlximvGIjfhwA4PqgvfesSL7gp2rGKAlwQ6QAU/BhJJa4cZzwGmO5r3hO6r+tfFw2Bug0oC0FutUKp7FSqABBtyKOpF/m8g1R5YC0tCHl2VidX/1Xf4ycUuYDh+N5umpbNw9JcI8CosgCZ+VfK9/aVH3mRFJ2AFivQWBLWKAfZu8yLYlvQtzRE4sK0GaqT6iN+AXWAZWBOyggcD2osT28yVSm4JQM4oPoo+kOHoN0IqNlA3dxoYUhgLrdnc/UuqxCESwRCy7ZjJ013npyTZY0g0LtC3X+Wfz97mur/kNI0A42UQMYAkJhuotR3HNtOwu151oEuC4CabQ2CcjrYvWoS8JnrFr5K3adRmqZ/6FKzAo2yQLkeAE+LLmqeiQB4fwAawYJYD1DPA7nyP4OGP0ey+x9Xuv+7kAYCexmhsgD7J0URAKdFQrkeQKwBqSPgKfX7f/j4V6j//2kI/KERoCNQpoHsfEf+ZQNQSyDlmsCGG+AWALT/yReCupfSTkAVAkz1FUHnLpcJQGAYoaUW52urgus2IPqM6o9L0QD44/cqFvAijgBof1crBbMisKwkDM0tAfC2gX6hdwLXt4zLT23GO36KcxroFkAuCMSVQdIGoAfwfzj/c3Ttg/6rSPCvv/76LJMBHP3Rjq8GcDeyEOTwM6uzyOZpKDO3WtGq2Ur+VNsFneG+gMba/+rMHmu3sZVeaiuCtGXhOC9YEfD5k/8DCPjfDw2B3//wPv8VeTsv4gCI2UH4JxaFudNsb2+gmNsJ/HJKgvFtKRqxJ5wlnKUFwClWG8ZtWluGx4+Dx7KbXCRerQhya2uCJQCfrxCATz9+/PjzTwDg9/h3af6jz5/+/Iwe3/vjM64Xk2tDDu0NVAAktWpgpJajYFdTM9gWBVmAX/uc1UAPnKwswesrsXmXcLzSYeq6nufHRluHEEkA1gJA/QDAb38BAH/JMPB3bgB+/P35CkY+eP6rq+mmnAYWW4M3abkxJHD8dLdzp3zSISwBEP2qy17W1XwAAfBzkjixH6W2mk1JtAK8r/uGMJadebeGEVS78EWTqNruIDH+P339799///bbb//5+pfPCwEiC9x5AAAuDdkBAOUUcNkeZhfpHUJYAAGn+KG27yxlPUAHQE1P+BPlwhLbIACeIVats0oNgE1S9w2tZpZbALfWJQw9AADwNwDw9e+vX3/7BN9BoAcxPxCwu/r022c5HXwllwZOj+0SJsM/29ubn9oEKlSRW5sJgCPF0Rwtd6mO56V+7NhWYtZW3VURF2t0Cp2qLrG6+r9+/eefv//++78AAHyLd4LGIfHfeelnHPnoBDbVSmC0/tP9XsFlN1B9JSD4qer0spC3hsod9aFiWhH0MxbAVQ1fCl7mP1j2Kar2YAUrYwCtT+DVFH3/b799/fu//0UHAP99/fr1ExiBT5/5VOAff6RXqPHMi6420viLJmFeHQC2VwZu4w+vMQStVTdTsgDPlRAX+BhHRtHlnGyoPO2/n2rdv6Zg4b/+/X9cviIA//zzD9z6jF4AgsMo2kQRmAPQN5p/vXU4zwB5GCArgYGNi8KLZ20EwxjAohjgZxPA40R2EZFp4L9/gW7LMBAGN/f+/wXv/zdaAXQBEAigD4CHN7uNu9tNvSvhNXQAsulGdQ+WFgCc0zRyLPMZXB4OVQiAx1T/jO2WpqX6CKkVQQIAtwwDwNt//cqt/z//B6P/798+YRhwpfcBgfw/awAAd29kLDBNysKD7FkWHt/668SSwQtrFh06aVbmCMIC3Cz/+vzX5+p8ICQAAEDr/9vX/8Lfr+ASvv52hbsHM9UGCNePVaaf6z2rjhlTWUCsrT6KbeN0qz2XD4BKGFxdJbL0ghbgL1fVgBQAv4lI8NOff8It+J87AHcD//FwDx2CNvYFDZvGiSFB1bMMDU4UW8bZzRBeCADi8+L5vEIXHvfMTIsBpmmUqSYhV+mfP/78xAvB6Y///YAb6aeUP7SZKguQXU0bhwjtpnUA0OpgtLHTClPT1EmWBMCbGn+eKe4yrMJuUzH0LUNXwtb5AwjY+NEUIjZQLIzuT5+iHymE/D9+AAQY/l2lEc71yJEumwYdeWYQ5Bt+pkGQmgTAm3n9QJwfm8p2cYYT78djW/t37zMWf8UskG97V7zug7d/RLgy9Ep2D3J1pU+fc2gUtgpxtQXiODctloPTmUGvN/LR/Hp8o63P24Ky9lD7u88VfCWqgVdeKleE8JpQ9Nm7urqaTvVGsDLp96bHASB/1sSwYs9VW0SCeCeaWhMAryWmaA2/QcUbsZ9Uo60x6u7T6nBAngQ22n5d6dXeSv9tLiAXiUANAH0fOHYqSu0lY7J8mdkTAuDVIn4Z7AcH64fydziqU+jeecJtwz9vBIET2z50nZLaBAYB8GoA7A71WrBcdXqwWA/g7p0Z5LafB/SYTMV0UF4tCTtU1V/KjDREd2D7FjWKfPEQwIiyx46OiLW9geWpseq8yJ+TXJmAXFsSdrDZB4QEO9wHzvi+9pAswIsnAVvzsYzbLr3D9zR3X0xyjlK1JMx9bKGPKYJAp2wdS93Cf1KWdmwdG09bKS8BBrYTqr2B+c+P+DxvWgDMJaU6Tf4zIOJLfSuotgDv2YLIVcfEsMA+sQOlz+nUsKMIwO35jpobkA0i8p809/KLfqdYUKpvDGGFiTuSI3FuBGvzVoFRbh11VIN7AuC5Ad+R/ZexZ0ismgooV63576O8fO5q+pd/sMKc188MksvSTVEHjKygDYDaUiU+f0Snhj1bjJ2bmkd6UGcXhfVdGVH+K2FfXmeBS70SyOzp/mF1B0LXJHPjJQHw/KpPGBwdQgXLxppABUDNnuf76b1+Qxv9lREojUGzElgeU/UEAnxPw2ntJDuTo2OLoxeE7G/YZboLyBsc4CxfVvs+1xyADAP3PMN+JbA8rG5jB4/mLpQF/FzSx47dWiV3hjcsQF55+AoBqdXUK5HI9eg/rwUFueYPmi6ACQTkvHD8GJ2MTg172WJAgXW2+NFdN7hySw/rm5Lp471u/xsvKyEQAEAWaOqD2rR5g6JoUjWEOv1reM4A4OU1He/xQScB2DPnrlt3CQ391wL/5iMSAIjo/W2NRtPeye1qW9w0TgC8enYggy//WACqka5mgBoOvxnyuRKaHFcE5bkeA+D7boKG7zGTZMvbR2WpfRbX8CwBkCPLKA+KTp4PQCZmgpq+3215qjQAu6zhAmzc7tPufGyREgQEwOsBEKqj4jd4dNwj1lYEgXm7ast4L2+P+GoOoeECGD+4lrWF9/YpHhR+MQDgYkxLqT+yzSfirVYLkFc5QY2HfTzaqkGJ/lksP64XqXA9mMwKjZNfJn6eR8daqiNsagdF8VTv1TR/ZPi7tQixRdnVo25pMkItDMXas1PXM1O1IY8swIuXA9TR4OLg7m3L43sid5dWC/jzuuIbys+1b1QiUH3Fv75ezFWTD/vVS9tuPVqYAPglkck2OtjkuO6MrFC1+l8V2Ry8fkrU1sm8Y2Z4GVmAF8z7cjcO2f4MvNFSaOf2OHkRCUP+ddKI+cxgX7vsXDaJnRUARjzVAn/t6CjxFSOveHsoaXxxV/Rs02UFJ0jF+QDAClMW23d7Z3SKvDDKn1ii9a4fP64WqhAAPwdAeHjGlalJ+Z15ogAEm+p0cwLgJ+O/CAP/oNWsG+LwBuzdQRbgYmMAs+y005REeIdY/9gTJ3UCVahj9TY+zS9srwet+sfanT5Glr4PuN0UxYzdFcXterVYfAFZdAbXcDe8ZDbD/6vihXWKTYUvY3t4yPOzaf0U56S2at+II7vs41qiUKpkosqJE/0eAcGkxeIwviFxB4DdzNjNzbrz5dt/Svm2GHwvbm7weQgBZQEvGAe0m1BeesfOfLqirNrB3urUPlzFHXFLge38xC0IILC1K3Z3c6KY+xiT3+DqF7f2f7DYkgzqL8YLTftCvqxmDf1THeBFAGi/15jmrhM0nhH4mSrZyN0ZInfEw+VjPr4xMONLCbCax8/2s1T7WTtXBV770AHxibfjG8FnnT31cwTW8OBMGgKyAK9JBHwJrXAfD6Yf0GikO2dSWoaML+UJ1eZSBGBjSgB8BUDEV/PbjZbEtYt0x4r7L/9pl28r0P5dQbuDX9f7O07wdMEHvftEPm+SlkuIbNXCF2MIPnGDSPAbxlTtRTG9/HBr2LtiXdf/t2+aOejczE7+Ap45AKZcgqXtA2nzF/p0YViVi3xl3TFeTJUv4DaBb/wUp9ab1oFNSfATbwY18/+ts75fr6q7OpgNEACvCYDLTTYT7WGPWT3OT3sUBoBv6UrqAGRiU7GIGeI2gEq6ZrOb5vhf3KHH16DosMldMSMAXu/jx25m1dL0pwAIq7YNqPaNqXwBn9LFPmPCPFjV0aMHgk/GbljD/g+KwWJV3C30e2ZkAV5Ttoaw5qblgNjGk3M/uDnPZyozlMtJZczPimWkjALf8FdO85p73X5mYP+LTiPsW8M9oPOVlgucetO4y8gCTEcuEpjGxv4Tmss35D5T3shfJHjGLt8IR++r6hHztfRPtqErZSkAGDfyv2/jYoGOXw8MOideDjrLNYH1fsuQznlaq0a7cZaYkXo2qxmAVGzW3nrVGDdVN/ISAJEiyKgilc2o5JNjz1nO4GcsmonfdwHA+lvNKhAALy6272g5fpjx47v92J+qc9xZzea75Wle3ADI+jATGzuqqj9i44isn4lgYSrnFrEN3bJ8U1sakXWzAPTtuoCgYFEE+gML4TAIgBcUVGNlkg2cCPJDzOcNRypYO8uh1sfFkfUd/q3pqK1d8ly/EgC8xfvOWuKFRuyHVQygAOjsFf8KAcBWB+ALkkMAvGz1p1ac8/l5LPKbxK2vCYBB70elC+CRnd3qUQqx/VTmA5IcaQzKYpLmAoqb2V4JcMWNwpfbYr3qVA8OCoYTBgTAy8ky3kTGHg1ifaCYAtKndVk1C+vk7Uu1TSuUnsBSAFQstOSXS5wGbnqAbx2ZFmDcdzNeaD5gVpxsTfBMswBzWU4DONqQZ2LgRlste9enh3aVAdBzumVa+g1eEhLzv1gnsg/O4s2qZO/bl8WX/qITFKouuFgNtjfXygZ8mREAr5IFiDGLc3tiP64lzm6xygaB2I7DLFjdeW9MGfYtw5oR8attHpKfInS0zX3MciwtsmCzMgf4tpLKnWlFYPD8nSo5POEw8OwXhOCotqR2eUxvVDt3wl0emZUJlwZAqHHpqz2l2hygMAZO2/qPUER+JQMVAIvi5v76frxeVW7/G8YDq6oaSAC8XiHIVADgBjBTrA2QAJieviZIOPWyR1tYevi6tzdsu3WZvyV9QwXAlxKA8ZcvX7RZwG8YAa6qctDglOeDLtkCOPVuzegsquQBEwJbuhKnOeXforHQrbWqg1d9KWt99XDwy2Dxn1o9cHBDaeDriYwBWBkDJCrv5w27tY0iVq5FB6z08KDK+NCiH114DVE//a0dgG+d+4WYB6wA+PfuhgB4NXFEYMfqWYDcRrIx6xqMG8l/VUmwniw+uI0GgXsALCAK+DKQ0b/uAgoC4PWrQmpVd1kHiPOGWmPNAJRJBL+ZHtXOO66OAOevXDQB+LIer76r8lA1J/htzdjtjAB4NfF1D15WAq08b2zbNvzIavXzgXcUAHweIaxe3ikBULOC39Y3E6n/b0GVBn6HGIARAK8mfC4grs8FCKU2T3OYHKgqZXzap7QM2vqfwLKqnECsJSpLToP9GOBLmQp+mZQW4stJX71L2BgSbuRsYDotD+0y3b2Wvofie5441lt4lzVEMPtxWQNO1BEg4sHJt/YsQIYA5WKBVVHM7giA16wL1tYDWHzeZhIfnPVpjSK0GQKz+t1xyUC1EEBbTgjvdauGeBsAX75rIcDNbHY3o0LQKxaDClO1aXVjQ84KBUn42Ct0Y5DkVfm3KOzNxtYDv8oC8ETADRUB/64OAfBtsS7GtakAsgCvLdWawOPqh5aGR23ab+npJ5EFVq0u6OvPVEtCF8V9Z4F/pHQ667vielE5A4oB3sIIVHb+iIAbN3to+0b1OlAtImy+Y6J1JQWjPlDmfk+q5eJfaF/AW4UCTC0JMBzniaQuqdd+Ld8pF46aO71cwBqbxsvIgvFlodIEDNZcAvHf2lz1v2nLQU67ZfBlHR/PNRNE4NIfX42NU/0HSn+PV4UgshDavL3DXZ/S+X9rSHNFIFmANxUnr63hbYXEsBP2fAC04PH2jt3oi0IOyJfJHQHwxoK1QD10b00cH+fn0Llecgcav3nDZrjKp/O4/tfUKvatHYCYA6pnA0uzLWA4EEaasW/V727dGMrLuzP2KAHf1gW7IQDeNhDcmwNiRRhlLSd1afsK0jQ59CDbzzPqHNx0Hhv/xcnvD78sAIpyDqgZFNS8eugkmotAr98MGjUAAjwi/JAhBz9QDNo7RHxbbE96Q8BlAsB3fHsNhTm1eWAxracdQ4mvmWqJX2ODMbw6Pdj0e3Z3V7BlW4+YL5D/3dxSg4g3BsDKW+aATMevTQs0tg6U7UHaL1CkzQC1/kxMBxeNfeJfVhMsFZ2+/i8tCLTqu3na3bfp5ZmmUpwLOlw3qO0SbnEBt8LP3w8Wcl3ot29fOnxDaHEWp0ZdGACBE2FzyPrBkaypCdwLXN1jVR0D2qIK+7FDqXCPMPy7w5fPgsFgYA7WY/FDIUO4oxjg7aPASWuS15L21SyAc/gdQ7e+tLBRFcJuoHu94Ljzx4dmBMAZeEFnlz4yixhs9o8ur+0ZOvPf/sMDgMsJHm0s5O9ZCMwbHALgggh4NFrbDwIwj8xMAuAcZBsUz2vTy/aOe0F1T2s+gq84dQiAM5CQNwh6FgB7Tw68vX0jdt4eGBIApyax3DH6LAuQxPUQL94b7y1MEACnCsCznXW5bVQf77VSIZNtggiAkxfDT62nCoN7iX9zwPMtQUbtOBEsOG0JgPOI8Z93yBsrlnHjOHLeX9zSmkOwszkV8MMDwJ44WLqdgLCxTcjR9oRdGgEfog6grerY2rHV8ANPZwlWru8VuCz5UIUg0fvNNRobCfaPGmncZU75jiBGAJy/KXCeH74zMSVskAW4iLRg5/p1Y27aTrPDuBVbug1gRbJx4yUBcBFiGg1n7vAkXzfvyb6VMI0L1T9NBsn2crrY9SVjly0fEICGZi0Xt5HU3IS3t66UXSwPZAEKI2zW9Mzw4/z6BMAHFwKAACAACAACgAAgAAgAAoAAIAAIAAKAACAACAACgAAgIQBICAASAoCEACAhAEgIABICgIQAICEASAgAEgKAhAAgIQBICAASAoCEACAhAEgIABICgIQAICEASAgAEgKAhAAgIQBICAASAoCEACAhAEgIABICgIQAICEASAgAEgKAhAAgIQBICAASAoCEACAhAEgIABICgIQAICEASD4iAJaFn8fGEx3xyE7G8Ktph/KmES7xME91micrAlud7m6GjbOBgzBsvDm8csnKm+oFjcNBQ8uov6b5JvDTlwH/j7G9py2TsP2oUbiXqVNJLd9mhRE7AQHQ/FBObsP1yX1+oYw4FGq3codf+aKIc3GXGSfioia5L1/rNM99DnNvTwn2zsLXc507uaU0qmkSfoRVe5EZGurPchk7/HPYG6v+svKmkXv81jIsX2Yy25/gDww3jnhHfkZ1lOcOAdAQGy9+mDtbqdIsrNReA8DOXatQWmTtABh5tAcAAqaUpV7Ah/LSdoTYWR476jYOWTxRGsXN83C5459kEomPwfYNBfzQiaAPX8C/2IWPWOOHtwUAGerez/c+34cHIJjimPDVddk6uQsXOk7z3ItSfqy3AACuN6gFCHBSFx9yjgQACUMAisQGSfPYgv8sjlaQ5fviGvAzE9/N/TiOci82QK/RlsHXVBgOo0RF+6HSem3yNIaPnoGtMjM8ptx0M+kDQgcAMO0NAVA0jXZsMbaJ7KDU1zQssjxKo10ei0GkPquFNiDChzxUhwQABmwqxY9yNy0lFIPUFoPQ07SMJhsGdSjFyf2wFGGJIlQffyUTo9iHH8UNgKXepFSlyW8KY5UgDzH/UPgfap0bDfD/3M1sYgKgCQCMawZjMZammZvsbMdHVmwmSZjmdrhlEg4HVAO3g9zHh0A1YYBGvlV4bGkYoATDWBaJBeLnDv6XsJo195uGpGAVAKBgQCkUcQe8yLSEwB2mYRrwF0wE/FcCIJ9a+DaYt91EURJ524I5uUEA1AWdI3pMedXQOSdgETamGSS5I52xa8rHkiUAYAQBsKFGIphsUIMUK/fK2wbalFQ+K1RRYxkE8sBOmAoXjIqUWBhsACBAi2NDdsIlymP4albQ4DiP3NxVbj9V3goeATTEq+I8ha94qY3pzii2qWsVjACoS+JDamTGvj402E6ozQnB14In0JMnqVIfUionyn3H1C9pPQZAc5L6u9xL1buXQYNMClx36k7zfJpNXS7TVFkAgM/GQM7WbQpPP02BIhijOOLi5W4USW8FmIBD4XatFDQjBv4KgfOu4/80AWD6Fz6UTdDNxgXNx1oMwAL+EBhUUA2IMBhOHtZTOqOeBrIqBhARPxLDAziRYLDldrs1MteYbIUs/y0BkLpDC2A5ecRjR4TNmtrCxdt16oQLEHByC2DZ7pTbAaNoqz0QAFq1RFVY0Jm7KdzmMYCpAAi5GuEhL8DwDJMFBUCiBvNTAES18MDD1wRmgOLk8TIoxQyYcAG2lagcTsR18g1Dl1uROA9rWQATADiJZasyxTbz9FJSo/ZAAFSlOnlpuE+O+NXcZBBmQRwd2qoiYOFDGwQg5w/5hj3hAHD1256yxrm44QdlrUYAEELox4O3JIH/sXTHUm71IQYR5t/NMvwaBfUgkHF7H5cfFHORsFju8AlsDwAZA3AoTRfrA0LrTJWiCICngkJ+NVUMgOa/HGtBhgDIGCBG81+6dBtDMa5E4cxl2FgoYx1UQYTJy76oDUckjnnqiwAQbDeGgctmFlBwh185LDvfBajlwooMvQ7QyALgV0lpLuAnAdhkMFAh6Qsx1KoAyLgLgEEMSRiqQALAWGDCPYEpBa36RC8E2ZsqzytrzEymgHFLQRgAMCYTBIC/IXwS8c4qlPR5/drJ02UTgO0EAeAfJclT/VUEwFEiruZGxQCQjjUsAI8BJnCR/dwsK7twj1el2IbrVr8e44FFmMj0PQHtcRfALfMyzneYyvM/YSZrzQUWfje73RS0nEqLwsURP2wLxiJDD+BzmHQAst0uQzL1V6UEwHMAcCMW2q5rO5BPxTBeLd0CLA07wwQNs4AERra0APgXTMBEONwgKiN0ljgQFmSOGdZrRNmEA2Cksnwvqg1YxJ+IsKQEIPYiD/L9HP/zbBkImjsRFJgbUfprABCLmASiiw3GJTEB8DwLUOXeMQRSqW4BWFmI9Ytl5lVzAQyNuZi2YzHOLAqVLEEJqEbIyxz5x88jSM2QlAAih02+i5WkOcSZKVYJuQvYbsUsAmPLCKuVbLKciHiu2HpoAXh0uDMbLmCLLoBNJlhCzh02YRNGADzTApgJSubiMItjX48BxEM7FwMtx4+rGi4MR48P/EmcR4GctmeFYxtcjfjyRgxg73LI9aoQAB8Bf8PDh3oQaOQ7N9ZzSyfPOGSoZOdQELjdTDceBYE/FQRKdYByWNDMAvj8gePCRV5qs4E4oo0MJ9xghJtq+lcG7Xw20JmKlBEBkPfHRlEHAG5bniMsgACAR3Dwf4yzhMKu4MxgZkRioshwzH0AYhNrxvC/zWeQCIBnWoAiwYnUaRTqhSDpAkL43MFuY2iFII0AL/fhb+PXkePY4nGbsgA4Qg3+nesp2fBHtgGqDOcCljDQXfgBSy838bPIYgV6fgvU64a1uFXMG4bF1sqnPFqEpCJwPXZKBJxHDJBC4FdM0tww9gDYJXhpYZwFrQAAPRCtNX8bAQDa7XSiAaDsjLtRMlWPQFoZ5Y6PywUw08eJv2o6uDAjbkOcMmksAdjGeRxv4FU7HhruArkYhQB4jgvA7CmcoG/dswAbF8uw6BnMJgBiGWGWQ+Tu2UErAMCUrVsArhg0+0x3Afx+ixeiPI8/FQa8gYZ9IzwLGH8fFymaScHqABh8ycEu4qvbWIqABJs8KQiA50jo5lkY+HnMiqYFMKa5m0CMny4bAIjL72S56wQGhHGb2qybiuWLMEp0C1ACoETW+/CZWepYhkAHkn5HFBRT1LuxydNALfKohy2mF8GrtsI9gb3ZFjxNMAoC4Bli554BaTbk9MoC+LlcBJzkmxDsL1z/QsYAKguYGDZm9ELvIc7JpbbBqwITxmKZBcDTxIpCfV2mlXtqiZdTFQVZUKIDQSUqHgyIn+MEgzFF/Rea4YHPJV1AIBZ/YRoI4YPBGXPQJ52KFzh9AHDlNITVbrw1HQctsOU4WNcXIwyidnPjB4HjpFgjchyXG4ctFnsguzeVXTdsvMNzMNeLoryywk6EFX9bM8pWrT7k6J9EZAE7oUCs/kRolgoj0PRp+X4cZxIceS9wC7BM5RJS4M8LCgLgeAI4BRgL5JjPOTiwa4BsiyV4aA8NdO7ykj9eYydk5Zwr/qah43FFW667c7ZqwYGdu27mBzULUC0HdCoLwNREcuD5ppquNCJbzV5XXgMlNdSGBiYsAPM9Q606WqbxhAD4mXQgBF0XuA5kP1AMcblX9VBgtFxgxu+cmKam76VpNKZmTG1LSJA0fpQBD5pb7ULt/ZAlX3vGGm8Z6rOPxZZigJMVVmYDLY/VAr2feN8TFAKgVc/aXp/mY8VF6Z8AODzS2/XIGAFAckFCABAABAABQAAQAAQAAUAAEAAEAAFAABAABAABQAAQACQEAAkBQEIAkBAAJAQACQFAQgCQEAAkBAAJAUBCAJAQACQEAAkBQHJJAPCtLwTAhwJAboUyZuWeKALgw1mAGZsZoucVWYCPaQEYM+6Y7HFOAHw4AEDzd8bNzY1oe0cAfDQACgbKN8bj6xnFAB81BrgeG915f9FZDdbXsyUB8EGEmaD59WDV6fe7xsNoOByNRoqD0h7wJ6oUsTroptlHgdHlfG9t1r/TuiMXRe0bMeSvQfGrxWI+fxiCjB6MBykAAdwhOKiBwO6Y9oMYfMtmVRA5Iw28r8xm1VnmoA2hrBup87tyuM7ux+vVqrPoC82DtqXeSwAkBkPORa8CATV8I0EQ73Z3x0q2GFmAd7cApSaYGqvloEXFrwdg63HId0dCu3WNVwD0UEpjwA3EsMtB6CgQdCtzQwCciP71g+zV7ZtCKr7fn3d7Qu9q2FeK3rcAwwf5WE/3C8MeWgQeIwzG1+yGYoCTDQH4iF9hdDef94TilbXniq3pvs0FaCKfK/8TtgNAKE3Cd+4cbkgF7ytcA7PvQu/o4rtS8UOhvIfqv7qzfwSAChP9deK2fO+u5hyurykSfKcA8Ho8FoYe9N7tPVQufl9xLYP/CQvwuIxEvAi3kATuHTBzmEkPVI9PZnsxS82HsQ8ZSrT+2rW7ZqpL6azQLusMc3g13rtdEbhXUf1z5WcB0M2FCBQeSvfQtAq6m2B3d+rX04i4vZ3pv/qFWpSZrlk2m2nDgc3gj0ixdMfO9AS+VDuOd+Hd2wf12wJQcoBWYahyB4GCNAuas2LKHKjMFa4DKyNYaUAuHAD8LRXusxlrFGu0HAvVDuk7Gnlp5R9UWDd6+HXVvywAKmsQgYLMHoY8VChZuNfMgpiCYgoAYeY+hisQv+VMAjATnuCmCqdnt6XWhdpl3DUaNpz7aQDA7ZCO46jKOEZcVNg4n5cwrNf331uSmQ9RWKyK6rV7v3Ol87EuQjql9pGy9NzIjnTfCziMTssClL6gHRVBw0MdBr3sfFNcPgGzmyqG514dlN4XSn8oTfxw1G5fX9wAvBQA8qMdzaOYgeIsNGm4v1bJxOWV7a9LnS/UQO+K0jz+e3JstSbyp2YBnu9CuGEYqUoTjyARB8nDeHwMEDPWmkgVLVXSo+30bL/mpr/N7Bh934/LUc5VjrzzQo3I3V5MjWcMQHscORIFjRGWGTgQ0kBA9LBGJK4hcTxUGnu6dsbliDufM7pvb2F4g7bBk3NXXo5xoWQ1wkejE7veJwdAFUlUlm9YyohXowUSwkogFRwMzsVMyGuZcC7XqOkx1/RADG6hbVB3VY+TIVyv1HlrdZUAOM7n1XNe5TAqKB56AgvgAsHgaAg6uAhC0Hhw+/GEiKcNlHq5iPfjby0UPec194fa59hz4/XPPzrNi2yc+PA/9iUivRg2NCJL491S5gKUw9LFv+XTy8kPTcnDcmrsuaFYr9cjAJ53qWpDSl2+rpZvHnKpo9rLRsr/inhTCs5nyK8P6t7hSKurH1Vuq5Xlui1WXr3bKWr/xF1Au1Z7T13OV7zSvSfNVu/hzMR4IPnQQgAQACQEAAkBQEIAkBAAJAQACQFAQgCQEAAkBAAJAUBCAJAQACQEAAkBQEIAkBAAJAQACQFw1jKSi7prPdOGctnpaNjy3NH+AwTA+0qvp9Z+4/rwxh71HjY8k/rkX2rry0f91Zzv2ul0enLLLbx40e2vusPRw3wxhBujEX99D74VL3iAW2IzSG9UblMSLfV6oxEB8PajeIT96x6GPf4Fx6/YhwVc9EaCiRHfE6BW65cv7A47N3PcDDC/HgwVTKP+9aIz68/nw871nN9AAIajYWe2GA47xXw4XF3PcbfXcC42CnXmK7mBaDAnC/D20u33+T4tPlbl5nTRNIGPf8FIuSmjq9uH4WDAd4P0i8VQbD18GHYHxfiaja873XExvr8Zj9fdYRd+yLy/XM/nq2IxX7AB3xE26s+uWXF3O+7LfYnL2XxIALy1DBczsVtz3elypeNg73WrjSMjub8IDPaIG4rKd8y/d3Df16hz2+/xfWOAwWLdn3duYOB3UN/fsafuqDfsfMd2+rgbGXeewu3vfbA28/lg3QUTMQSsemAZxl1yAe8AQDFAOzy4Lga4JReU38PNgQ/SFfRU11P8qu7lZmF+f11c349XvQcY9Pf39+N7dP39zqK/usUGLSu4cY37fVG3t2hlKukUfXA8o956hT26Rp1VtzccDQbDHgHwDgCs+F7N+bpYobfHlgI8GgN9Y6jW5Rs5+Q7eHt81qtrfzjk528Gwfye2/27RISzW49n6/nq96qzXs/H97XrdgRet7rs9ueMYNwYP+0UfY48+xAVgQrrrAf6gMQHwXgCAfnswomd97KHV7WCTXDAFEKXN8ZsFDwThO7wJ9ykAQHsYBnTBjvPmLDCCH8B5dMYPqwG2Yutfg3fvdecQ763GvfntmG8uHwzYACJFdAHDzrjLf851B+LEOeuccX549gBgnF6gQe6vwbAXt50R3tEZzMYFWAZ83j3cz1YrMN7ihfOiA1Z8PVgUCwgEIVYYDEZYBQAOVgNIAAEMZGIxABbm/dH8tiMausCdo24f44XeYI3hJ5iQBdwN5mBEALwTAOjdwS6DJZ6PZ535fLEueNJ2v5p3+e2H+f0tv//+e3+kXAA8ZQgArHjxp9cFxY5G3dWs3xsU61V/fd//ZzUbXA9GHK/5jeoTsR3wpB9+4O3369vbzj8LTA4hGu0PKQt4LwD4kL4FW45mYNgb9if89gD71/IoYcXHO2hpJi0AAABEzMF9dzsYPo7AkwMAEPdBILCYgyeZD0fdBaT5PHQcPZSdRlYLEWPCe64Xi+8rtDQQGmDoOCcA3gsArOfcQx42uJ1ja8rh4GaOigHTPpqD0x6uZ3MsC8HgLgG4vb2djW/hsX6xeuAAQEwATAx0AWXzQlIXg/95f86TgDnGHKP+98lgOBp3AATsiTxjM4wqCID3sgAQ1a17vfF9D3vEQOLWH3XQ9g+H8+/gtMf3ov8ixADKBdytQJfBoIe+ovMwRACwR0gf7H/ZVYgHduhfFtfX2H1K/FvPRxAYrAardXc0Xg1VX5kFAfB+APTEre54jOFZd7gCZSAAMHrnd2Dmx8suZoWjVWUBZAyAHcdWrM8B4BMEDJ8x5KcqQXw/7PbEj+nw3lM4/gf3+F4P/T4AMFyvVNugf/oEwDtaALD64OaH6+9dLAXiSP+HAzB6mN8Oeg8DNsdZm966sgBcXQMe43XvVxwAMO3D/g1mk91rTCnm3zsj3oRIhHjDxRrDPV7yw8wCAHgYd7p94Rl6fRVfEABvDQDmZ51iPB+B4hdDjOjA5AsX8AAJwGDEg0CQ/u2tbgEgNhigOx9BMtcFYw7uXgDArQdk+DMIHXlhCQCAXH8FGPVGq/s5TxhHKwgy7zuLgp90UCywOkAAvAMA2NOtv5pd82z8etzvPcxR3xyAHmgRY7X5fcHTwOXtXhYgJxHRCkCwDzHAAt5mPMASIpZ4+JQy/Ji+iBOxLojWBO8GC9Add+YLLBL2F93FbD4iAN4egGvs+jgr1n2cCRp2ZreDwbhA/UFsh8YBsgBMAMfF7fWsA96+dAE319f3t4OhbDQ3/46mpPsw73QfFvfjeWfQ6XcXc1VkGMAtzPc6/Yd+B96vC9Zidb1ec8uCa0T+wQlkAuCtZdSXzTwX3SFv0NfrD8b3604Xx/KAj/b5oIOrBuYdrBBrWcBsBdk7jHSsAj6ICX9+usG8sy5A3YvB+Ha96j/wKcXhqAtGBrBa3c/Wq3mPt38driar1ayDT8CO/vP1miqB70CAaADKZ+V4gQbPO+2hiYYHxKqALt7XfeCHGg2UmZZZQKeDZqM7WK9na5zN7eP52YMFvkEPVD7GaWYIESAlHM/uO13IKRacAbiTB4HDFSaKQMtgcF10qBL4PgyMxFmXqOweZ0GiwcM3nAWG0O5+hWWABVurJWTdfpe/Dv1IrzNYdeYYC4BB6cx7uHyox5eJLQZYQQRDgQ5hyCcVH7qL9QDzgN4cngmuAIsHaIT6D7Qe4B0EddwTCwKF2rj6hmLwq+c8dAcF6HgwqwJ1PmfMj2jg6zzlgj65qqwnTYc4QRlowSUfmCQ+8DoTap1HHNy64F/+EWg28F0AEMtBhU5xLUhPrAPEtT4Pyi6AzjrYAlwfpRgwjLpS18gA9xgj4Ut6ONEr7Ae6gyH3IHy12VDcg+8utc9fhz942OsRAKfrKMBidx+GDyQfFIAz7OBMALx0wvBwsu3aCQASAoCEACAhAF43BqAQgCwACQFAQgCQEAAkBAAJAUBCAJAQAAQACQFAQgCQEAAkBAAJAUBCAJAQACQEAAkBQEIAkBAAJAQAycXK/xdgAH2oOZi+zd8EAAAAAElFTkSuQmCC',
        content: '',
        type: options.type
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  previewImage: function(e) {
    var current = e.target.dataset.src;
    console.log(current)
    wx.previewImage({
      current: current,
      urls: [current]
    })
  }
})