(function(t) {
  function e(e) {
    for (
      var s, o, r = e[0], l = e[1], c = e[2], d = 0, f = [];
      d < r.length;
      d++
    )
      (o = r[d]), n[o] && f.push(n[o][0]), (n[o] = 0);
    for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (t[s] = l[s]);
    u && u(e);
    while (f.length) f.shift()();
    return i.push.apply(i, c || []), a();
  }
  function a() {
    for (var t, e = 0; e < i.length; e++) {
      for (var a = i[e], s = !0, r = 1; r < a.length; r++) {
        var l = a[r];
        0 !== n[l] && (s = !1);
      }
      s && (i.splice(e--, 1), (t = o((o.s = a[0]))));
    }
    return t;
  }
  var s = {},
    n = { 1: 0 },
    i = [];
  function o(e) {
    if (s[e]) return s[e].exports;
    var a = (s[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, o), (a.l = !0), a.exports;
  }
  (o.m = t),
    (o.c = s),
    (o.d = function(t, e, a) {
      o.o(t, e) ||
        Object.defineProperty(t, e, {
          configurable: !1,
          enumerable: !0,
          get: a
        });
    }),
    (o.r = function(t) {
      Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (o.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t["default"];
            }
          : function() {
              return t;
            };
      return o.d(e, "a", e), e;
    }),
    (o.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (o.p = "/");
  var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = r.push.bind(r);
  (r.push = e), (r = r.slice());
  for (var c = 0; c < r.length; c++) e(r[c]);
  var u = l;
  i.push([9, 0]), a();
})({
  "2VX7": function(t, e, a) {
    "use strict";
    var s = a("hI8f"),
      n = a.n(s);
    n.a;
  },
  "6pu2": function(t, e, a) {},
  "7ca1": function(t, e, a) {
    "use strict";
    var s = a("RaBE"),
      n = a.n(s);
    n.a;
  },
  9: function(t, e, a) {
    t.exports = a("Vtdi");
  },
  FMPW: function(t, e, a) {},
  HeY3: function(t, e, a) {
    "use strict";
    var s = a("m9u4"),
      n = a.n(s);
    n.a;
  },
  Ijax: function(t, e, a) {
    "use strict";
    var s = a("Lv9D"),
      n = a.n(s);
    n.a;
  },
  Lv9D: function(t, e, a) {},
  NbPO: function(t, e, a) {},
  NjsF: function(t, e, a) {
    "use strict";
    var s = a("NbPO"),
      n = a.n(s);
    n.a;
  },
  Qv4F: function(t, e, a) {
    "use strict";
    var s = a("6pu2"),
      n = a.n(s);
    n.a;
  },
  RaBE: function(t, e, a) {},
  Vtdi: function(t, e, a) {
    "use strict";
    a.r(e);
    a("VRzm");
    var s = a("Kw5r"),
      n = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          [
            a("toolbar"),
            a("div", { staticClass: "Body" }, [
              a("div", { staticClass: "section" }, [
                a("div", { staticClass: "container" }, [a("router-view")], 1)
              ])
            ])
          ],
          1
        );
      },
      i = [],
      o = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "nav",
          {
            staticClass: "navbar",
            style: { top: t.navTop },
            attrs: { role: "navigation", "aria-label": "main navigation" }
          },
          [
            a("div", { staticClass: "nav-wrapper container" }, [
              a(
                "div",
                { staticClass: "navbar-brand" },
                [
                  a(
                    "router-link",
                    {
                      staticClass: "navbar-item",
                      attrs: { to: "/", tag: "a" }
                    },
                    [
                      a("img", {
                        attrs: {
                          src: "https://bulma.io/images/bulma-logo.png",
                          alt: "Bulma: a modern CSS framework based on Flexbox",
                          width: "112",
                          height: "28"
                        }
                      })
                    ]
                  ),
                  a(
                    "div",
                    {
                      staticClass: "navbar-burger",
                      class: { "is-active": t.showNav },
                      on: {
                        click: function(e) {
                          t.showNav = !t.showNav;
                        }
                      }
                    },
                    [a("span"), a("span"), a("span")]
                  )
                ],
                1
              ),
              a(
                "div",
                {
                  staticClass: "navbar-menu",
                  class: { "is-active": t.showNav }
                },
                [
                  a(
                    "div",
                    { staticClass: "navbar-end" },
                    [
                      a(
                        "router-link",
                        {
                          staticClass: "navbar-item has-text-centered",
                          attrs: { to: "/portfolio", tag: "a" },
                          nativeOn: {
                            click: function(e) {
                              return t.HideNav(e);
                            }
                          }
                        },
                        [t._v("\n          Portfolio\n        ")]
                      ),
                      a(
                        "router-link",
                        {
                          staticClass: "navbar-item has-text-centered aboutMe",
                          attrs: { to: "/about-me", tag: "a" },
                          nativeOn: {
                            click: function(e) {
                              return t.HideNav(e);
                            }
                          }
                        },
                        [t._v("\n          About Me\n        ")]
                      )
                    ],
                    1
                  )
                ]
              )
            ])
          ]
        );
      },
      r = [],
      l = a("LvDl"),
      c = a.n(l),
      u = {
        data: function() {
          return {
            showNav: !1,
            PreviousScrollPos: null,
            CurrentScrollPos: null,
            ScrolledDown: !1,
            navTop: 0
          };
        },
        mounted: function() {
          var t = this,
            e = window.matchMedia("(max-width: 985px)");
          e.addListener(this.HideNavBarOnMediaQuery),
            (this.PreviousScrollPos = window.pageYOffset),
            document.addEventListener("click", function(e) {
              e.target.closest(".navbar") || t.HideNav();
            });
        },
        created: function() {
          window.addEventListener("scroll", this.ToggleNavBar);
        },
        destroyed: function() {
          window.removeEventListener("scroll", this.ToggleNavBar);
        },
        methods: {
          HideNavBarOnMediaQuery: function(t) {
            t.matches && this.HideNav();
          },
          HideNav: function() {
            this.showNav = !1;
          },
          ToggleNavBar: c.a.debounce(function() {
            this.HideNav(),
              (this.CurrentScrollPos = window.pageYOffset),
              (this.navTop =
                this.PreviousScrollPos > this.CurrentScrollPos ? "0" : "-60px"),
              (this.PreviousScrollPos = this.CurrentScrollPos);
          }, 40)
        }
      },
      d = u,
      f = (a("HeY3"), a("KHd+")),
      h = Object(f["a"])(d, o, r, !1, null, "3162cd76", null),
      v = h.exports,
      p = { name: "App", components: { Toolbar: v } },
      m = p,
      g = (a("Qv4F"), Object(f["a"])(m, n, i, !1, null, null, null)),
      b = g.exports,
      C = a("jE9Z"),
      w = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "columns p-t-lg p-l-lg p-r-lg p-b-lg " },
          [t._m(0), a("div", { staticClass: "column" }, [a("google-map")], 1)]
        );
      },
      y = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "column LeftColumn" }, [
            a("div", [
              a("h1", { staticClass: "title AboutMeHeader" }, [
                t._v("Hey there!")
              ])
            ]),
            a("p", { staticClass: "AboutMeContent" }, [
              t._v(
                "\n      Portland ugh fashion axe Helvetica, YOLO Echo Park Austin gastropub roof party. Meggings cred before they sold out messenger bag, ugh fashion axe Pitchfork tousled freegan asymmetrical literally twee Thundercats. Whatever Blue Bottle Neutra irony 8-bit. Kogi ethnic ugh fashion axe bicycle rights. Gluten-free Odd Future American Apparel pour-over umami drinking vinegar Truffaut. Selvage sustainable plaid viral salvia readymade, lomo slow-carb before they sold out bitters leggings. 90's pickled actually biodiesel put a bird on it, butcher dreamcatcher Cosby sweater.\n    "
              )
            ]),
            a("div", { staticClass: "TheFooter has-text-centered" }, [
              a("a", [
                a("span", { staticClass: "icon is-large linkedin" }, [
                  a("i", {
                    staticClass: "fab fa-linkedin fa-lg",
                    attrs: { "aria-hidden": "true" }
                  })
                ])
              ]),
              a("a", [
                a("span", { staticClass: "icon is-large" }, [
                  a("i", {
                    staticClass: "fab fa-github fa-lg",
                    attrs: { "aria-hidden": "true" }
                  })
                ])
              ]),
              a("a", [
                a("span", { staticClass: "icon is-large" }, [
                  a("i", {
                    staticClass: "fas fa-envelope fa-lg",
                    attrs: { "aria-hidden": "true" }
                  })
                ])
              ])
            ])
          ]);
        }
      ],
      S = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "mapWrapper" },
          [
            a(
              "gmap-map",
              { staticClass: "map", attrs: { center: t.center, zoom: 12 } },
              t._l(t.markers, function(e, s) {
                return a("gmap-marker", {
                  key: s,
                  attrs: { position: e.position },
                  on: {
                    click: function(a) {
                      t.center = e.position;
                    }
                  }
                });
              })
            )
          ],
          1
        );
      },
      _ = [],
      P = {
        name: "GoogleMap",
        data: function() {
          return {
            center: { lat: 43.688, lng: -79.304 },
            markers: [{ lat: 43.688, lng: -79.304 }],
            places: [],
            currentPlace: null
          };
        },
        mounted: function() {
          this.addMarker();
        },
        methods: {
          setPlace: function(t) {
            this.currentPlace = t;
          },
          addMarker: function() {
            if (this.currentPlace) {
              var t = {
                lat: this.currentPlace.geometry.location.lat(),
                lng: this.currentPlace.geometry.location.lng()
              };
              this.markers.push({ position: t }),
                this.places.push(this.currentPlace),
                (this.center = t);
            }
          }
        }
      },
      j = P,
      k = (a("7ca1"), Object(f["a"])(j, S, _, !1, null, "59435b07", null)),
      O = k.exports,
      N = {
        name: "AboutMe",
        components: { GoogleMap: O },
        mounted: function() {
          this.ScrollTop();
        },
        methods: {
          ScrollTop: function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
          }
        }
      },
      x = N,
      L = (a("NjsF"), Object(f["a"])(x, w, y, !1, null, "3fb5f514", null)),
      M = L.exports,
      E = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a(
          "div",
          { staticClass: "columns PortfolioWrapper is-centered " },
          [
            t._m(0),
            a(
              "div",
              { staticClass: "column RightLayout" },
              t._l(t.workList, function(t) {
                return a("ProjectCard", { key: t.id, attrs: { project: t } });
              })
            )
          ]
        );
      },
      H = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "column LeftLayout is-one-fifth" }, [
            a(
              "a",
              { staticClass: "button SideButton Work", attrs: { href: "#" } },
              [t._v("\n      Work\n    ")]
            ),
            a(
              "a",
              {
                staticClass: "button SideButton PersonalProject",
                attrs: { href: "#" }
              },
              [t._v("\n      Personal Projects\n    ")]
            ),
            a(
              "a",
              {
                staticClass: "button SideButton OpenSource",
                attrs: { href: "#" }
              },
              [t._v("\n      Open Source\n    ")]
            )
          ]);
        }
      ],
      T = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { staticClass: "box" }, [
          a("article", { staticClass: "media" }, [
            a("div", { staticClass: "media-content" }, [
              a("div", { staticClass: "content" }, [
                a("div", { staticClass: "level is-mobile is-marginless" }, [
                  a("div", { staticClass: "level-left" }, [
                    a("h5", { staticClass: "title ProjectTitle level-item" }, [
                      t._v(t._s(t.project.name))
                    ])
                  ])
                ]),
                a("p", { staticClass: "ProjectDescription" }, [
                  t._v(
                    "\n          " +
                      t._s(t.project.description) +
                      "            \n        "
                  )
                ])
              ]),
              t._m(0)
            ])
          ])
        ]);
      },
      A = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "nav",
            { staticClass: "level NavLevel is-mobile is-marginless" },
            [
              a("div", { staticClass: "level-left IconWrapper" }, [
                a(
                  "a",
                  {
                    staticClass: "level-item",
                    attrs: { "aria-label": "reply" }
                  },
                  [
                    a("span", { staticClass: "icon is-medium" }, [
                      a("i", {
                        staticClass: "fab fa-angular fa-lg",
                        attrs: { "aria-hidden": "true" }
                      })
                    ])
                  ]
                ),
                a(
                  "a",
                  {
                    staticClass: "level-item",
                    attrs: { "aria-label": "retweet" }
                  },
                  [
                    a("span", { staticClass: "icon is-medium" }, [
                      a("i", {
                        staticClass: "fab fa-js fa-lg",
                        attrs: { "aria-hidden": "true" }
                      })
                    ])
                  ]
                ),
                a(
                  "a",
                  {
                    staticClass: "level-item",
                    attrs: { "aria-label": "like" }
                  },
                  [
                    a("span", { staticClass: "icon is-medium" }, [
                      a("i", {
                        staticClass: "fab fa-vuejs fa-lg",
                        attrs: { "aria-hidden": "true" }
                      })
                    ])
                  ]
                ),
                a(
                  "a",
                  {
                    staticClass: "level-item",
                    attrs: { "aria-label": "like" }
                  },
                  [
                    a("span", { staticClass: "icon is-medium" }, [
                      a("i", {
                        staticClass: "fab fa-node-js fa-lg",
                        attrs: { "aria-hidden": "true" }
                      })
                    ])
                  ]
                )
              ]),
              a("div", { staticClass: "level-right ButtonWrapper" }, [
                a("a", { staticClass: "button MoreInfoButton level-item" }, [
                  t._v("MORE INFO")
                ]),
                a("a", { staticClass: "DemoLink level-item" }, [
                  t._v("View Demo")
                ])
              ])
            ]
          );
        }
      ],
      B = {
        name: "ProjectTitle",
        props: {
          project: {
            type: Object,
            required: !0,
            default: function() {
              return {
                name: "default",
                date: "2018/6/12",
                description: "default desc"
              };
            }
          }
        }
      },
      W = B,
      F = (a("Ijax"), Object(f["a"])(W, T, A, !1, null, "75d01200", null)),
      D = F.exports,
      $ = [
        {
          id: 1,
          name: "MAPLE LEAF FOOD",
          date: "Jan 2016 - Oct 2017",
          technologies: ["Angular", "Vuejs", "JavaScript", "CSS3"],
          description:
            "Located two hours south of Sydney in the Southern Highlands of New South Wales Located two hours south of Sydney in the Southern Highlands of New South Wales "
        },
        {
          id: 2,
          name: "is",
          date: "Apr 2015 - May 2018",
          technologies: ["Angular", "Vuejs", "Bulma", "React"],
          description:
            "Located two hours south of Sydney in the Southern Highlands of New South Wales Located two hours south of Sydney in the Southern Highlands of New South Wales "
        },
        {
          id: 3,
          name: "too",
          date: "Aug 2009 - Jul 2050",
          technologies: ["Angular", "C++", "Bulma", "CSS3"],
          description:
            "Located two hours south of Sydney in the Southern Highlands of New South Wales Located two hours south of Sydney in the Southern Highlands of New South Wales "
        },
        {
          id: 4,
          name: "powerful",
          date: "Feb 2012 - Dec 2017",
          technologies: ["Angular", "Vuejs", "C#", "HTML"],
          description:
            "Located two hours south of Sydney in the Southern Highlands of New South Wales Located two hours south of Sydney in the Southern Highlands of New South Wales "
        }
      ],
      V = {
        name: "Portfolio",
        components: { ProjectCard: D },
        data: function() {
          return { workList: Object };
        },
        mounted: function() {
          (this.workList = $), this.ScrollTop();
        },
        methods: {
          ScrollTop: function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
          }
        }
      },
      I = V,
      R = (a("WQF7"), Object(f["a"])(I, E, H, !1, null, "793dfcb9", null)),
      z = R.exports,
      Q = function() {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", { staticClass: "modal" }, [
          a("div", { staticClass: "modal-background" }),
          a("div", { staticClass: "modal-card" }, [
            a("header", { staticClass: "modal-card-head" }, [
              a("p", { staticClass: "modal-card-title" }, [
                t._v(t._s(t.project.name))
              ]),
              a("button", {
                staticClass: "delete",
                attrs: { "aria-label": "close" }
              })
            ]),
            a("section", { staticClass: "modal-card-body" }),
            t._m(0)
          ])
        ]);
      },
      J = [
        function() {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("footer", { staticClass: "modal-card-foot" }, [
            a("button", { staticClass: "button is-success" }, [
              t._v("View Demo")
            ]),
            a("button", { staticClass: "button" }, [t._v("Cancel")])
          ]);
        }
      ],
      Y = {
        name: "DetailModal",
        props: {
          project: {
            type: Object,
            required: !0,
            default: function() {
              return {
                name: "default",
                date: "2018/6/12",
                description: "default desc"
              };
            }
          }
        }
      },
      K = Y,
      q = (a("2VX7"), Object(f["a"])(K, Q, J, !1, null, "74c95feb", null)),
      G = q.exports;
    s["a"].use(C["a"]);
    var Z = new C["a"]({
        linkExactActiveClass: "is-active",
        routes: [
          { path: "/", name: "DetailModal", component: G },
          { path: "/portfolio", name: "Portfolio", component: z },
          { path: "/about-me", name: "AboutMe", component: M }
        ]
      }),
      X = a("dV7z");
    (s["a"].config.productionTip = !1),
      s["a"].use(X, {
        load: {
          key: "AIzaSyDqihpHzlKCB7lcZRU7zjtRZB1mAhrSCwg",
          libraries: "places"
        }
      }),
      new s["a"]({
        router: Z,
        render: function(t) {
          return t(b);
        }
      }).$mount("#app");
  },
  WQF7: function(t, e, a) {
    "use strict";
    var s = a("FMPW"),
      n = a.n(s);
    n.a;
  },
  hI8f: function(t, e, a) {},
  m9u4: function(t, e, a) {}
});
//# sourceMappingURL=app.7c44627d.js.map
