import { PresetGeometryMap } from './preset-types';

export const presetGeometries: PresetGeometryMap = {
  "accentBorderCallout1": {
    "adjustments": {
      "adj1": 18750,
      "adj2": -8333,
      "adj3": 112500,
      "adj4": -38333
    },
    "guides": [
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "h",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "w",
          "adj2",
          "100000"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "adj3",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "adj4",
          "100000"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "accentBorderCallout2": {
    "adjustments": {
      "adj1": 18750,
      "adj2": -8333,
      "adj3": 18750,
      "adj4": -16667,
      "adj5": 112500,
      "adj6": -46667
    },
    "guides": [
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "h",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "w",
          "adj2",
          "100000"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "adj3",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "adj4",
          "100000"
        ]
      },
      {
        "name": "y3",
        "op": "*/",
        "args": [
          "h",
          "adj5",
          "100000"
        ]
      },
      {
        "name": "x3",
        "op": "*/",
        "args": [
          "w",
          "adj6",
          "100000"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y3"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "accentBorderCallout3": {
    "adjustments": {
      "adj1": 18750,
      "adj2": -8333,
      "adj3": 18750,
      "adj4": -16667,
      "adj5": 100000,
      "adj6": -16667,
      "adj7": 112963,
      "adj8": -8333
    },
    "guides": [
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "h",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "w",
          "adj2",
          "100000"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "adj3",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "adj4",
          "100000"
        ]
      },
      {
        "name": "y3",
        "op": "*/",
        "args": [
          "h",
          "adj5",
          "100000"
        ]
      },
      {
        "name": "x3",
        "op": "*/",
        "args": [
          "w",
          "adj6",
          "100000"
        ]
      },
      {
        "name": "y4",
        "op": "*/",
        "args": [
          "h",
          "adj7",
          "100000"
        ]
      },
      {
        "name": "x4",
        "op": "*/",
        "args": [
          "w",
          "adj8",
          "100000"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y4"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "accentCallout1": {
    "adjustments": {
      "adj1": 18750,
      "adj2": -8333,
      "adj3": 112500,
      "adj4": -38333
    },
    "guides": [
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "h",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "w",
          "adj2",
          "100000"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "adj3",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "adj4",
          "100000"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "accentCallout2": {
    "adjustments": {
      "adj1": 18750,
      "adj2": -8333,
      "adj3": 18750,
      "adj4": -16667,
      "adj5": 112500,
      "adj6": -46667
    },
    "guides": [
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "h",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "w",
          "adj2",
          "100000"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "adj3",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "adj4",
          "100000"
        ]
      },
      {
        "name": "y3",
        "op": "*/",
        "args": [
          "h",
          "adj5",
          "100000"
        ]
      },
      {
        "name": "x3",
        "op": "*/",
        "args": [
          "w",
          "adj6",
          "100000"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y3"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "accentCallout3": {
    "adjustments": {
      "adj1": 18750,
      "adj2": -8333,
      "adj3": 18750,
      "adj4": -16667,
      "adj5": 100000,
      "adj6": -16667,
      "adj7": 112963,
      "adj8": -8333
    },
    "guides": [
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "h",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "w",
          "adj2",
          "100000"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "adj3",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "adj4",
          "100000"
        ]
      },
      {
        "name": "y3",
        "op": "*/",
        "args": [
          "h",
          "adj5",
          "100000"
        ]
      },
      {
        "name": "x3",
        "op": "*/",
        "args": [
          "w",
          "adj6",
          "100000"
        ]
      },
      {
        "name": "y4",
        "op": "*/",
        "args": [
          "h",
          "adj7",
          "100000"
        ]
      },
      {
        "name": "x4",
        "op": "*/",
        "args": [
          "w",
          "adj8",
          "100000"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y4"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "actionButtonBackPrevious": {
    "adjustments": {},
    "guides": [
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "3",
          "8"
        ]
      },
      {
        "name": "g9",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "g10",
        "op": "+-",
        "args": [
          "vc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "g11",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "g12",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "g11",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g10"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darken",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "g11",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g10"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "g11",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g10"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "actionButtonBeginning": {
    "adjustments": {},
    "guides": [
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "3",
          "8"
        ]
      },
      {
        "name": "g9",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "g10",
        "op": "+-",
        "args": [
          "vc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "g11",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "g12",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "g13",
        "op": "*/",
        "args": [
          "ss",
          "3",
          "4"
        ]
      },
      {
        "name": "g14",
        "op": "*/",
        "args": [
          "g13",
          "1",
          "8"
        ]
      },
      {
        "name": "g15",
        "op": "*/",
        "args": [
          "g13",
          "1",
          "4"
        ]
      },
      {
        "name": "g16",
        "op": "+-",
        "args": [
          "g11",
          "g14",
          "0"
        ]
      },
      {
        "name": "g17",
        "op": "+-",
        "args": [
          "g11",
          "g15",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "g17",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g10"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "g16",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g16",
              "g10"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darken",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "g17",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g10"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "g16",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g16",
              "g10"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "g17",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g10"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "g16",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g16",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g9"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "actionButtonBlank": {
    "adjustments": {},
    "guides": [],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "actionButtonDocument": {
    "adjustments": {},
    "guides": [
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "3",
          "8"
        ]
      },
      {
        "name": "g9",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "g10",
        "op": "+-",
        "args": [
          "vc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "ss",
          "9",
          "32"
        ]
      },
      {
        "name": "g11",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "g12",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "g13",
        "op": "*/",
        "args": [
          "ss",
          "3",
          "16"
        ]
      },
      {
        "name": "g14",
        "op": "+-",
        "args": [
          "g12",
          "0",
          "g13"
        ]
      },
      {
        "name": "g15",
        "op": "+-",
        "args": [
          "g9",
          "g13",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "g11",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g14",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g15"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g10"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darkenLess",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "g11",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g14",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g14",
              "g15"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g15"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g10"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darken",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "g14",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g14",
              "g15"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g15"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "g11",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g14",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g15"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g10"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "g12",
              "g15"
            ]
          },
          {
            "type": "L",
            "data": [
              "g14",
              "g15"
            ]
          },
          {
            "type": "L",
            "data": [
              "g14",
              "g9"
            ]
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "actionButtonEnd": {
    "adjustments": {},
    "guides": [
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "3",
          "8"
        ]
      },
      {
        "name": "g9",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "g10",
        "op": "+-",
        "args": [
          "vc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "g11",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "g12",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "g13",
        "op": "*/",
        "args": [
          "ss",
          "3",
          "4"
        ]
      },
      {
        "name": "g14",
        "op": "*/",
        "args": [
          "g13",
          "3",
          "4"
        ]
      },
      {
        "name": "g15",
        "op": "*/",
        "args": [
          "g13",
          "7",
          "8"
        ]
      },
      {
        "name": "g16",
        "op": "+-",
        "args": [
          "g11",
          "g14",
          "0"
        ]
      },
      {
        "name": "g17",
        "op": "+-",
        "args": [
          "g11",
          "g15",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "g16",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g10"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "g17",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g17",
              "g10"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darken",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "g16",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g10"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "g17",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g17",
              "g10"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "g16",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g9"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "g17",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g17",
              "g10"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "actionButtonForwardNext": {
    "adjustments": {},
    "guides": [
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "3",
          "8"
        ]
      },
      {
        "name": "g9",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "g10",
        "op": "+-",
        "args": [
          "vc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "g11",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "g12",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "g12",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g10"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darken",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "g12",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g10"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "g12",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g9"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "actionButtonHelp": {
    "adjustments": {},
    "guides": [
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "3",
          "8"
        ]
      },
      {
        "name": "g9",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "g11",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "g13",
        "op": "*/",
        "args": [
          "ss",
          "3",
          "4"
        ]
      },
      {
        "name": "g14",
        "op": "*/",
        "args": [
          "g13",
          "1",
          "7"
        ]
      },
      {
        "name": "g15",
        "op": "*/",
        "args": [
          "g13",
          "3",
          "14"
        ]
      },
      {
        "name": "g16",
        "op": "*/",
        "args": [
          "g13",
          "2",
          "7"
        ]
      },
      {
        "name": "g19",
        "op": "*/",
        "args": [
          "g13",
          "3",
          "7"
        ]
      },
      {
        "name": "g20",
        "op": "*/",
        "args": [
          "g13",
          "4",
          "7"
        ]
      },
      {
        "name": "g21",
        "op": "*/",
        "args": [
          "g13",
          "17",
          "28"
        ]
      },
      {
        "name": "g23",
        "op": "*/",
        "args": [
          "g13",
          "21",
          "28"
        ]
      },
      {
        "name": "g24",
        "op": "*/",
        "args": [
          "g13",
          "11",
          "14"
        ]
      },
      {
        "name": "g27",
        "op": "+-",
        "args": [
          "g9",
          "g16",
          "0"
        ]
      },
      {
        "name": "g29",
        "op": "+-",
        "args": [
          "g9",
          "g21",
          "0"
        ]
      },
      {
        "name": "g30",
        "op": "+-",
        "args": [
          "g9",
          "g23",
          "0"
        ]
      },
      {
        "name": "g31",
        "op": "+-",
        "args": [
          "g9",
          "g24",
          "0"
        ]
      },
      {
        "name": "g33",
        "op": "+-",
        "args": [
          "g11",
          "g15",
          "0"
        ]
      },
      {
        "name": "g36",
        "op": "+-",
        "args": [
          "g11",
          "g19",
          "0"
        ]
      },
      {
        "name": "g37",
        "op": "+-",
        "args": [
          "g11",
          "g20",
          "0"
        ]
      },
      {
        "name": "g41",
        "op": "*/",
        "args": [
          "g13",
          "1",
          "14"
        ]
      },
      {
        "name": "g42",
        "op": "*/",
        "args": [
          "g13",
          "3",
          "28"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "g33",
              "g27"
            ]
          },
          {
            "type": "A",
            "data": [
              "g16",
              "g16",
              "cd2",
              "cd2"
            ]
          },
          {
            "type": "A",
            "data": [
              "g14",
              "g15",
              "0",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "g41",
              "g42",
              "3cd4",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "g37",
              "g30"
            ]
          },
          {
            "type": "L",
            "data": [
              "g36",
              "g30"
            ]
          },
          {
            "type": "L",
            "data": [
              "g36",
              "g29"
            ]
          },
          {
            "type": "A",
            "data": [
              "g14",
              "g15",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "g41",
              "g42",
              "cd4",
              "-5400000"
            ]
          },
          {
            "type": "A",
            "data": [
              "g14",
              "g14",
              "0",
              "-10800000"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "hc",
              "g31"
            ]
          },
          {
            "type": "A",
            "data": [
              "g42",
              "g42",
              "3cd4",
              "21600000"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darken",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "g33",
              "g27"
            ]
          },
          {
            "type": "A",
            "data": [
              "g16",
              "g16",
              "cd2",
              "cd2"
            ]
          },
          {
            "type": "A",
            "data": [
              "g14",
              "g15",
              "0",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "g41",
              "g42",
              "3cd4",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "g37",
              "g30"
            ]
          },
          {
            "type": "L",
            "data": [
              "g36",
              "g30"
            ]
          },
          {
            "type": "L",
            "data": [
              "g36",
              "g29"
            ]
          },
          {
            "type": "A",
            "data": [
              "g14",
              "g15",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "g41",
              "g42",
              "cd4",
              "-5400000"
            ]
          },
          {
            "type": "A",
            "data": [
              "g14",
              "g14",
              "0",
              "-10800000"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "hc",
              "g31"
            ]
          },
          {
            "type": "A",
            "data": [
              "g42",
              "g42",
              "3cd4",
              "21600000"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "g33",
              "g27"
            ]
          },
          {
            "type": "A",
            "data": [
              "g16",
              "g16",
              "cd2",
              "cd2"
            ]
          },
          {
            "type": "A",
            "data": [
              "g14",
              "g15",
              "0",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "g41",
              "g42",
              "3cd4",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "g37",
              "g30"
            ]
          },
          {
            "type": "L",
            "data": [
              "g36",
              "g30"
            ]
          },
          {
            "type": "L",
            "data": [
              "g36",
              "g29"
            ]
          },
          {
            "type": "A",
            "data": [
              "g14",
              "g15",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "g41",
              "g42",
              "cd4",
              "-5400000"
            ]
          },
          {
            "type": "A",
            "data": [
              "g14",
              "g14",
              "0",
              "-10800000"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "hc",
              "g31"
            ]
          },
          {
            "type": "A",
            "data": [
              "g42",
              "g42",
              "3cd4",
              "21600000"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "actionButtonHome": {
    "adjustments": {},
    "guides": [
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "3",
          "8"
        ]
      },
      {
        "name": "g9",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "g10",
        "op": "+-",
        "args": [
          "vc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "g11",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "g12",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "g13",
        "op": "*/",
        "args": [
          "ss",
          "3",
          "4"
        ]
      },
      {
        "name": "g14",
        "op": "*/",
        "args": [
          "g13",
          "1",
          "16"
        ]
      },
      {
        "name": "g15",
        "op": "*/",
        "args": [
          "g13",
          "1",
          "8"
        ]
      },
      {
        "name": "g16",
        "op": "*/",
        "args": [
          "g13",
          "3",
          "16"
        ]
      },
      {
        "name": "g17",
        "op": "*/",
        "args": [
          "g13",
          "5",
          "16"
        ]
      },
      {
        "name": "g18",
        "op": "*/",
        "args": [
          "g13",
          "7",
          "16"
        ]
      },
      {
        "name": "g19",
        "op": "*/",
        "args": [
          "g13",
          "9",
          "16"
        ]
      },
      {
        "name": "g20",
        "op": "*/",
        "args": [
          "g13",
          "11",
          "16"
        ]
      },
      {
        "name": "g21",
        "op": "*/",
        "args": [
          "g13",
          "3",
          "4"
        ]
      },
      {
        "name": "g22",
        "op": "*/",
        "args": [
          "g13",
          "13",
          "16"
        ]
      },
      {
        "name": "g23",
        "op": "*/",
        "args": [
          "g13",
          "7",
          "8"
        ]
      },
      {
        "name": "g24",
        "op": "+-",
        "args": [
          "g9",
          "g14",
          "0"
        ]
      },
      {
        "name": "g25",
        "op": "+-",
        "args": [
          "g9",
          "g16",
          "0"
        ]
      },
      {
        "name": "g26",
        "op": "+-",
        "args": [
          "g9",
          "g17",
          "0"
        ]
      },
      {
        "name": "g27",
        "op": "+-",
        "args": [
          "g9",
          "g21",
          "0"
        ]
      },
      {
        "name": "g28",
        "op": "+-",
        "args": [
          "g11",
          "g15",
          "0"
        ]
      },
      {
        "name": "g29",
        "op": "+-",
        "args": [
          "g11",
          "g18",
          "0"
        ]
      },
      {
        "name": "g30",
        "op": "+-",
        "args": [
          "g11",
          "g19",
          "0"
        ]
      },
      {
        "name": "g31",
        "op": "+-",
        "args": [
          "g11",
          "g20",
          "0"
        ]
      },
      {
        "name": "g32",
        "op": "+-",
        "args": [
          "g11",
          "g22",
          "0"
        ]
      },
      {
        "name": "g33",
        "op": "+-",
        "args": [
          "g11",
          "g23",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "hc",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g28",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g28",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g33",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g33",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g32",
              "g26"
            ]
          },
          {
            "type": "L",
            "data": [
              "g32",
              "g24"
            ]
          },
          {
            "type": "L",
            "data": [
              "g31",
              "g24"
            ]
          },
          {
            "type": "L",
            "data": [
              "g31",
              "g25"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darkenLess",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "g32",
              "g26"
            ]
          },
          {
            "type": "L",
            "data": [
              "g32",
              "g24"
            ]
          },
          {
            "type": "L",
            "data": [
              "g31",
              "g24"
            ]
          },
          {
            "type": "L",
            "data": [
              "g31",
              "g25"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "g28",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g28",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g29",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g29",
              "g27"
            ]
          },
          {
            "type": "L",
            "data": [
              "g30",
              "g27"
            ]
          },
          {
            "type": "L",
            "data": [
              "g30",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g33",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g33",
              "vc"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darken",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "hc",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "vc"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "g29",
              "g27"
            ]
          },
          {
            "type": "L",
            "data": [
              "g30",
              "g27"
            ]
          },
          {
            "type": "L",
            "data": [
              "g30",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g29",
              "g10"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "hc",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g31",
              "g25"
            ]
          },
          {
            "type": "L",
            "data": [
              "g31",
              "g24"
            ]
          },
          {
            "type": "L",
            "data": [
              "g32",
              "g24"
            ]
          },
          {
            "type": "L",
            "data": [
              "g32",
              "g26"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g33",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g33",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g28",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g28",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "vc"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "g31",
              "g25"
            ]
          },
          {
            "type": "L",
            "data": [
              "g32",
              "g26"
            ]
          },
          {
            "type": "M",
            "data": [
              "g33",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g28",
              "vc"
            ]
          },
          {
            "type": "M",
            "data": [
              "g29",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g29",
              "g27"
            ]
          },
          {
            "type": "L",
            "data": [
              "g30",
              "g27"
            ]
          },
          {
            "type": "L",
            "data": [
              "g30",
              "g10"
            ]
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "actionButtonInformation": {
    "adjustments": {},
    "guides": [
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "3",
          "8"
        ]
      },
      {
        "name": "g9",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "g11",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "g13",
        "op": "*/",
        "args": [
          "ss",
          "3",
          "4"
        ]
      },
      {
        "name": "g14",
        "op": "*/",
        "args": [
          "g13",
          "1",
          "32"
        ]
      },
      {
        "name": "g17",
        "op": "*/",
        "args": [
          "g13",
          "5",
          "16"
        ]
      },
      {
        "name": "g18",
        "op": "*/",
        "args": [
          "g13",
          "3",
          "8"
        ]
      },
      {
        "name": "g19",
        "op": "*/",
        "args": [
          "g13",
          "13",
          "32"
        ]
      },
      {
        "name": "g20",
        "op": "*/",
        "args": [
          "g13",
          "19",
          "32"
        ]
      },
      {
        "name": "g22",
        "op": "*/",
        "args": [
          "g13",
          "11",
          "16"
        ]
      },
      {
        "name": "g23",
        "op": "*/",
        "args": [
          "g13",
          "13",
          "16"
        ]
      },
      {
        "name": "g24",
        "op": "*/",
        "args": [
          "g13",
          "7",
          "8"
        ]
      },
      {
        "name": "g25",
        "op": "+-",
        "args": [
          "g9",
          "g14",
          "0"
        ]
      },
      {
        "name": "g28",
        "op": "+-",
        "args": [
          "g9",
          "g17",
          "0"
        ]
      },
      {
        "name": "g29",
        "op": "+-",
        "args": [
          "g9",
          "g18",
          "0"
        ]
      },
      {
        "name": "g30",
        "op": "+-",
        "args": [
          "g9",
          "g23",
          "0"
        ]
      },
      {
        "name": "g31",
        "op": "+-",
        "args": [
          "g9",
          "g24",
          "0"
        ]
      },
      {
        "name": "g32",
        "op": "+-",
        "args": [
          "g11",
          "g17",
          "0"
        ]
      },
      {
        "name": "g34",
        "op": "+-",
        "args": [
          "g11",
          "g19",
          "0"
        ]
      },
      {
        "name": "g35",
        "op": "+-",
        "args": [
          "g11",
          "g20",
          "0"
        ]
      },
      {
        "name": "g37",
        "op": "+-",
        "args": [
          "g11",
          "g22",
          "0"
        ]
      },
      {
        "name": "g38",
        "op": "*/",
        "args": [
          "g13",
          "3",
          "32"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "hc",
              "g9"
            ]
          },
          {
            "type": "A",
            "data": [
              "dx2",
              "dx2",
              "3cd4",
              "21600000"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darken",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "hc",
              "g9"
            ]
          },
          {
            "type": "A",
            "data": [
              "dx2",
              "dx2",
              "3cd4",
              "21600000"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "hc",
              "g25"
            ]
          },
          {
            "type": "A",
            "data": [
              "g38",
              "g38",
              "3cd4",
              "21600000"
            ]
          },
          {
            "type": "M",
            "data": [
              "g32",
              "g28"
            ]
          },
          {
            "type": "L",
            "data": [
              "g32",
              "g29"
            ]
          },
          {
            "type": "L",
            "data": [
              "g34",
              "g29"
            ]
          },
          {
            "type": "L",
            "data": [
              "g34",
              "g30"
            ]
          },
          {
            "type": "L",
            "data": [
              "g32",
              "g30"
            ]
          },
          {
            "type": "L",
            "data": [
              "g32",
              "g31"
            ]
          },
          {
            "type": "L",
            "data": [
              "g37",
              "g31"
            ]
          },
          {
            "type": "L",
            "data": [
              "g37",
              "g30"
            ]
          },
          {
            "type": "L",
            "data": [
              "g35",
              "g30"
            ]
          },
          {
            "type": "L",
            "data": [
              "g35",
              "g28"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "lighten",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "hc",
              "g25"
            ]
          },
          {
            "type": "A",
            "data": [
              "g38",
              "g38",
              "3cd4",
              "21600000"
            ]
          },
          {
            "type": "M",
            "data": [
              "g32",
              "g28"
            ]
          },
          {
            "type": "L",
            "data": [
              "g35",
              "g28"
            ]
          },
          {
            "type": "L",
            "data": [
              "g35",
              "g30"
            ]
          },
          {
            "type": "L",
            "data": [
              "g37",
              "g30"
            ]
          },
          {
            "type": "L",
            "data": [
              "g37",
              "g31"
            ]
          },
          {
            "type": "L",
            "data": [
              "g32",
              "g31"
            ]
          },
          {
            "type": "L",
            "data": [
              "g32",
              "g30"
            ]
          },
          {
            "type": "L",
            "data": [
              "g34",
              "g30"
            ]
          },
          {
            "type": "L",
            "data": [
              "g34",
              "g29"
            ]
          },
          {
            "type": "L",
            "data": [
              "g32",
              "g29"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "hc",
              "g9"
            ]
          },
          {
            "type": "A",
            "data": [
              "dx2",
              "dx2",
              "3cd4",
              "21600000"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "hc",
              "g25"
            ]
          },
          {
            "type": "A",
            "data": [
              "g38",
              "g38",
              "3cd4",
              "21600000"
            ]
          },
          {
            "type": "M",
            "data": [
              "g32",
              "g28"
            ]
          },
          {
            "type": "L",
            "data": [
              "g35",
              "g28"
            ]
          },
          {
            "type": "L",
            "data": [
              "g35",
              "g30"
            ]
          },
          {
            "type": "L",
            "data": [
              "g37",
              "g30"
            ]
          },
          {
            "type": "L",
            "data": [
              "g37",
              "g31"
            ]
          },
          {
            "type": "L",
            "data": [
              "g32",
              "g31"
            ]
          },
          {
            "type": "L",
            "data": [
              "g32",
              "g30"
            ]
          },
          {
            "type": "L",
            "data": [
              "g34",
              "g30"
            ]
          },
          {
            "type": "L",
            "data": [
              "g34",
              "g29"
            ]
          },
          {
            "type": "L",
            "data": [
              "g32",
              "g29"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "actionButtonMovie": {
    "adjustments": {},
    "guides": [
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "3",
          "8"
        ]
      },
      {
        "name": "g9",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "g10",
        "op": "+-",
        "args": [
          "vc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "g11",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "g12",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "g13",
        "op": "*/",
        "args": [
          "ss",
          "3",
          "4"
        ]
      },
      {
        "name": "g14",
        "op": "*/",
        "args": [
          "g13",
          "1455",
          "21600"
        ]
      },
      {
        "name": "g15",
        "op": "*/",
        "args": [
          "g13",
          "1905",
          "21600"
        ]
      },
      {
        "name": "g16",
        "op": "*/",
        "args": [
          "g13",
          "2325",
          "21600"
        ]
      },
      {
        "name": "g17",
        "op": "*/",
        "args": [
          "g13",
          "16155",
          "21600"
        ]
      },
      {
        "name": "g18",
        "op": "*/",
        "args": [
          "g13",
          "17010",
          "21600"
        ]
      },
      {
        "name": "g19",
        "op": "*/",
        "args": [
          "g13",
          "19335",
          "21600"
        ]
      },
      {
        "name": "g20",
        "op": "*/",
        "args": [
          "g13",
          "19725",
          "21600"
        ]
      },
      {
        "name": "g21",
        "op": "*/",
        "args": [
          "g13",
          "20595",
          "21600"
        ]
      },
      {
        "name": "g22",
        "op": "*/",
        "args": [
          "g13",
          "5280",
          "21600"
        ]
      },
      {
        "name": "g23",
        "op": "*/",
        "args": [
          "g13",
          "5730",
          "21600"
        ]
      },
      {
        "name": "g24",
        "op": "*/",
        "args": [
          "g13",
          "6630",
          "21600"
        ]
      },
      {
        "name": "g25",
        "op": "*/",
        "args": [
          "g13",
          "7492",
          "21600"
        ]
      },
      {
        "name": "g26",
        "op": "*/",
        "args": [
          "g13",
          "9067",
          "21600"
        ]
      },
      {
        "name": "g27",
        "op": "*/",
        "args": [
          "g13",
          "9555",
          "21600"
        ]
      },
      {
        "name": "g28",
        "op": "*/",
        "args": [
          "g13",
          "13342",
          "21600"
        ]
      },
      {
        "name": "g29",
        "op": "*/",
        "args": [
          "g13",
          "14580",
          "21600"
        ]
      },
      {
        "name": "g30",
        "op": "*/",
        "args": [
          "g13",
          "15592",
          "21600"
        ]
      },
      {
        "name": "g31",
        "op": "+-",
        "args": [
          "g11",
          "g14",
          "0"
        ]
      },
      {
        "name": "g32",
        "op": "+-",
        "args": [
          "g11",
          "g15",
          "0"
        ]
      },
      {
        "name": "g33",
        "op": "+-",
        "args": [
          "g11",
          "g16",
          "0"
        ]
      },
      {
        "name": "g34",
        "op": "+-",
        "args": [
          "g11",
          "g17",
          "0"
        ]
      },
      {
        "name": "g35",
        "op": "+-",
        "args": [
          "g11",
          "g18",
          "0"
        ]
      },
      {
        "name": "g36",
        "op": "+-",
        "args": [
          "g11",
          "g19",
          "0"
        ]
      },
      {
        "name": "g37",
        "op": "+-",
        "args": [
          "g11",
          "g20",
          "0"
        ]
      },
      {
        "name": "g38",
        "op": "+-",
        "args": [
          "g11",
          "g21",
          "0"
        ]
      },
      {
        "name": "g39",
        "op": "+-",
        "args": [
          "g9",
          "g22",
          "0"
        ]
      },
      {
        "name": "g40",
        "op": "+-",
        "args": [
          "g9",
          "g23",
          "0"
        ]
      },
      {
        "name": "g41",
        "op": "+-",
        "args": [
          "g9",
          "g24",
          "0"
        ]
      },
      {
        "name": "g42",
        "op": "+-",
        "args": [
          "g9",
          "g25",
          "0"
        ]
      },
      {
        "name": "g43",
        "op": "+-",
        "args": [
          "g9",
          "g26",
          "0"
        ]
      },
      {
        "name": "g44",
        "op": "+-",
        "args": [
          "g9",
          "g27",
          "0"
        ]
      },
      {
        "name": "g45",
        "op": "+-",
        "args": [
          "g9",
          "g28",
          "0"
        ]
      },
      {
        "name": "g46",
        "op": "+-",
        "args": [
          "g9",
          "g29",
          "0"
        ]
      },
      {
        "name": "g47",
        "op": "+-",
        "args": [
          "g9",
          "g30",
          "0"
        ]
      },
      {
        "name": "g48",
        "op": "+-",
        "args": [
          "g9",
          "g31",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "g11",
              "g39"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g44"
            ]
          },
          {
            "type": "L",
            "data": [
              "g31",
              "g44"
            ]
          },
          {
            "type": "L",
            "data": [
              "g32",
              "g43"
            ]
          },
          {
            "type": "L",
            "data": [
              "g33",
              "g43"
            ]
          },
          {
            "type": "L",
            "data": [
              "g33",
              "g47"
            ]
          },
          {
            "type": "L",
            "data": [
              "g35",
              "g47"
            ]
          },
          {
            "type": "L",
            "data": [
              "g35",
              "g45"
            ]
          },
          {
            "type": "L",
            "data": [
              "g36",
              "g45"
            ]
          },
          {
            "type": "L",
            "data": [
              "g38",
              "g46"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g46"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g41"
            ]
          },
          {
            "type": "L",
            "data": [
              "g38",
              "g41"
            ]
          },
          {
            "type": "L",
            "data": [
              "g37",
              "g42"
            ]
          },
          {
            "type": "L",
            "data": [
              "g35",
              "g42"
            ]
          },
          {
            "type": "L",
            "data": [
              "g35",
              "g41"
            ]
          },
          {
            "type": "L",
            "data": [
              "g34",
              "g40"
            ]
          },
          {
            "type": "L",
            "data": [
              "g32",
              "g40"
            ]
          },
          {
            "type": "L",
            "data": [
              "g31",
              "g39"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darken",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "g11",
              "g39"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g44"
            ]
          },
          {
            "type": "L",
            "data": [
              "g31",
              "g44"
            ]
          },
          {
            "type": "L",
            "data": [
              "g32",
              "g43"
            ]
          },
          {
            "type": "L",
            "data": [
              "g33",
              "g43"
            ]
          },
          {
            "type": "L",
            "data": [
              "g33",
              "g47"
            ]
          },
          {
            "type": "L",
            "data": [
              "g35",
              "g47"
            ]
          },
          {
            "type": "L",
            "data": [
              "g35",
              "g45"
            ]
          },
          {
            "type": "L",
            "data": [
              "g36",
              "g45"
            ]
          },
          {
            "type": "L",
            "data": [
              "g38",
              "g46"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g46"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g41"
            ]
          },
          {
            "type": "L",
            "data": [
              "g38",
              "g41"
            ]
          },
          {
            "type": "L",
            "data": [
              "g37",
              "g42"
            ]
          },
          {
            "type": "L",
            "data": [
              "g35",
              "g42"
            ]
          },
          {
            "type": "L",
            "data": [
              "g35",
              "g41"
            ]
          },
          {
            "type": "L",
            "data": [
              "g34",
              "g40"
            ]
          },
          {
            "type": "L",
            "data": [
              "g32",
              "g40"
            ]
          },
          {
            "type": "L",
            "data": [
              "g31",
              "g39"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "g11",
              "g39"
            ]
          },
          {
            "type": "L",
            "data": [
              "g31",
              "g39"
            ]
          },
          {
            "type": "L",
            "data": [
              "g32",
              "g40"
            ]
          },
          {
            "type": "L",
            "data": [
              "g34",
              "g40"
            ]
          },
          {
            "type": "L",
            "data": [
              "g35",
              "g41"
            ]
          },
          {
            "type": "L",
            "data": [
              "g35",
              "g42"
            ]
          },
          {
            "type": "L",
            "data": [
              "g37",
              "g42"
            ]
          },
          {
            "type": "L",
            "data": [
              "g38",
              "g41"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g41"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g46"
            ]
          },
          {
            "type": "L",
            "data": [
              "g38",
              "g46"
            ]
          },
          {
            "type": "L",
            "data": [
              "g36",
              "g45"
            ]
          },
          {
            "type": "L",
            "data": [
              "g35",
              "g45"
            ]
          },
          {
            "type": "L",
            "data": [
              "g35",
              "g47"
            ]
          },
          {
            "type": "L",
            "data": [
              "g33",
              "g47"
            ]
          },
          {
            "type": "L",
            "data": [
              "g33",
              "g43"
            ]
          },
          {
            "type": "L",
            "data": [
              "g32",
              "g43"
            ]
          },
          {
            "type": "L",
            "data": [
              "g31",
              "g44"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g44"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "actionButtonReturn": {
    "adjustments": {},
    "guides": [
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "3",
          "8"
        ]
      },
      {
        "name": "g9",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "g10",
        "op": "+-",
        "args": [
          "vc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "g11",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "g12",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "g13",
        "op": "*/",
        "args": [
          "ss",
          "3",
          "4"
        ]
      },
      {
        "name": "g14",
        "op": "*/",
        "args": [
          "g13",
          "7",
          "8"
        ]
      },
      {
        "name": "g15",
        "op": "*/",
        "args": [
          "g13",
          "3",
          "4"
        ]
      },
      {
        "name": "g16",
        "op": "*/",
        "args": [
          "g13",
          "5",
          "8"
        ]
      },
      {
        "name": "g17",
        "op": "*/",
        "args": [
          "g13",
          "3",
          "8"
        ]
      },
      {
        "name": "g18",
        "op": "*/",
        "args": [
          "g13",
          "1",
          "4"
        ]
      },
      {
        "name": "g19",
        "op": "+-",
        "args": [
          "g9",
          "g15",
          "0"
        ]
      },
      {
        "name": "g20",
        "op": "+-",
        "args": [
          "g9",
          "g16",
          "0"
        ]
      },
      {
        "name": "g21",
        "op": "+-",
        "args": [
          "g9",
          "g18",
          "0"
        ]
      },
      {
        "name": "g22",
        "op": "+-",
        "args": [
          "g11",
          "g14",
          "0"
        ]
      },
      {
        "name": "g23",
        "op": "+-",
        "args": [
          "g11",
          "g15",
          "0"
        ]
      },
      {
        "name": "g24",
        "op": "+-",
        "args": [
          "g11",
          "g16",
          "0"
        ]
      },
      {
        "name": "g25",
        "op": "+-",
        "args": [
          "g11",
          "g17",
          "0"
        ]
      },
      {
        "name": "g26",
        "op": "+-",
        "args": [
          "g11",
          "g18",
          "0"
        ]
      },
      {
        "name": "g27",
        "op": "*/",
        "args": [
          "g13",
          "1",
          "8"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "g12",
              "g21"
            ]
          },
          {
            "type": "L",
            "data": [
              "g23",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "g21"
            ]
          },
          {
            "type": "L",
            "data": [
              "g24",
              "g21"
            ]
          },
          {
            "type": "L",
            "data": [
              "g24",
              "g20"
            ]
          },
          {
            "type": "A",
            "data": [
              "g27",
              "g27",
              "0",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "g25",
              "g19"
            ]
          },
          {
            "type": "A",
            "data": [
              "g27",
              "g27",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "g26",
              "g21"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g21"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g20"
            ]
          },
          {
            "type": "A",
            "data": [
              "g17",
              "g17",
              "cd2",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "g10"
            ]
          },
          {
            "type": "A",
            "data": [
              "g17",
              "g17",
              "cd4",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "g22",
              "g21"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darken",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "g12",
              "g21"
            ]
          },
          {
            "type": "L",
            "data": [
              "g23",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "g21"
            ]
          },
          {
            "type": "L",
            "data": [
              "g24",
              "g21"
            ]
          },
          {
            "type": "L",
            "data": [
              "g24",
              "g20"
            ]
          },
          {
            "type": "A",
            "data": [
              "g27",
              "g27",
              "0",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "g25",
              "g19"
            ]
          },
          {
            "type": "A",
            "data": [
              "g27",
              "g27",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "g26",
              "g21"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g21"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g20"
            ]
          },
          {
            "type": "A",
            "data": [
              "g17",
              "g17",
              "cd2",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "g10"
            ]
          },
          {
            "type": "A",
            "data": [
              "g17",
              "g17",
              "cd4",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "g22",
              "g21"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "g12",
              "g21"
            ]
          },
          {
            "type": "L",
            "data": [
              "g22",
              "g21"
            ]
          },
          {
            "type": "L",
            "data": [
              "g22",
              "g20"
            ]
          },
          {
            "type": "A",
            "data": [
              "g17",
              "g17",
              "0",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "g25",
              "g10"
            ]
          },
          {
            "type": "A",
            "data": [
              "g17",
              "g17",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g21"
            ]
          },
          {
            "type": "L",
            "data": [
              "g26",
              "g21"
            ]
          },
          {
            "type": "L",
            "data": [
              "g26",
              "g20"
            ]
          },
          {
            "type": "A",
            "data": [
              "g27",
              "g27",
              "cd2",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "g19"
            ]
          },
          {
            "type": "A",
            "data": [
              "g27",
              "g27",
              "cd4",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "g24",
              "g21"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "g21"
            ]
          },
          {
            "type": "L",
            "data": [
              "g23",
              "g9"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "actionButtonSound": {
    "adjustments": {},
    "guides": [
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "3",
          "8"
        ]
      },
      {
        "name": "g9",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "g10",
        "op": "+-",
        "args": [
          "vc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "g11",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "g12",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "g13",
        "op": "*/",
        "args": [
          "ss",
          "3",
          "4"
        ]
      },
      {
        "name": "g14",
        "op": "*/",
        "args": [
          "g13",
          "1",
          "8"
        ]
      },
      {
        "name": "g15",
        "op": "*/",
        "args": [
          "g13",
          "5",
          "16"
        ]
      },
      {
        "name": "g16",
        "op": "*/",
        "args": [
          "g13",
          "5",
          "8"
        ]
      },
      {
        "name": "g17",
        "op": "*/",
        "args": [
          "g13",
          "11",
          "16"
        ]
      },
      {
        "name": "g18",
        "op": "*/",
        "args": [
          "g13",
          "3",
          "4"
        ]
      },
      {
        "name": "g19",
        "op": "*/",
        "args": [
          "g13",
          "7",
          "8"
        ]
      },
      {
        "name": "g20",
        "op": "+-",
        "args": [
          "g9",
          "g14",
          "0"
        ]
      },
      {
        "name": "g21",
        "op": "+-",
        "args": [
          "g9",
          "g15",
          "0"
        ]
      },
      {
        "name": "g22",
        "op": "+-",
        "args": [
          "g9",
          "g17",
          "0"
        ]
      },
      {
        "name": "g23",
        "op": "+-",
        "args": [
          "g9",
          "g19",
          "0"
        ]
      },
      {
        "name": "g24",
        "op": "+-",
        "args": [
          "g11",
          "g15",
          "0"
        ]
      },
      {
        "name": "g25",
        "op": "+-",
        "args": [
          "g11",
          "g16",
          "0"
        ]
      },
      {
        "name": "g26",
        "op": "+-",
        "args": [
          "g11",
          "g18",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "g11",
              "g21"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g22"
            ]
          },
          {
            "type": "L",
            "data": [
              "g24",
              "g22"
            ]
          },
          {
            "type": "L",
            "data": [
              "g25",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g25",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g24",
              "g21"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darken",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "g11",
              "g21"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g22"
            ]
          },
          {
            "type": "L",
            "data": [
              "g24",
              "g22"
            ]
          },
          {
            "type": "L",
            "data": [
              "g25",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g25",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g24",
              "g21"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "g11",
              "g21"
            ]
          },
          {
            "type": "L",
            "data": [
              "g24",
              "g21"
            ]
          },
          {
            "type": "L",
            "data": [
              "g25",
              "g9"
            ]
          },
          {
            "type": "L",
            "data": [
              "g25",
              "g10"
            ]
          },
          {
            "type": "L",
            "data": [
              "g24",
              "g22"
            ]
          },
          {
            "type": "L",
            "data": [
              "g11",
              "g22"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "g26",
              "g21"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g20"
            ]
          },
          {
            "type": "M",
            "data": [
              "g26",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "vc"
            ]
          },
          {
            "type": "M",
            "data": [
              "g26",
              "g22"
            ]
          },
          {
            "type": "L",
            "data": [
              "g12",
              "g23"
            ]
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "arc": {
    "adjustments": {
      "adj1": 16200000,
      "adj2": 0
    },
    "guides": [
      {
        "name": "stAng",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "21599999"
        ]
      },
      {
        "name": "enAng",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "21599999"
        ]
      },
      {
        "name": "sw11",
        "op": "+-",
        "args": [
          "enAng",
          "0",
          "stAng"
        ]
      },
      {
        "name": "sw12",
        "op": "+-",
        "args": [
          "sw11",
          "21600000",
          "0"
        ]
      },
      {
        "name": "swAng",
        "op": "?:",
        "args": [
          "sw11",
          "sw11",
          "sw12"
        ]
      },
      {
        "name": "wt1",
        "op": "sin",
        "args": [
          "wd2",
          "stAng"
        ]
      },
      {
        "name": "ht1",
        "op": "cos",
        "args": [
          "hd2",
          "stAng"
        ]
      },
      {
        "name": "dx1",
        "op": "cat2",
        "args": [
          "wd2",
          "ht1",
          "wt1"
        ]
      },
      {
        "name": "dy1",
        "op": "sat2",
        "args": [
          "hd2",
          "ht1",
          "wt1"
        ]
      },
      {
        "name": "wt2",
        "op": "sin",
        "args": [
          "wd2",
          "enAng"
        ]
      },
      {
        "name": "ht2",
        "op": "cos",
        "args": [
          "hd2",
          "enAng"
        ]
      },
      {
        "name": "dx2",
        "op": "cat2",
        "args": [
          "wd2",
          "ht2",
          "wt2"
        ]
      },
      {
        "name": "dy2",
        "op": "sat2",
        "args": [
          "hd2",
          "ht2",
          "wt2"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "dy2",
          "0"
        ]
      },
      {
        "name": "sw0",
        "op": "+-",
        "args": [
          "21600000",
          "0",
          "stAng"
        ]
      },
      {
        "name": "da1",
        "op": "+-",
        "args": [
          "swAng",
          "0",
          "sw0"
        ]
      },
      {
        "name": "g1",
        "op": "max",
        "args": [
          "x1",
          "x2"
        ]
      },
      {
        "name": "ir",
        "op": "?:",
        "args": [
          "da1",
          "r",
          "g1"
        ]
      },
      {
        "name": "sw1",
        "op": "+-",
        "args": [
          "cd4",
          "0",
          "stAng"
        ]
      },
      {
        "name": "sw2",
        "op": "+-",
        "args": [
          "27000000",
          "0",
          "stAng"
        ]
      },
      {
        "name": "sw3",
        "op": "?:",
        "args": [
          "sw1",
          "sw1",
          "sw2"
        ]
      },
      {
        "name": "da2",
        "op": "+-",
        "args": [
          "swAng",
          "0",
          "sw3"
        ]
      },
      {
        "name": "g5",
        "op": "max",
        "args": [
          "y1",
          "y2"
        ]
      },
      {
        "name": "ib",
        "op": "?:",
        "args": [
          "da2",
          "b",
          "g5"
        ]
      },
      {
        "name": "sw4",
        "op": "+-",
        "args": [
          "cd2",
          "0",
          "stAng"
        ]
      },
      {
        "name": "sw5",
        "op": "+-",
        "args": [
          "32400000",
          "0",
          "stAng"
        ]
      },
      {
        "name": "sw6",
        "op": "?:",
        "args": [
          "sw4",
          "sw4",
          "sw5"
        ]
      },
      {
        "name": "da3",
        "op": "+-",
        "args": [
          "swAng",
          "0",
          "sw6"
        ]
      },
      {
        "name": "g9",
        "op": "min",
        "args": [
          "x1",
          "x2"
        ]
      },
      {
        "name": "il",
        "op": "?:",
        "args": [
          "da3",
          "l",
          "g9"
        ]
      },
      {
        "name": "sw7",
        "op": "+-",
        "args": [
          "3cd4",
          "0",
          "stAng"
        ]
      },
      {
        "name": "sw8",
        "op": "+-",
        "args": [
          "37800000",
          "0",
          "stAng"
        ]
      },
      {
        "name": "sw9",
        "op": "?:",
        "args": [
          "sw7",
          "sw7",
          "sw8"
        ]
      },
      {
        "name": "da4",
        "op": "+-",
        "args": [
          "swAng",
          "0",
          "sw9"
        ]
      },
      {
        "name": "g13",
        "op": "min",
        "args": [
          "y1",
          "y2"
        ]
      },
      {
        "name": "it",
        "op": "?:",
        "args": [
          "da4",
          "t",
          "g13"
        ]
      },
      {
        "name": "cang1",
        "op": "+-",
        "args": [
          "stAng",
          "0",
          "cd4"
        ]
      },
      {
        "name": "cang2",
        "op": "+-",
        "args": [
          "enAng",
          "cd4",
          "0"
        ]
      },
      {
        "name": "cang3",
        "op": "+/",
        "args": [
          "cang1",
          "cang2",
          "2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "stAng",
              "swAng"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "vc"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "stAng",
              "swAng"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "bentArrow": {
    "adjustments": {
      "adj1": 25000,
      "adj2": 25000,
      "adj3": 25000,
      "adj4": 43750
    },
    "guides": [
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "50000"
        ]
      },
      {
        "name": "maxAdj1",
        "op": "*/",
        "args": [
          "a2",
          "2",
          "1"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "maxAdj1"
        ]
      },
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "0",
          "adj3",
          "50000"
        ]
      },
      {
        "name": "th",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "aw2",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "th2",
        "op": "*/",
        "args": [
          "th",
          "1",
          "2"
        ]
      },
      {
        "name": "dh2",
        "op": "+-",
        "args": [
          "aw2",
          "0",
          "th2"
        ]
      },
      {
        "name": "ah",
        "op": "*/",
        "args": [
          "ss",
          "a3",
          "100000"
        ]
      },
      {
        "name": "bw",
        "op": "+-",
        "args": [
          "r",
          "0",
          "ah"
        ]
      },
      {
        "name": "bh",
        "op": "+-",
        "args": [
          "b",
          "0",
          "dh2"
        ]
      },
      {
        "name": "bs",
        "op": "min",
        "args": [
          "bw",
          "bh"
        ]
      },
      {
        "name": "maxAdj4",
        "op": "*/",
        "args": [
          "100000",
          "bs",
          "ss"
        ]
      },
      {
        "name": "a4",
        "op": "pin",
        "args": [
          "0",
          "adj4",
          "maxAdj4"
        ]
      },
      {
        "name": "bd",
        "op": "*/",
        "args": [
          "ss",
          "a4",
          "100000"
        ]
      },
      {
        "name": "bd3",
        "op": "+-",
        "args": [
          "bd",
          "0",
          "th"
        ]
      },
      {
        "name": "bd2",
        "op": "max",
        "args": [
          "bd3",
          "0"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "th",
          "bd2",
          "0"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "r",
          "0",
          "ah"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "dh2",
          "th",
          "0"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "y3",
          "dh2",
          "0"
        ]
      },
      {
        "name": "y5",
        "op": "+-",
        "args": [
          "dh2",
          "bd",
          "0"
        ]
      },
      {
        "name": "y6",
        "op": "+-",
        "args": [
          "y3",
          "bd2",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y5"
            ]
          },
          {
            "type": "A",
            "data": [
              "bd",
              "bd",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "dh2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "aw2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y3"
            ]
          },
          {
            "type": "A",
            "data": [
              "bd2",
              "bd2",
              "3cd4",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "th",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "bentConnector2": {
    "adjustments": {},
    "guides": [],
    "paths": [
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "bentConnector3": {
    "adjustments": {
      "adj1": 50000
    },
    "guides": [
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "w",
          "adj1",
          "100000"
        ]
      }
    ],
    "paths": [
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "bentConnector4": {
    "adjustments": {
      "adj1": 50000,
      "adj2": 50000
    },
    "guides": [
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "w",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "+/",
        "args": [
          "x1",
          "r",
          "2"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "adj2",
          "100000"
        ]
      },
      {
        "name": "y1",
        "op": "+/",
        "args": [
          "t",
          "y2",
          "2"
        ]
      }
    ],
    "paths": [
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "bentConnector5": {
    "adjustments": {
      "adj1": 50000,
      "adj2": 50000,
      "adj3": 50000
    },
    "guides": [
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "w",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "x3",
        "op": "*/",
        "args": [
          "w",
          "adj3",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "+/",
        "args": [
          "x1",
          "x3",
          "2"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "adj2",
          "100000"
        ]
      },
      {
        "name": "y1",
        "op": "+/",
        "args": [
          "t",
          "y2",
          "2"
        ]
      },
      {
        "name": "y3",
        "op": "+/",
        "args": [
          "b",
          "y2",
          "2"
        ]
      }
    ],
    "paths": [
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "bentUpArrow": {
    "adjustments": {
      "adj1": 25000,
      "adj2": 25000,
      "adj3": 25000
    },
    "guides": [
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "50000"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "50000"
        ]
      },
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "0",
          "adj3",
          "50000"
        ]
      },
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "ss",
          "a3",
          "100000"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "50000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dx1"
        ]
      },
      {
        "name": "dx3",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dx3"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "200000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "x3",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "x3",
          "dx2",
          "0"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "b",
          "0",
          "dy2"
        ]
      },
      {
        "name": "x0",
        "op": "*/",
        "args": [
          "x4",
          "1",
          "2"
        ]
      },
      {
        "name": "y3",
        "op": "+/",
        "args": [
          "y2",
          "b",
          "2"
        ]
      },
      {
        "name": "y15",
        "op": "+/",
        "args": [
          "y1",
          "b",
          "2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "y2",
      "r": "x4",
      "b": "b"
    }
  },
  "bevel": {
    "adjustments": {
      "adj": 12500
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "50000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "b",
          "0",
          "x1"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "lightenLess",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "x1"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darkenLess",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "lighten",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darken",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "x1"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "x1",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "x1"
            ]
          },
          {
            "type": "M",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "M",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "x1"
            ]
          },
          {
            "type": "M",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "x1",
      "t": "x1",
      "r": "x2",
      "b": "y2"
    }
  },
  "blockArc": {
    "adjustments": {
      "adj1": 10800000,
      "adj2": 0,
      "adj3": 25000
    },
    "guides": [
      {
        "name": "stAng",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "21599999"
        ]
      },
      {
        "name": "istAng",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "21599999"
        ]
      },
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "0",
          "adj3",
          "50000"
        ]
      },
      {
        "name": "sw11",
        "op": "+-",
        "args": [
          "istAng",
          "0",
          "stAng"
        ]
      },
      {
        "name": "sw12",
        "op": "+-",
        "args": [
          "sw11",
          "21600000",
          "0"
        ]
      },
      {
        "name": "swAng",
        "op": "?:",
        "args": [
          "sw11",
          "sw11",
          "sw12"
        ]
      },
      {
        "name": "iswAng",
        "op": "+-",
        "args": [
          "0",
          "0",
          "swAng"
        ]
      },
      {
        "name": "wt1",
        "op": "sin",
        "args": [
          "wd2",
          "stAng"
        ]
      },
      {
        "name": "ht1",
        "op": "cos",
        "args": [
          "hd2",
          "stAng"
        ]
      },
      {
        "name": "wt3",
        "op": "sin",
        "args": [
          "wd2",
          "istAng"
        ]
      },
      {
        "name": "ht3",
        "op": "cos",
        "args": [
          "hd2",
          "istAng"
        ]
      },
      {
        "name": "dx1",
        "op": "cat2",
        "args": [
          "wd2",
          "ht1",
          "wt1"
        ]
      },
      {
        "name": "dy1",
        "op": "sat2",
        "args": [
          "hd2",
          "ht1",
          "wt1"
        ]
      },
      {
        "name": "dx3",
        "op": "cat2",
        "args": [
          "wd2",
          "ht3",
          "wt3"
        ]
      },
      {
        "name": "dy3",
        "op": "sat2",
        "args": [
          "hd2",
          "ht3",
          "wt3"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "hc",
          "dx3",
          "0"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "vc",
          "dy3",
          "0"
        ]
      },
      {
        "name": "dr",
        "op": "*/",
        "args": [
          "ss",
          "a3",
          "100000"
        ]
      },
      {
        "name": "iwd2",
        "op": "+-",
        "args": [
          "wd2",
          "0",
          "dr"
        ]
      },
      {
        "name": "ihd2",
        "op": "+-",
        "args": [
          "hd2",
          "0",
          "dr"
        ]
      },
      {
        "name": "wt2",
        "op": "sin",
        "args": [
          "iwd2",
          "istAng"
        ]
      },
      {
        "name": "ht2",
        "op": "cos",
        "args": [
          "ihd2",
          "istAng"
        ]
      },
      {
        "name": "wt4",
        "op": "sin",
        "args": [
          "iwd2",
          "stAng"
        ]
      },
      {
        "name": "ht4",
        "op": "cos",
        "args": [
          "ihd2",
          "stAng"
        ]
      },
      {
        "name": "dx2",
        "op": "cat2",
        "args": [
          "iwd2",
          "ht2",
          "wt2"
        ]
      },
      {
        "name": "dy2",
        "op": "sat2",
        "args": [
          "ihd2",
          "ht2",
          "wt2"
        ]
      },
      {
        "name": "dx4",
        "op": "cat2",
        "args": [
          "iwd2",
          "ht4",
          "wt4"
        ]
      },
      {
        "name": "dy4",
        "op": "sat2",
        "args": [
          "ihd2",
          "ht4",
          "wt4"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "dy2",
          "0"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "hc",
          "dx4",
          "0"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "vc",
          "dy4",
          "0"
        ]
      },
      {
        "name": "sw0",
        "op": "+-",
        "args": [
          "21600000",
          "0",
          "stAng"
        ]
      },
      {
        "name": "da1",
        "op": "+-",
        "args": [
          "swAng",
          "0",
          "sw0"
        ]
      },
      {
        "name": "g1",
        "op": "max",
        "args": [
          "x1",
          "x2"
        ]
      },
      {
        "name": "g2",
        "op": "max",
        "args": [
          "x3",
          "x4"
        ]
      },
      {
        "name": "g3",
        "op": "max",
        "args": [
          "g1",
          "g2"
        ]
      },
      {
        "name": "ir",
        "op": "?:",
        "args": [
          "da1",
          "r",
          "g3"
        ]
      },
      {
        "name": "sw1",
        "op": "+-",
        "args": [
          "cd4",
          "0",
          "stAng"
        ]
      },
      {
        "name": "sw2",
        "op": "+-",
        "args": [
          "27000000",
          "0",
          "stAng"
        ]
      },
      {
        "name": "sw3",
        "op": "?:",
        "args": [
          "sw1",
          "sw1",
          "sw2"
        ]
      },
      {
        "name": "da2",
        "op": "+-",
        "args": [
          "swAng",
          "0",
          "sw3"
        ]
      },
      {
        "name": "g5",
        "op": "max",
        "args": [
          "y1",
          "y2"
        ]
      },
      {
        "name": "g6",
        "op": "max",
        "args": [
          "y3",
          "y4"
        ]
      },
      {
        "name": "g7",
        "op": "max",
        "args": [
          "g5",
          "g6"
        ]
      },
      {
        "name": "ib",
        "op": "?:",
        "args": [
          "da2",
          "b",
          "g7"
        ]
      },
      {
        "name": "sw4",
        "op": "+-",
        "args": [
          "cd2",
          "0",
          "stAng"
        ]
      },
      {
        "name": "sw5",
        "op": "+-",
        "args": [
          "32400000",
          "0",
          "stAng"
        ]
      },
      {
        "name": "sw6",
        "op": "?:",
        "args": [
          "sw4",
          "sw4",
          "sw5"
        ]
      },
      {
        "name": "da3",
        "op": "+-",
        "args": [
          "swAng",
          "0",
          "sw6"
        ]
      },
      {
        "name": "g9",
        "op": "min",
        "args": [
          "x1",
          "x2"
        ]
      },
      {
        "name": "g10",
        "op": "min",
        "args": [
          "x3",
          "x4"
        ]
      },
      {
        "name": "g11",
        "op": "min",
        "args": [
          "g9",
          "g10"
        ]
      },
      {
        "name": "il",
        "op": "?:",
        "args": [
          "da3",
          "l",
          "g11"
        ]
      },
      {
        "name": "sw7",
        "op": "+-",
        "args": [
          "3cd4",
          "0",
          "stAng"
        ]
      },
      {
        "name": "sw8",
        "op": "+-",
        "args": [
          "37800000",
          "0",
          "stAng"
        ]
      },
      {
        "name": "sw9",
        "op": "?:",
        "args": [
          "sw7",
          "sw7",
          "sw8"
        ]
      },
      {
        "name": "da4",
        "op": "+-",
        "args": [
          "swAng",
          "0",
          "sw9"
        ]
      },
      {
        "name": "g13",
        "op": "min",
        "args": [
          "y1",
          "y2"
        ]
      },
      {
        "name": "g14",
        "op": "min",
        "args": [
          "y3",
          "y4"
        ]
      },
      {
        "name": "g15",
        "op": "min",
        "args": [
          "g13",
          "g14"
        ]
      },
      {
        "name": "it",
        "op": "?:",
        "args": [
          "da4",
          "t",
          "g15"
        ]
      },
      {
        "name": "x5",
        "op": "+/",
        "args": [
          "x1",
          "x4",
          "2"
        ]
      },
      {
        "name": "y5",
        "op": "+/",
        "args": [
          "y1",
          "y4",
          "2"
        ]
      },
      {
        "name": "x6",
        "op": "+/",
        "args": [
          "x3",
          "x2",
          "2"
        ]
      },
      {
        "name": "y6",
        "op": "+/",
        "args": [
          "y3",
          "y2",
          "2"
        ]
      },
      {
        "name": "cang1",
        "op": "+-",
        "args": [
          "stAng",
          "0",
          "cd4"
        ]
      },
      {
        "name": "cang2",
        "op": "+-",
        "args": [
          "istAng",
          "cd4",
          "0"
        ]
      },
      {
        "name": "cang3",
        "op": "+/",
        "args": [
          "cang1",
          "cang2",
          "2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "stAng",
              "swAng"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "A",
            "data": [
              "iwd2",
              "ihd2",
              "istAng",
              "iswAng"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "borderCallout1": {
    "adjustments": {
      "adj1": 18750,
      "adj2": -8333,
      "adj3": 112500,
      "adj4": -38333
    },
    "guides": [
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "h",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "w",
          "adj2",
          "100000"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "adj3",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "adj4",
          "100000"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "borderCallout2": {
    "adjustments": {
      "adj1": 18750,
      "adj2": -8333,
      "adj3": 18750,
      "adj4": -16667,
      "adj5": 112500,
      "adj6": -46667
    },
    "guides": [
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "h",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "w",
          "adj2",
          "100000"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "adj3",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "adj4",
          "100000"
        ]
      },
      {
        "name": "y3",
        "op": "*/",
        "args": [
          "h",
          "adj5",
          "100000"
        ]
      },
      {
        "name": "x3",
        "op": "*/",
        "args": [
          "w",
          "adj6",
          "100000"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y3"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "borderCallout3": {
    "adjustments": {
      "adj1": 18750,
      "adj2": -8333,
      "adj3": 18750,
      "adj4": -16667,
      "adj5": 100000,
      "adj6": -16667,
      "adj7": 112963,
      "adj8": -8333
    },
    "guides": [
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "h",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "w",
          "adj2",
          "100000"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "adj3",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "adj4",
          "100000"
        ]
      },
      {
        "name": "y3",
        "op": "*/",
        "args": [
          "h",
          "adj5",
          "100000"
        ]
      },
      {
        "name": "x3",
        "op": "*/",
        "args": [
          "w",
          "adj6",
          "100000"
        ]
      },
      {
        "name": "y4",
        "op": "*/",
        "args": [
          "h",
          "adj7",
          "100000"
        ]
      },
      {
        "name": "x4",
        "op": "*/",
        "args": [
          "w",
          "adj8",
          "100000"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y4"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "bracePair": {
    "adjustments": {
      "adj": 8333
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "25000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "50000"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x2"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "x1"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "vc",
          "x1",
          "0"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "b",
          "0",
          "x1"
        ]
      },
      {
        "name": "it",
        "op": "*/",
        "args": [
          "x1",
          "29289",
          "100000"
        ]
      },
      {
        "name": "il",
        "op": "+-",
        "args": [
          "x1",
          "it",
          "0"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "r",
          "0",
          "il"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "b",
          "0",
          "it"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "x2",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y3"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "0",
              "-5400000"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "cd4",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "x1"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y2"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "cd2",
              "-5400000"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "3cd4",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y4"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "0",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x2",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y3"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "0",
              "-5400000"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "cd4",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "x1"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "M",
            "data": [
              "x3",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y2"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "cd2",
              "-5400000"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "3cd4",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y4"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "0",
              "cd4"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "il",
      "r": "ir",
      "b": "ib"
    }
  },
  "bracketPair": {
    "adjustments": {
      "adj": 16667
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "50000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "b",
          "0",
          "x1"
        ]
      },
      {
        "name": "il",
        "op": "*/",
        "args": [
          "x1",
          "29289",
          "100000"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "r",
          "0",
          "il"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "b",
          "0",
          "il"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "x1"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y2"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "0",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "x1"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "M",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y2"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "0",
              "cd4"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "il",
      "r": "ir",
      "b": "ib"
    }
  },
  "callout1": {
    "adjustments": {
      "adj1": 18750,
      "adj2": -8333,
      "adj3": 112500,
      "adj4": -38333
    },
    "guides": [
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "h",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "w",
          "adj2",
          "100000"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "adj3",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "adj4",
          "100000"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "callout2": {
    "adjustments": {
      "adj1": 18750,
      "adj2": -8333,
      "adj3": 18750,
      "adj4": -16667,
      "adj5": 112500,
      "adj6": -46667
    },
    "guides": [
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "h",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "w",
          "adj2",
          "100000"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "adj3",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "adj4",
          "100000"
        ]
      },
      {
        "name": "y3",
        "op": "*/",
        "args": [
          "h",
          "adj5",
          "100000"
        ]
      },
      {
        "name": "x3",
        "op": "*/",
        "args": [
          "w",
          "adj6",
          "100000"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y3"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "callout3": {
    "adjustments": {
      "adj1": 18750,
      "adj2": -8333,
      "adj3": 18750,
      "adj4": -16667,
      "adj5": 100000,
      "adj6": -16667,
      "adj7": 112963,
      "adj8": -8333
    },
    "guides": [
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "h",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "w",
          "adj2",
          "100000"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "adj3",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "adj4",
          "100000"
        ]
      },
      {
        "name": "y3",
        "op": "*/",
        "args": [
          "h",
          "adj5",
          "100000"
        ]
      },
      {
        "name": "x3",
        "op": "*/",
        "args": [
          "w",
          "adj6",
          "100000"
        ]
      },
      {
        "name": "y4",
        "op": "*/",
        "args": [
          "h",
          "adj7",
          "100000"
        ]
      },
      {
        "name": "x4",
        "op": "*/",
        "args": [
          "w",
          "adj8",
          "100000"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y4"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "can": {
    "adjustments": {
      "adj": 25000
    },
    "guides": [
      {
        "name": "maxAdj",
        "op": "*/",
        "args": [
          "50000",
          "h",
          "ss"
        ]
      },
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "maxAdj"
        ]
      },
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "200000"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "y1",
          "y1",
          "0"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "b",
          "0",
          "y1"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "cd2",
              "-10800000"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y3"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "0",
              "cd2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "lighten",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "cd2",
              "cd2"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "0",
              "cd2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "r",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "0",
              "cd2"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "cd2",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y3"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "0",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y1"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "y2",
      "r": "r",
      "b": "y3"
    }
  },
  "chartPlus": {
    "adjustments": {},
    "guides": [],
    "paths": [
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "5",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "5",
              "10"
            ]
          },
          {
            "type": "M",
            "data": [
              "0",
              "5"
            ]
          },
          {
            "type": "L",
            "data": [
              "10",
              "5"
            ]
          }
        ]
      },
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "0",
              "10"
            ]
          },
          {
            "type": "L",
            "data": [
              "10",
              "10"
            ]
          },
          {
            "type": "L",
            "data": [
              "10",
              "0"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ]
  },
  "chartStar": {
    "adjustments": {},
    "guides": [],
    "paths": [
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "10",
              "10"
            ]
          },
          {
            "type": "M",
            "data": [
              "0",
              "10"
            ]
          },
          {
            "type": "L",
            "data": [
              "10",
              "0"
            ]
          },
          {
            "type": "M",
            "data": [
              "5",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "5",
              "10"
            ]
          }
        ]
      },
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "0",
              "10"
            ]
          },
          {
            "type": "L",
            "data": [
              "10",
              "10"
            ]
          },
          {
            "type": "L",
            "data": [
              "10",
              "0"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ]
  },
  "chartX": {
    "adjustments": {},
    "guides": [],
    "paths": [
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "10",
              "10"
            ]
          },
          {
            "type": "M",
            "data": [
              "0",
              "10"
            ]
          },
          {
            "type": "L",
            "data": [
              "10",
              "0"
            ]
          }
        ]
      },
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "0",
              "10"
            ]
          },
          {
            "type": "L",
            "data": [
              "10",
              "10"
            ]
          },
          {
            "type": "L",
            "data": [
              "10",
              "0"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ]
  },
  "chevron": {
    "adjustments": {
      "adj": 50000
    },
    "guides": [
      {
        "name": "maxAdj",
        "op": "*/",
        "args": [
          "100000",
          "w",
          "ss"
        ]
      },
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "maxAdj"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x1"
        ]
      },
      {
        "name": "x3",
        "op": "*/",
        "args": [
          "x2",
          "1",
          "2"
        ]
      },
      {
        "name": "dx",
        "op": "+-",
        "args": [
          "x2",
          "0",
          "x1"
        ]
      },
      {
        "name": "il",
        "op": "?:",
        "args": [
          "dx",
          "x1",
          "l"
        ]
      },
      {
        "name": "ir",
        "op": "?:",
        "args": [
          "dx",
          "x2",
          "r"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "vc"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "t",
      "r": "ir",
      "b": "b"
    }
  },
  "chord": {
    "adjustments": {
      "adj1": 2700000,
      "adj2": 16200000
    },
    "guides": [
      {
        "name": "stAng",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "21599999"
        ]
      },
      {
        "name": "enAng",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "21599999"
        ]
      },
      {
        "name": "sw1",
        "op": "+-",
        "args": [
          "enAng",
          "0",
          "stAng"
        ]
      },
      {
        "name": "sw2",
        "op": "+-",
        "args": [
          "sw1",
          "21600000",
          "0"
        ]
      },
      {
        "name": "swAng",
        "op": "?:",
        "args": [
          "sw1",
          "sw1",
          "sw2"
        ]
      },
      {
        "name": "wt1",
        "op": "sin",
        "args": [
          "wd2",
          "stAng"
        ]
      },
      {
        "name": "ht1",
        "op": "cos",
        "args": [
          "hd2",
          "stAng"
        ]
      },
      {
        "name": "dx1",
        "op": "cat2",
        "args": [
          "wd2",
          "ht1",
          "wt1"
        ]
      },
      {
        "name": "dy1",
        "op": "sat2",
        "args": [
          "hd2",
          "ht1",
          "wt1"
        ]
      },
      {
        "name": "wt2",
        "op": "sin",
        "args": [
          "wd2",
          "enAng"
        ]
      },
      {
        "name": "ht2",
        "op": "cos",
        "args": [
          "hd2",
          "enAng"
        ]
      },
      {
        "name": "dx2",
        "op": "cat2",
        "args": [
          "wd2",
          "ht2",
          "wt2"
        ]
      },
      {
        "name": "dy2",
        "op": "sat2",
        "args": [
          "hd2",
          "ht2",
          "wt2"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "dy2",
          "0"
        ]
      },
      {
        "name": "x3",
        "op": "+/",
        "args": [
          "x1",
          "x2",
          "2"
        ]
      },
      {
        "name": "y3",
        "op": "+/",
        "args": [
          "y1",
          "y2",
          "2"
        ]
      },
      {
        "name": "midAng0",
        "op": "*/",
        "args": [
          "swAng",
          "1",
          "2"
        ]
      },
      {
        "name": "midAng",
        "op": "+-",
        "args": [
          "stAng",
          "midAng0",
          "cd2"
        ]
      },
      {
        "name": "idx",
        "op": "cos",
        "args": [
          "wd2",
          "2700000"
        ]
      },
      {
        "name": "idy",
        "op": "sin",
        "args": [
          "hd2",
          "2700000"
        ]
      },
      {
        "name": "il",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "idx"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "hc",
          "idx",
          "0"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "idy"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "vc",
          "idy",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "stAng",
              "swAng"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "circularArrow": {
    "adjustments": {
      "adj1": 12500,
      "adj2": 1142319,
      "adj3": 20457681,
      "adj4": 10800000,
      "adj5": 12500
    },
    "guides": [
      {
        "name": "a5",
        "op": "pin",
        "args": [
          "0",
          "adj5",
          "25000"
        ]
      },
      {
        "name": "maxAdj1",
        "op": "*/",
        "args": [
          "a5",
          "2",
          "1"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "maxAdj1"
        ]
      },
      {
        "name": "enAng",
        "op": "pin",
        "args": [
          "1",
          "adj3",
          "21599999"
        ]
      },
      {
        "name": "stAng",
        "op": "pin",
        "args": [
          "0",
          "adj4",
          "21599999"
        ]
      },
      {
        "name": "th",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "thh",
        "op": "*/",
        "args": [
          "ss",
          "a5",
          "100000"
        ]
      },
      {
        "name": "th2",
        "op": "*/",
        "args": [
          "th",
          "1",
          "2"
        ]
      },
      {
        "name": "rw1",
        "op": "+-",
        "args": [
          "wd2",
          "th2",
          "thh"
        ]
      },
      {
        "name": "rh1",
        "op": "+-",
        "args": [
          "hd2",
          "th2",
          "thh"
        ]
      },
      {
        "name": "rw2",
        "op": "+-",
        "args": [
          "rw1",
          "0",
          "th"
        ]
      },
      {
        "name": "rh2",
        "op": "+-",
        "args": [
          "rh1",
          "0",
          "th"
        ]
      },
      {
        "name": "rw3",
        "op": "+-",
        "args": [
          "rw2",
          "th2",
          "0"
        ]
      },
      {
        "name": "rh3",
        "op": "+-",
        "args": [
          "rh2",
          "th2",
          "0"
        ]
      },
      {
        "name": "wtH",
        "op": "sin",
        "args": [
          "rw3",
          "enAng"
        ]
      },
      {
        "name": "htH",
        "op": "cos",
        "args": [
          "rh3",
          "enAng"
        ]
      },
      {
        "name": "dxH",
        "op": "cat2",
        "args": [
          "rw3",
          "htH",
          "wtH"
        ]
      },
      {
        "name": "dyH",
        "op": "sat2",
        "args": [
          "rh3",
          "htH",
          "wtH"
        ]
      },
      {
        "name": "xH",
        "op": "+-",
        "args": [
          "hc",
          "dxH",
          "0"
        ]
      },
      {
        "name": "yH",
        "op": "+-",
        "args": [
          "vc",
          "dyH",
          "0"
        ]
      },
      {
        "name": "rI",
        "op": "min",
        "args": [
          "rw2",
          "rh2"
        ]
      },
      {
        "name": "u1",
        "op": "*/",
        "args": [
          "dxH",
          "dxH",
          "1"
        ]
      },
      {
        "name": "u2",
        "op": "*/",
        "args": [
          "dyH",
          "dyH",
          "1"
        ]
      },
      {
        "name": "u3",
        "op": "*/",
        "args": [
          "rI",
          "rI",
          "1"
        ]
      },
      {
        "name": "u4",
        "op": "+-",
        "args": [
          "u1",
          "0",
          "u3"
        ]
      },
      {
        "name": "u5",
        "op": "+-",
        "args": [
          "u2",
          "0",
          "u3"
        ]
      },
      {
        "name": "u6",
        "op": "*/",
        "args": [
          "u4",
          "u5",
          "u1"
        ]
      },
      {
        "name": "u7",
        "op": "*/",
        "args": [
          "u6",
          "1",
          "u2"
        ]
      },
      {
        "name": "u8",
        "op": "+-",
        "args": [
          "1",
          "0",
          "u7"
        ]
      },
      {
        "name": "u9",
        "op": "sqrt",
        "args": [
          "u8"
        ]
      },
      {
        "name": "u10",
        "op": "*/",
        "args": [
          "u4",
          "1",
          "dxH"
        ]
      },
      {
        "name": "u11",
        "op": "*/",
        "args": [
          "u10",
          "1",
          "dyH"
        ]
      },
      {
        "name": "u12",
        "op": "+/",
        "args": [
          "1",
          "u9",
          "u11"
        ]
      },
      {
        "name": "u13",
        "op": "at2",
        "args": [
          "1",
          "u12"
        ]
      },
      {
        "name": "u14",
        "op": "+-",
        "args": [
          "u13",
          "21600000",
          "0"
        ]
      },
      {
        "name": "u15",
        "op": "?:",
        "args": [
          "u13",
          "u13",
          "u14"
        ]
      },
      {
        "name": "u16",
        "op": "+-",
        "args": [
          "u15",
          "0",
          "enAng"
        ]
      },
      {
        "name": "u17",
        "op": "+-",
        "args": [
          "u16",
          "21600000",
          "0"
        ]
      },
      {
        "name": "u18",
        "op": "?:",
        "args": [
          "u16",
          "u16",
          "u17"
        ]
      },
      {
        "name": "u19",
        "op": "+-",
        "args": [
          "u18",
          "0",
          "cd2"
        ]
      },
      {
        "name": "u20",
        "op": "+-",
        "args": [
          "u18",
          "0",
          "21600000"
        ]
      },
      {
        "name": "u21",
        "op": "?:",
        "args": [
          "u19",
          "u20",
          "u18"
        ]
      },
      {
        "name": "maxAng",
        "op": "abs",
        "args": [
          "u21"
        ]
      },
      {
        "name": "aAng",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAng"
        ]
      },
      {
        "name": "ptAng",
        "op": "+-",
        "args": [
          "enAng",
          "aAng",
          "0"
        ]
      },
      {
        "name": "wtA",
        "op": "sin",
        "args": [
          "rw3",
          "ptAng"
        ]
      },
      {
        "name": "htA",
        "op": "cos",
        "args": [
          "rh3",
          "ptAng"
        ]
      },
      {
        "name": "dxA",
        "op": "cat2",
        "args": [
          "rw3",
          "htA",
          "wtA"
        ]
      },
      {
        "name": "dyA",
        "op": "sat2",
        "args": [
          "rh3",
          "htA",
          "wtA"
        ]
      },
      {
        "name": "xA",
        "op": "+-",
        "args": [
          "hc",
          "dxA",
          "0"
        ]
      },
      {
        "name": "yA",
        "op": "+-",
        "args": [
          "vc",
          "dyA",
          "0"
        ]
      },
      {
        "name": "wtE",
        "op": "sin",
        "args": [
          "rw1",
          "stAng"
        ]
      },
      {
        "name": "htE",
        "op": "cos",
        "args": [
          "rh1",
          "stAng"
        ]
      },
      {
        "name": "dxE",
        "op": "cat2",
        "args": [
          "rw1",
          "htE",
          "wtE"
        ]
      },
      {
        "name": "dyE",
        "op": "sat2",
        "args": [
          "rh1",
          "htE",
          "wtE"
        ]
      },
      {
        "name": "xE",
        "op": "+-",
        "args": [
          "hc",
          "dxE",
          "0"
        ]
      },
      {
        "name": "yE",
        "op": "+-",
        "args": [
          "vc",
          "dyE",
          "0"
        ]
      },
      {
        "name": "dxG",
        "op": "cos",
        "args": [
          "thh",
          "ptAng"
        ]
      },
      {
        "name": "dyG",
        "op": "sin",
        "args": [
          "thh",
          "ptAng"
        ]
      },
      {
        "name": "xG",
        "op": "+-",
        "args": [
          "xH",
          "dxG",
          "0"
        ]
      },
      {
        "name": "yG",
        "op": "+-",
        "args": [
          "yH",
          "dyG",
          "0"
        ]
      },
      {
        "name": "dxB",
        "op": "cos",
        "args": [
          "thh",
          "ptAng"
        ]
      },
      {
        "name": "dyB",
        "op": "sin",
        "args": [
          "thh",
          "ptAng"
        ]
      },
      {
        "name": "xB",
        "op": "+-",
        "args": [
          "xH",
          "0",
          "dxB",
          "0"
        ]
      },
      {
        "name": "yB",
        "op": "+-",
        "args": [
          "yH",
          "0",
          "dyB",
          "0"
        ]
      },
      {
        "name": "sx1",
        "op": "+-",
        "args": [
          "xB",
          "0",
          "hc"
        ]
      },
      {
        "name": "sy1",
        "op": "+-",
        "args": [
          "yB",
          "0",
          "vc"
        ]
      },
      {
        "name": "sx2",
        "op": "+-",
        "args": [
          "xG",
          "0",
          "hc"
        ]
      },
      {
        "name": "sy2",
        "op": "+-",
        "args": [
          "yG",
          "0",
          "vc"
        ]
      },
      {
        "name": "rO",
        "op": "min",
        "args": [
          "rw1",
          "rh1"
        ]
      },
      {
        "name": "x1O",
        "op": "*/",
        "args": [
          "sx1",
          "rO",
          "rw1"
        ]
      },
      {
        "name": "y1O",
        "op": "*/",
        "args": [
          "sy1",
          "rO",
          "rh1"
        ]
      },
      {
        "name": "x2O",
        "op": "*/",
        "args": [
          "sx2",
          "rO",
          "rw1"
        ]
      },
      {
        "name": "y2O",
        "op": "*/",
        "args": [
          "sy2",
          "rO",
          "rh1"
        ]
      },
      {
        "name": "dxO",
        "op": "+-",
        "args": [
          "x2O",
          "0",
          "x1O"
        ]
      },
      {
        "name": "dyO",
        "op": "+-",
        "args": [
          "y2O",
          "0",
          "y1O"
        ]
      },
      {
        "name": "dO",
        "op": "mod",
        "args": [
          "dxO",
          "dyO",
          "0"
        ]
      },
      {
        "name": "q1",
        "op": "*/",
        "args": [
          "x1O",
          "y2O",
          "1"
        ]
      },
      {
        "name": "q2",
        "op": "*/",
        "args": [
          "x2O",
          "y1O",
          "1"
        ]
      },
      {
        "name": "DO",
        "op": "+-",
        "args": [
          "q1",
          "0",
          "q2"
        ]
      },
      {
        "name": "q3",
        "op": "*/",
        "args": [
          "rO",
          "rO",
          "1"
        ]
      },
      {
        "name": "q4",
        "op": "*/",
        "args": [
          "dO",
          "dO",
          "1"
        ]
      },
      {
        "name": "q5",
        "op": "*/",
        "args": [
          "q3",
          "q4",
          "1"
        ]
      },
      {
        "name": "q6",
        "op": "*/",
        "args": [
          "DO",
          "DO",
          "1"
        ]
      },
      {
        "name": "q7",
        "op": "+-",
        "args": [
          "q5",
          "0",
          "q6"
        ]
      },
      {
        "name": "q8",
        "op": "max",
        "args": [
          "q7",
          "0"
        ]
      },
      {
        "name": "sdelO",
        "op": "sqrt",
        "args": [
          "q8"
        ]
      },
      {
        "name": "ndyO",
        "op": "*/",
        "args": [
          "dyO",
          "-1",
          "1"
        ]
      },
      {
        "name": "sdyO",
        "op": "?:",
        "args": [
          "ndyO",
          "-1",
          "1"
        ]
      },
      {
        "name": "q9",
        "op": "*/",
        "args": [
          "sdyO",
          "dxO",
          "1"
        ]
      },
      {
        "name": "q10",
        "op": "*/",
        "args": [
          "q9",
          "sdelO",
          "1"
        ]
      },
      {
        "name": "q11",
        "op": "*/",
        "args": [
          "DO",
          "dyO",
          "1"
        ]
      },
      {
        "name": "dxF1",
        "op": "+/",
        "args": [
          "q11",
          "q10",
          "q4"
        ]
      },
      {
        "name": "q12",
        "op": "+-",
        "args": [
          "q11",
          "0",
          "q10"
        ]
      },
      {
        "name": "dxF2",
        "op": "*/",
        "args": [
          "q12",
          "1",
          "q4"
        ]
      },
      {
        "name": "adyO",
        "op": "abs",
        "args": [
          "dyO"
        ]
      },
      {
        "name": "q13",
        "op": "*/",
        "args": [
          "adyO",
          "sdelO",
          "1"
        ]
      },
      {
        "name": "q14",
        "op": "*/",
        "args": [
          "DO",
          "dxO",
          "-1"
        ]
      },
      {
        "name": "dyF1",
        "op": "+/",
        "args": [
          "q14",
          "q13",
          "q4"
        ]
      },
      {
        "name": "q15",
        "op": "+-",
        "args": [
          "q14",
          "0",
          "q13"
        ]
      },
      {
        "name": "dyF2",
        "op": "*/",
        "args": [
          "q15",
          "1",
          "q4"
        ]
      },
      {
        "name": "q16",
        "op": "+-",
        "args": [
          "x2O",
          "0",
          "dxF1"
        ]
      },
      {
        "name": "q17",
        "op": "+-",
        "args": [
          "x2O",
          "0",
          "dxF2"
        ]
      },
      {
        "name": "q18",
        "op": "+-",
        "args": [
          "y2O",
          "0",
          "dyF1"
        ]
      },
      {
        "name": "q19",
        "op": "+-",
        "args": [
          "y2O",
          "0",
          "dyF2"
        ]
      },
      {
        "name": "q20",
        "op": "mod",
        "args": [
          "q16",
          "q18",
          "0"
        ]
      },
      {
        "name": "q21",
        "op": "mod",
        "args": [
          "q17",
          "q19",
          "0"
        ]
      },
      {
        "name": "q22",
        "op": "+-",
        "args": [
          "q21",
          "0",
          "q20"
        ]
      },
      {
        "name": "dxF",
        "op": "?:",
        "args": [
          "q22",
          "dxF1",
          "dxF2"
        ]
      },
      {
        "name": "dyF",
        "op": "?:",
        "args": [
          "q22",
          "dyF1",
          "dyF2"
        ]
      },
      {
        "name": "sdxF",
        "op": "*/",
        "args": [
          "dxF",
          "rw1",
          "rO"
        ]
      },
      {
        "name": "sdyF",
        "op": "*/",
        "args": [
          "dyF",
          "rh1",
          "rO"
        ]
      },
      {
        "name": "xF",
        "op": "+-",
        "args": [
          "hc",
          "sdxF",
          "0"
        ]
      },
      {
        "name": "yF",
        "op": "+-",
        "args": [
          "vc",
          "sdyF",
          "0"
        ]
      },
      {
        "name": "x1I",
        "op": "*/",
        "args": [
          "sx1",
          "rI",
          "rw2"
        ]
      },
      {
        "name": "y1I",
        "op": "*/",
        "args": [
          "sy1",
          "rI",
          "rh2"
        ]
      },
      {
        "name": "x2I",
        "op": "*/",
        "args": [
          "sx2",
          "rI",
          "rw2"
        ]
      },
      {
        "name": "y2I",
        "op": "*/",
        "args": [
          "sy2",
          "rI",
          "rh2"
        ]
      },
      {
        "name": "dxI",
        "op": "+-",
        "args": [
          "x2I",
          "0",
          "x1I"
        ]
      },
      {
        "name": "dyI",
        "op": "+-",
        "args": [
          "y2I",
          "0",
          "y1I"
        ]
      },
      {
        "name": "dI",
        "op": "mod",
        "args": [
          "dxI",
          "dyI",
          "0"
        ]
      },
      {
        "name": "v1",
        "op": "*/",
        "args": [
          "x1I",
          "y2I",
          "1"
        ]
      },
      {
        "name": "v2",
        "op": "*/",
        "args": [
          "x2I",
          "y1I",
          "1"
        ]
      },
      {
        "name": "DI",
        "op": "+-",
        "args": [
          "v1",
          "0",
          "v2"
        ]
      },
      {
        "name": "v3",
        "op": "*/",
        "args": [
          "rI",
          "rI",
          "1"
        ]
      },
      {
        "name": "v4",
        "op": "*/",
        "args": [
          "dI",
          "dI",
          "1"
        ]
      },
      {
        "name": "v5",
        "op": "*/",
        "args": [
          "v3",
          "v4",
          "1"
        ]
      },
      {
        "name": "v6",
        "op": "*/",
        "args": [
          "DI",
          "DI",
          "1"
        ]
      },
      {
        "name": "v7",
        "op": "+-",
        "args": [
          "v5",
          "0",
          "v6"
        ]
      },
      {
        "name": "v8",
        "op": "max",
        "args": [
          "v7",
          "0"
        ]
      },
      {
        "name": "sdelI",
        "op": "sqrt",
        "args": [
          "v8"
        ]
      },
      {
        "name": "v9",
        "op": "*/",
        "args": [
          "sdyO",
          "dxI",
          "1"
        ]
      },
      {
        "name": "v10",
        "op": "*/",
        "args": [
          "v9",
          "sdelI",
          "1"
        ]
      },
      {
        "name": "v11",
        "op": "*/",
        "args": [
          "DI",
          "dyI",
          "1"
        ]
      },
      {
        "name": "dxC1",
        "op": "+/",
        "args": [
          "v11",
          "v10",
          "v4"
        ]
      },
      {
        "name": "v12",
        "op": "+-",
        "args": [
          "v11",
          "0",
          "v10"
        ]
      },
      {
        "name": "dxC2",
        "op": "*/",
        "args": [
          "v12",
          "1",
          "v4"
        ]
      },
      {
        "name": "adyI",
        "op": "abs",
        "args": [
          "dyI"
        ]
      },
      {
        "name": "v13",
        "op": "*/",
        "args": [
          "adyI",
          "sdelI",
          "1"
        ]
      },
      {
        "name": "v14",
        "op": "*/",
        "args": [
          "DI",
          "dxI",
          "-1"
        ]
      },
      {
        "name": "dyC1",
        "op": "+/",
        "args": [
          "v14",
          "v13",
          "v4"
        ]
      },
      {
        "name": "v15",
        "op": "+-",
        "args": [
          "v14",
          "0",
          "v13"
        ]
      },
      {
        "name": "dyC2",
        "op": "*/",
        "args": [
          "v15",
          "1",
          "v4"
        ]
      },
      {
        "name": "v16",
        "op": "+-",
        "args": [
          "x1I",
          "0",
          "dxC1"
        ]
      },
      {
        "name": "v17",
        "op": "+-",
        "args": [
          "x1I",
          "0",
          "dxC2"
        ]
      },
      {
        "name": "v18",
        "op": "+-",
        "args": [
          "y1I",
          "0",
          "dyC1"
        ]
      },
      {
        "name": "v19",
        "op": "+-",
        "args": [
          "y1I",
          "0",
          "dyC2"
        ]
      },
      {
        "name": "v20",
        "op": "mod",
        "args": [
          "v16",
          "v18",
          "0"
        ]
      },
      {
        "name": "v21",
        "op": "mod",
        "args": [
          "v17",
          "v19",
          "0"
        ]
      },
      {
        "name": "v22",
        "op": "+-",
        "args": [
          "v21",
          "0",
          "v20"
        ]
      },
      {
        "name": "dxC",
        "op": "?:",
        "args": [
          "v22",
          "dxC1",
          "dxC2"
        ]
      },
      {
        "name": "dyC",
        "op": "?:",
        "args": [
          "v22",
          "dyC1",
          "dyC2"
        ]
      },
      {
        "name": "sdxC",
        "op": "*/",
        "args": [
          "dxC",
          "rw2",
          "rI"
        ]
      },
      {
        "name": "sdyC",
        "op": "*/",
        "args": [
          "dyC",
          "rh2",
          "rI"
        ]
      },
      {
        "name": "xC",
        "op": "+-",
        "args": [
          "hc",
          "sdxC",
          "0"
        ]
      },
      {
        "name": "yC",
        "op": "+-",
        "args": [
          "vc",
          "sdyC",
          "0"
        ]
      },
      {
        "name": "ist0",
        "op": "at2",
        "args": [
          "sdxC",
          "sdyC"
        ]
      },
      {
        "name": "ist1",
        "op": "+-",
        "args": [
          "ist0",
          "21600000",
          "0"
        ]
      },
      {
        "name": "istAng",
        "op": "?:",
        "args": [
          "ist0",
          "ist0",
          "ist1"
        ]
      },
      {
        "name": "isw1",
        "op": "+-",
        "args": [
          "stAng",
          "0",
          "istAng"
        ]
      },
      {
        "name": "isw2",
        "op": "+-",
        "args": [
          "isw1",
          "0",
          "21600000"
        ]
      },
      {
        "name": "iswAng",
        "op": "?:",
        "args": [
          "isw1",
          "isw2",
          "isw1"
        ]
      },
      {
        "name": "p1",
        "op": "+-",
        "args": [
          "xF",
          "0",
          "xC"
        ]
      },
      {
        "name": "p2",
        "op": "+-",
        "args": [
          "yF",
          "0",
          "yC"
        ]
      },
      {
        "name": "p3",
        "op": "mod",
        "args": [
          "p1",
          "p2",
          "0"
        ]
      },
      {
        "name": "p4",
        "op": "*/",
        "args": [
          "p3",
          "1",
          "2"
        ]
      },
      {
        "name": "p5",
        "op": "+-",
        "args": [
          "p4",
          "0",
          "thh"
        ]
      },
      {
        "name": "xGp",
        "op": "?:",
        "args": [
          "p5",
          "xF",
          "xG"
        ]
      },
      {
        "name": "yGp",
        "op": "?:",
        "args": [
          "p5",
          "yF",
          "yG"
        ]
      },
      {
        "name": "xBp",
        "op": "?:",
        "args": [
          "p5",
          "xC",
          "xB"
        ]
      },
      {
        "name": "yBp",
        "op": "?:",
        "args": [
          "p5",
          "yC",
          "yB"
        ]
      },
      {
        "name": "en0",
        "op": "at2",
        "args": [
          "sdxF",
          "sdyF"
        ]
      },
      {
        "name": "en1",
        "op": "+-",
        "args": [
          "en0",
          "21600000",
          "0"
        ]
      },
      {
        "name": "en2",
        "op": "?:",
        "args": [
          "en0",
          "en0",
          "en1"
        ]
      },
      {
        "name": "sw0",
        "op": "+-",
        "args": [
          "en2",
          "0",
          "stAng"
        ]
      },
      {
        "name": "sw1",
        "op": "+-",
        "args": [
          "sw0",
          "21600000",
          "0"
        ]
      },
      {
        "name": "swAng",
        "op": "?:",
        "args": [
          "sw0",
          "sw0",
          "sw1"
        ]
      },
      {
        "name": "wtI",
        "op": "sin",
        "args": [
          "rw3",
          "stAng"
        ]
      },
      {
        "name": "htI",
        "op": "cos",
        "args": [
          "rh3",
          "stAng"
        ]
      },
      {
        "name": "dxI",
        "op": "cat2",
        "args": [
          "rw3",
          "htI",
          "wtI"
        ]
      },
      {
        "name": "dyI",
        "op": "sat2",
        "args": [
          "rh3",
          "htI",
          "wtI"
        ]
      },
      {
        "name": "xI",
        "op": "+-",
        "args": [
          "hc",
          "dxI",
          "0"
        ]
      },
      {
        "name": "yI",
        "op": "+-",
        "args": [
          "vc",
          "dyI",
          "0"
        ]
      },
      {
        "name": "aI",
        "op": "+-",
        "args": [
          "stAng",
          "0",
          "cd4"
        ]
      },
      {
        "name": "aA",
        "op": "+-",
        "args": [
          "ptAng",
          "cd4",
          "0"
        ]
      },
      {
        "name": "aB",
        "op": "+-",
        "args": [
          "ptAng",
          "cd2",
          "0"
        ]
      },
      {
        "name": "idx",
        "op": "cos",
        "args": [
          "rw1",
          "2700000"
        ]
      },
      {
        "name": "idy",
        "op": "sin",
        "args": [
          "rh1",
          "2700000"
        ]
      },
      {
        "name": "il",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "idx"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "hc",
          "idx",
          "0"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "idy"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "vc",
          "idy",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "xE",
              "yE"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw1",
              "rh1",
              "stAng",
              "swAng"
            ]
          },
          {
            "type": "L",
            "data": [
              "xGp",
              "yGp"
            ]
          },
          {
            "type": "L",
            "data": [
              "xA",
              "yA"
            ]
          },
          {
            "type": "L",
            "data": [
              "xBp",
              "yBp"
            ]
          },
          {
            "type": "L",
            "data": [
              "xC",
              "yC"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw2",
              "rh2",
              "istAng",
              "iswAng"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "cloud": {
    "adjustments": {},
    "guides": [
      {
        "name": "il",
        "op": "*/",
        "args": [
          "w",
          "2977",
          "21600"
        ]
      },
      {
        "name": "it",
        "op": "*/",
        "args": [
          "h",
          "3262",
          "21600"
        ]
      },
      {
        "name": "ir",
        "op": "*/",
        "args": [
          "w",
          "17087",
          "21600"
        ]
      },
      {
        "name": "ib",
        "op": "*/",
        "args": [
          "h",
          "17337",
          "21600"
        ]
      },
      {
        "name": "g27",
        "op": "*/",
        "args": [
          "w",
          "67",
          "21600"
        ]
      },
      {
        "name": "g28",
        "op": "*/",
        "args": [
          "h",
          "21577",
          "21600"
        ]
      },
      {
        "name": "g29",
        "op": "*/",
        "args": [
          "w",
          "21582",
          "21600"
        ]
      },
      {
        "name": "g30",
        "op": "*/",
        "args": [
          "h",
          "1235",
          "21600"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "3900",
              "14370"
            ]
          },
          {
            "type": "A",
            "data": [
              "6753",
              "9190",
              "-11429249",
              "7426832"
            ]
          },
          {
            "type": "A",
            "data": [
              "5333",
              "7267",
              "-8646143",
              "5396714"
            ]
          },
          {
            "type": "A",
            "data": [
              "4365",
              "5945",
              "-8748475",
              "5983381"
            ]
          },
          {
            "type": "A",
            "data": [
              "4857",
              "6595",
              "-7859164",
              "7034504"
            ]
          },
          {
            "type": "A",
            "data": [
              "5333",
              "7273",
              "-4722533",
              "6541615"
            ]
          },
          {
            "type": "A",
            "data": [
              "6775",
              "9220",
              "-2776035",
              "7816140"
            ]
          },
          {
            "type": "A",
            "data": [
              "5785",
              "7867",
              "37501",
              "6842000"
            ]
          },
          {
            "type": "A",
            "data": [
              "6752",
              "9215",
              "1347096",
              "6910353"
            ]
          },
          {
            "type": "A",
            "data": [
              "7720",
              "10543",
              "3974558",
              "4542661"
            ]
          },
          {
            "type": "A",
            "data": [
              "4360",
              "5918",
              "-16496525",
              "8804134"
            ]
          },
          {
            "type": "A",
            "data": [
              "4345",
              "5945",
              "-14809710",
              "9151131"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "4693",
              "26177"
            ]
          },
          {
            "type": "A",
            "data": [
              "4345",
              "5945",
              "5204520",
              "1585770"
            ]
          },
          {
            "type": "M",
            "data": [
              "6928",
              "34899"
            ]
          },
          {
            "type": "A",
            "data": [
              "4360",
              "5918",
              "4416628",
              "686848"
            ]
          },
          {
            "type": "M",
            "data": [
              "16478",
              "39090"
            ]
          },
          {
            "type": "A",
            "data": [
              "6752",
              "9215",
              "8257449",
              "844866"
            ]
          },
          {
            "type": "M",
            "data": [
              "28827",
              "34751"
            ]
          },
          {
            "type": "A",
            "data": [
              "6752",
              "9215",
              "387196",
              "959901"
            ]
          },
          {
            "type": "M",
            "data": [
              "34129",
              "22954"
            ]
          },
          {
            "type": "A",
            "data": [
              "5785",
              "7867",
              "-4217541",
              "4255042"
            ]
          },
          {
            "type": "M",
            "data": [
              "41798",
              "15354"
            ]
          },
          {
            "type": "A",
            "data": [
              "5333",
              "7273",
              "1819082",
              "1665090"
            ]
          },
          {
            "type": "M",
            "data": [
              "38324",
              "5426"
            ]
          },
          {
            "type": "A",
            "data": [
              "4857",
              "6595",
              "-824660",
              "891534"
            ]
          },
          {
            "type": "M",
            "data": [
              "29078",
              "3952"
            ]
          },
          {
            "type": "A",
            "data": [
              "4857",
              "6595",
              "-8950887",
              "1091722"
            ]
          },
          {
            "type": "M",
            "data": [
              "22141",
              "4720"
            ]
          },
          {
            "type": "A",
            "data": [
              "4365",
              "5945",
              "-9809656",
              "1061181"
            ]
          },
          {
            "type": "M",
            "data": [
              "14000",
              "5192"
            ]
          },
          {
            "type": "A",
            "data": [
              "6753",
              "9190",
              "-4002417",
              "739161"
            ]
          },
          {
            "type": "M",
            "data": [
              "4127",
              "15789"
            ]
          },
          {
            "type": "A",
            "data": [
              "6753",
              "9190",
              "9459261",
              "711490"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "cloudCallout": {
    "adjustments": {
      "adj1": -20833,
      "adj2": 62500
    },
    "guides": [
      {
        "name": "dxPos",
        "op": "*/",
        "args": [
          "w",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "dyPos",
        "op": "*/",
        "args": [
          "h",
          "adj2",
          "100000"
        ]
      },
      {
        "name": "xPos",
        "op": "+-",
        "args": [
          "hc",
          "dxPos",
          "0"
        ]
      },
      {
        "name": "yPos",
        "op": "+-",
        "args": [
          "vc",
          "dyPos",
          "0"
        ]
      },
      {
        "name": "ht",
        "op": "cat2",
        "args": [
          "hd2",
          "dxPos",
          "dyPos"
        ]
      },
      {
        "name": "wt",
        "op": "sat2",
        "args": [
          "wd2",
          "dxPos",
          "dyPos"
        ]
      },
      {
        "name": "g2",
        "op": "cat2",
        "args": [
          "wd2",
          "ht",
          "wt"
        ]
      },
      {
        "name": "g3",
        "op": "sat2",
        "args": [
          "hd2",
          "ht",
          "wt"
        ]
      },
      {
        "name": "g4",
        "op": "+-",
        "args": [
          "hc",
          "g2",
          "0"
        ]
      },
      {
        "name": "g5",
        "op": "+-",
        "args": [
          "vc",
          "g3",
          "0"
        ]
      },
      {
        "name": "g6",
        "op": "+-",
        "args": [
          "g4",
          "0",
          "xPos"
        ]
      },
      {
        "name": "g7",
        "op": "+-",
        "args": [
          "g5",
          "0",
          "yPos"
        ]
      },
      {
        "name": "g8",
        "op": "mod",
        "args": [
          "g6",
          "g7",
          "0"
        ]
      },
      {
        "name": "g9",
        "op": "*/",
        "args": [
          "ss",
          "6600",
          "21600"
        ]
      },
      {
        "name": "g10",
        "op": "+-",
        "args": [
          "g8",
          "0",
          "g9"
        ]
      },
      {
        "name": "g11",
        "op": "*/",
        "args": [
          "g10",
          "1",
          "3"
        ]
      },
      {
        "name": "g12",
        "op": "*/",
        "args": [
          "ss",
          "1800",
          "21600"
        ]
      },
      {
        "name": "g13",
        "op": "+-",
        "args": [
          "g11",
          "g12",
          "0"
        ]
      },
      {
        "name": "g14",
        "op": "*/",
        "args": [
          "g13",
          "g6",
          "g8"
        ]
      },
      {
        "name": "g15",
        "op": "*/",
        "args": [
          "g13",
          "g7",
          "g8"
        ]
      },
      {
        "name": "g16",
        "op": "+-",
        "args": [
          "g14",
          "xPos",
          "0"
        ]
      },
      {
        "name": "g17",
        "op": "+-",
        "args": [
          "g15",
          "yPos",
          "0"
        ]
      },
      {
        "name": "g18",
        "op": "*/",
        "args": [
          "ss",
          "4800",
          "21600"
        ]
      },
      {
        "name": "g19",
        "op": "*/",
        "args": [
          "g11",
          "2",
          "1"
        ]
      },
      {
        "name": "g20",
        "op": "+-",
        "args": [
          "g18",
          "g19",
          "0"
        ]
      },
      {
        "name": "g21",
        "op": "*/",
        "args": [
          "g20",
          "g6",
          "g8"
        ]
      },
      {
        "name": "g22",
        "op": "*/",
        "args": [
          "g20",
          "g7",
          "g8"
        ]
      },
      {
        "name": "g23",
        "op": "+-",
        "args": [
          "g21",
          "xPos",
          "0"
        ]
      },
      {
        "name": "g24",
        "op": "+-",
        "args": [
          "g22",
          "yPos",
          "0"
        ]
      },
      {
        "name": "g25",
        "op": "*/",
        "args": [
          "ss",
          "1200",
          "21600"
        ]
      },
      {
        "name": "g26",
        "op": "*/",
        "args": [
          "ss",
          "600",
          "21600"
        ]
      },
      {
        "name": "x23",
        "op": "+-",
        "args": [
          "xPos",
          "g26",
          "0"
        ]
      },
      {
        "name": "x24",
        "op": "+-",
        "args": [
          "g16",
          "g25",
          "0"
        ]
      },
      {
        "name": "x25",
        "op": "+-",
        "args": [
          "g23",
          "g12",
          "0"
        ]
      },
      {
        "name": "il",
        "op": "*/",
        "args": [
          "w",
          "2977",
          "21600"
        ]
      },
      {
        "name": "it",
        "op": "*/",
        "args": [
          "h",
          "3262",
          "21600"
        ]
      },
      {
        "name": "ir",
        "op": "*/",
        "args": [
          "w",
          "17087",
          "21600"
        ]
      },
      {
        "name": "ib",
        "op": "*/",
        "args": [
          "h",
          "17337",
          "21600"
        ]
      },
      {
        "name": "g27",
        "op": "*/",
        "args": [
          "w",
          "67",
          "21600"
        ]
      },
      {
        "name": "g28",
        "op": "*/",
        "args": [
          "h",
          "21577",
          "21600"
        ]
      },
      {
        "name": "g29",
        "op": "*/",
        "args": [
          "w",
          "21582",
          "21600"
        ]
      },
      {
        "name": "g30",
        "op": "*/",
        "args": [
          "h",
          "1235",
          "21600"
        ]
      },
      {
        "name": "pang",
        "op": "at2",
        "args": [
          "dxPos",
          "dyPos"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "3900",
              "14370"
            ]
          },
          {
            "type": "A",
            "data": [
              "6753",
              "9190",
              "-11429249",
              "7426832"
            ]
          },
          {
            "type": "A",
            "data": [
              "5333",
              "7267",
              "-8646143",
              "5396714"
            ]
          },
          {
            "type": "A",
            "data": [
              "4365",
              "5945",
              "-8748475",
              "5983381"
            ]
          },
          {
            "type": "A",
            "data": [
              "4857",
              "6595",
              "-7859164",
              "7034504"
            ]
          },
          {
            "type": "A",
            "data": [
              "5333",
              "7273",
              "-4722533",
              "6541615"
            ]
          },
          {
            "type": "A",
            "data": [
              "6775",
              "9220",
              "-2776035",
              "7816140"
            ]
          },
          {
            "type": "A",
            "data": [
              "5785",
              "7867",
              "37501",
              "6842000"
            ]
          },
          {
            "type": "A",
            "data": [
              "6752",
              "9215",
              "1347096",
              "6910353"
            ]
          },
          {
            "type": "A",
            "data": [
              "7720",
              "10543",
              "3974558",
              "4542661"
            ]
          },
          {
            "type": "A",
            "data": [
              "4360",
              "5918",
              "-16496525",
              "8804134"
            ]
          },
          {
            "type": "A",
            "data": [
              "4345",
              "5945",
              "-14809710",
              "9151131"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x23",
              "yPos"
            ]
          },
          {
            "type": "A",
            "data": [
              "g26",
              "g26",
              "0",
              "21600000"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x24",
              "g17"
            ]
          },
          {
            "type": "A",
            "data": [
              "g25",
              "g25",
              "0",
              "21600000"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x25",
              "g24"
            ]
          },
          {
            "type": "A",
            "data": [
              "g12",
              "g12",
              "0",
              "21600000"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "4693",
              "26177"
            ]
          },
          {
            "type": "A",
            "data": [
              "4345",
              "5945",
              "5204520",
              "1585770"
            ]
          },
          {
            "type": "M",
            "data": [
              "6928",
              "34899"
            ]
          },
          {
            "type": "A",
            "data": [
              "4360",
              "5918",
              "4416628",
              "686848"
            ]
          },
          {
            "type": "M",
            "data": [
              "16478",
              "39090"
            ]
          },
          {
            "type": "A",
            "data": [
              "6752",
              "9215",
              "8257449",
              "844866"
            ]
          },
          {
            "type": "M",
            "data": [
              "28827",
              "34751"
            ]
          },
          {
            "type": "A",
            "data": [
              "6752",
              "9215",
              "387196",
              "959901"
            ]
          },
          {
            "type": "M",
            "data": [
              "34129",
              "22954"
            ]
          },
          {
            "type": "A",
            "data": [
              "5785",
              "7867",
              "-4217541",
              "4255042"
            ]
          },
          {
            "type": "M",
            "data": [
              "41798",
              "15354"
            ]
          },
          {
            "type": "A",
            "data": [
              "5333",
              "7273",
              "1819082",
              "1665090"
            ]
          },
          {
            "type": "M",
            "data": [
              "38324",
              "5426"
            ]
          },
          {
            "type": "A",
            "data": [
              "4857",
              "6595",
              "-824660",
              "891534"
            ]
          },
          {
            "type": "M",
            "data": [
              "29078",
              "3952"
            ]
          },
          {
            "type": "A",
            "data": [
              "4857",
              "6595",
              "-8950887",
              "1091722"
            ]
          },
          {
            "type": "M",
            "data": [
              "22141",
              "4720"
            ]
          },
          {
            "type": "A",
            "data": [
              "4365",
              "5945",
              "-9809656",
              "1061181"
            ]
          },
          {
            "type": "M",
            "data": [
              "14000",
              "5192"
            ]
          },
          {
            "type": "A",
            "data": [
              "6753",
              "9190",
              "-4002417",
              "739161"
            ]
          },
          {
            "type": "M",
            "data": [
              "4127",
              "15789"
            ]
          },
          {
            "type": "A",
            "data": [
              "6753",
              "9190",
              "9459261",
              "711490"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "corner": {
    "adjustments": {
      "adj1": 50000,
      "adj2": 50000
    },
    "guides": [
      {
        "name": "maxAdj1",
        "op": "*/",
        "args": [
          "100000",
          "h",
          "ss"
        ]
      },
      {
        "name": "maxAdj2",
        "op": "*/",
        "args": [
          "100000",
          "w",
          "ss"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "maxAdj1"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "b",
          "0",
          "dy1"
        ]
      },
      {
        "name": "cx1",
        "op": "*/",
        "args": [
          "x1",
          "1",
          "2"
        ]
      },
      {
        "name": "cy1",
        "op": "+/",
        "args": [
          "y1",
          "b",
          "2"
        ]
      },
      {
        "name": "d",
        "op": "+-",
        "args": [
          "w",
          "0",
          "h"
        ]
      },
      {
        "name": "it",
        "op": "?:",
        "args": [
          "d",
          "y1",
          "t"
        ]
      },
      {
        "name": "ir",
        "op": "?:",
        "args": [
          "d",
          "r",
          "x1"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "it",
      "r": "ir",
      "b": "b"
    }
  },
  "cornerTabs": {
    "adjustments": {},
    "guides": [
      {
        "name": "md",
        "op": "mod",
        "args": [
          "w",
          "h",
          "0"
        ]
      },
      {
        "name": "dx",
        "op": "*/",
        "args": [
          "1",
          "md",
          "20"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "0",
          "b",
          "dx"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "0",
          "r",
          "dx"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "dx",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "dx"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "dx",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "dx"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "r",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "dx",
      "t": "dx",
      "r": "x1",
      "b": "y1"
    }
  },
  "cube": {
    "adjustments": {
      "adj": 25000
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "100000"
        ]
      },
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "b",
          "0",
          "y1"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "y4",
          "1",
          "2"
        ]
      },
      {
        "name": "y3",
        "op": "+/",
        "args": [
          "y1",
          "b",
          "2"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "r",
          "0",
          "y1"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "x4",
          "1",
          "2"
        ]
      },
      {
        "name": "x3",
        "op": "+/",
        "args": [
          "y1",
          "r",
          "2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darkenLess",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "lightenLess",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "y1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "y1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "l",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "M",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "b"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "y1",
      "r": "x4",
      "b": "b"
    }
  },
  "curvedConnector2": {
    "adjustments": {},
    "guides": [],
    "paths": [
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "C",
            "data": [
              "wd2",
              "t",
              "r",
              "hd2",
              "r",
              "b"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "curvedConnector3": {
    "adjustments": {
      "adj1": 50000
    },
    "guides": [
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "+/",
        "args": [
          "l",
          "x2",
          "2"
        ]
      },
      {
        "name": "x3",
        "op": "+/",
        "args": [
          "r",
          "x2",
          "2"
        ]
      },
      {
        "name": "y3",
        "op": "*/",
        "args": [
          "h",
          "3",
          "4"
        ]
      }
    ],
    "paths": [
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "C",
            "data": [
              "x1",
              "t",
              "x2",
              "hd4",
              "x2",
              "vc"
            ]
          },
          {
            "type": "C",
            "data": [
              "x2",
              "y3",
              "x3",
              "b",
              "r",
              "b"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "curvedConnector4": {
    "adjustments": {
      "adj1": 50000,
      "adj2": 50000
    },
    "guides": [
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "+/",
        "args": [
          "l",
          "x2",
          "2"
        ]
      },
      {
        "name": "x3",
        "op": "+/",
        "args": [
          "r",
          "x2",
          "2"
        ]
      },
      {
        "name": "x4",
        "op": "+/",
        "args": [
          "x2",
          "x3",
          "2"
        ]
      },
      {
        "name": "x5",
        "op": "+/",
        "args": [
          "x3",
          "r",
          "2"
        ]
      },
      {
        "name": "y4",
        "op": "*/",
        "args": [
          "h",
          "adj2",
          "100000"
        ]
      },
      {
        "name": "y1",
        "op": "+/",
        "args": [
          "t",
          "y4",
          "2"
        ]
      },
      {
        "name": "y2",
        "op": "+/",
        "args": [
          "t",
          "y1",
          "2"
        ]
      },
      {
        "name": "y3",
        "op": "+/",
        "args": [
          "y1",
          "y4",
          "2"
        ]
      },
      {
        "name": "y5",
        "op": "+/",
        "args": [
          "b",
          "y4",
          "2"
        ]
      }
    ],
    "paths": [
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "C",
            "data": [
              "x1",
              "t",
              "x2",
              "y2",
              "x2",
              "y1"
            ]
          },
          {
            "type": "C",
            "data": [
              "x2",
              "y3",
              "x4",
              "y4",
              "x3",
              "y4"
            ]
          },
          {
            "type": "C",
            "data": [
              "x5",
              "y4",
              "r",
              "y5",
              "r",
              "b"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "curvedConnector5": {
    "adjustments": {
      "adj1": 50000,
      "adj2": 50000,
      "adj3": 50000
    },
    "guides": [
      {
        "name": "x3",
        "op": "*/",
        "args": [
          "w",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "x6",
        "op": "*/",
        "args": [
          "w",
          "adj3",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "+/",
        "args": [
          "x3",
          "x6",
          "2"
        ]
      },
      {
        "name": "x2",
        "op": "+/",
        "args": [
          "l",
          "x3",
          "2"
        ]
      },
      {
        "name": "x4",
        "op": "+/",
        "args": [
          "x3",
          "x1",
          "2"
        ]
      },
      {
        "name": "x5",
        "op": "+/",
        "args": [
          "x6",
          "x1",
          "2"
        ]
      },
      {
        "name": "x7",
        "op": "+/",
        "args": [
          "x6",
          "r",
          "2"
        ]
      },
      {
        "name": "y4",
        "op": "*/",
        "args": [
          "h",
          "adj2",
          "100000"
        ]
      },
      {
        "name": "y1",
        "op": "+/",
        "args": [
          "t",
          "y4",
          "2"
        ]
      },
      {
        "name": "y2",
        "op": "+/",
        "args": [
          "t",
          "y1",
          "2"
        ]
      },
      {
        "name": "y3",
        "op": "+/",
        "args": [
          "y1",
          "y4",
          "2"
        ]
      },
      {
        "name": "y5",
        "op": "+/",
        "args": [
          "b",
          "y4",
          "2"
        ]
      },
      {
        "name": "y6",
        "op": "+/",
        "args": [
          "y5",
          "y4",
          "2"
        ]
      },
      {
        "name": "y7",
        "op": "+/",
        "args": [
          "y5",
          "b",
          "2"
        ]
      }
    ],
    "paths": [
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "C",
            "data": [
              "x2",
              "t",
              "x3",
              "y2",
              "x3",
              "y1"
            ]
          },
          {
            "type": "C",
            "data": [
              "x3",
              "y3",
              "x4",
              "y4",
              "x1",
              "y4"
            ]
          },
          {
            "type": "C",
            "data": [
              "x5",
              "y4",
              "x6",
              "y6",
              "x6",
              "y5"
            ]
          },
          {
            "type": "C",
            "data": [
              "x6",
              "y7",
              "x7",
              "b",
              "r",
              "b"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "curvedDownArrow": {
    "adjustments": {
      "adj1": 25000,
      "adj2": 50000,
      "adj3": 25000
    },
    "guides": [
      {
        "name": "maxAdj2",
        "op": "*/",
        "args": [
          "50000",
          "w",
          "ss"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "th",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "aw",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "q1",
        "op": "+/",
        "args": [
          "th",
          "aw",
          "4"
        ]
      },
      {
        "name": "wR",
        "op": "+-",
        "args": [
          "wd2",
          "0",
          "q1"
        ]
      },
      {
        "name": "q7",
        "op": "*/",
        "args": [
          "wR",
          "2",
          "1"
        ]
      },
      {
        "name": "q8",
        "op": "*/",
        "args": [
          "q7",
          "q7",
          "1"
        ]
      },
      {
        "name": "q9",
        "op": "*/",
        "args": [
          "th",
          "th",
          "1"
        ]
      },
      {
        "name": "q10",
        "op": "+-",
        "args": [
          "q8",
          "0",
          "q9"
        ]
      },
      {
        "name": "q11",
        "op": "sqrt",
        "args": [
          "q10"
        ]
      },
      {
        "name": "idy",
        "op": "*/",
        "args": [
          "q11",
          "h",
          "q7"
        ]
      },
      {
        "name": "maxAdj3",
        "op": "*/",
        "args": [
          "100000",
          "idy",
          "ss"
        ]
      },
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "0",
          "adj3",
          "maxAdj3"
        ]
      },
      {
        "name": "ah",
        "op": "*/",
        "args": [
          "ss",
          "adj3",
          "100000"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "wR",
          "th",
          "0"
        ]
      },
      {
        "name": "q2",
        "op": "*/",
        "args": [
          "h",
          "h",
          "1"
        ]
      },
      {
        "name": "q3",
        "op": "*/",
        "args": [
          "ah",
          "ah",
          "1"
        ]
      },
      {
        "name": "q4",
        "op": "+-",
        "args": [
          "q2",
          "0",
          "q3"
        ]
      },
      {
        "name": "q5",
        "op": "sqrt",
        "args": [
          "q4"
        ]
      },
      {
        "name": "dx",
        "op": "*/",
        "args": [
          "q5",
          "wR",
          "h"
        ]
      },
      {
        "name": "x5",
        "op": "+-",
        "args": [
          "wR",
          "dx",
          "0"
        ]
      },
      {
        "name": "x7",
        "op": "+-",
        "args": [
          "x3",
          "dx",
          "0"
        ]
      },
      {
        "name": "q6",
        "op": "+-",
        "args": [
          "aw",
          "0",
          "th"
        ]
      },
      {
        "name": "dh",
        "op": "*/",
        "args": [
          "q6",
          "1",
          "2"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "x5",
          "0",
          "dh"
        ]
      },
      {
        "name": "x8",
        "op": "+-",
        "args": [
          "x7",
          "dh",
          "0"
        ]
      },
      {
        "name": "aw2",
        "op": "*/",
        "args": [
          "aw",
          "1",
          "2"
        ]
      },
      {
        "name": "x6",
        "op": "+-",
        "args": [
          "r",
          "0",
          "aw2"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "b",
          "0",
          "ah"
        ]
      },
      {
        "name": "swAng",
        "op": "at2",
        "args": [
          "ah",
          "dx"
        ]
      },
      {
        "name": "mswAng",
        "op": "+-",
        "args": [
          "0",
          "0",
          "swAng"
        ]
      },
      {
        "name": "iy",
        "op": "+-",
        "args": [
          "b",
          "0",
          "idy"
        ]
      },
      {
        "name": "ix",
        "op": "+/",
        "args": [
          "wR",
          "x3",
          "2"
        ]
      },
      {
        "name": "q12",
        "op": "*/",
        "args": [
          "th",
          "1",
          "2"
        ]
      },
      {
        "name": "dang2",
        "op": "at2",
        "args": [
          "idy",
          "q12"
        ]
      },
      {
        "name": "stAng",
        "op": "+-",
        "args": [
          "3cd4",
          "swAng",
          "0"
        ]
      },
      {
        "name": "stAng2",
        "op": "+-",
        "args": [
          "3cd4",
          "0",
          "dang2"
        ]
      },
      {
        "name": "swAng2",
        "op": "+-",
        "args": [
          "dang2",
          "0",
          "cd4"
        ]
      },
      {
        "name": "swAng3",
        "op": "+-",
        "args": [
          "cd4",
          "dang2",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "x6",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wR",
              "h",
              "stAng",
              "mswAng"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "wR",
              "h",
              "3cd4",
              "swAng"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y1"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darkenLess",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "ix",
              "iy"
            ]
          },
          {
            "type": "A",
            "data": [
              "wR",
              "h",
              "stAng2",
              "swAng2"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "wR",
              "h",
              "cd2",
              "swAng3"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "ix",
              "iy"
            ]
          },
          {
            "type": "A",
            "data": [
              "wR",
              "h",
              "stAng2",
              "swAng2"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "wR",
              "h",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "wR",
              "h",
              "3cd4",
              "swAng"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wR",
              "h",
              "stAng",
              "mswAng"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "curvedLeftArrow": {
    "adjustments": {
      "adj1": 25000,
      "adj2": 50000,
      "adj3": 25000
    },
    "guides": [
      {
        "name": "maxAdj2",
        "op": "*/",
        "args": [
          "50000",
          "h",
          "ss"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "a2"
        ]
      },
      {
        "name": "th",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "aw",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "q1",
        "op": "+/",
        "args": [
          "th",
          "aw",
          "4"
        ]
      },
      {
        "name": "hR",
        "op": "+-",
        "args": [
          "hd2",
          "0",
          "q1"
        ]
      },
      {
        "name": "q7",
        "op": "*/",
        "args": [
          "hR",
          "2",
          "1"
        ]
      },
      {
        "name": "q8",
        "op": "*/",
        "args": [
          "q7",
          "q7",
          "1"
        ]
      },
      {
        "name": "q9",
        "op": "*/",
        "args": [
          "th",
          "th",
          "1"
        ]
      },
      {
        "name": "q10",
        "op": "+-",
        "args": [
          "q8",
          "0",
          "q9"
        ]
      },
      {
        "name": "q11",
        "op": "sqrt",
        "args": [
          "q10"
        ]
      },
      {
        "name": "idx",
        "op": "*/",
        "args": [
          "q11",
          "w",
          "q7"
        ]
      },
      {
        "name": "maxAdj3",
        "op": "*/",
        "args": [
          "100000",
          "idx",
          "ss"
        ]
      },
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "0",
          "adj3",
          "maxAdj3"
        ]
      },
      {
        "name": "ah",
        "op": "*/",
        "args": [
          "ss",
          "a3",
          "100000"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "hR",
          "th",
          "0"
        ]
      },
      {
        "name": "q2",
        "op": "*/",
        "args": [
          "w",
          "w",
          "1"
        ]
      },
      {
        "name": "q3",
        "op": "*/",
        "args": [
          "ah",
          "ah",
          "1"
        ]
      },
      {
        "name": "q4",
        "op": "+-",
        "args": [
          "q2",
          "0",
          "q3"
        ]
      },
      {
        "name": "q5",
        "op": "sqrt",
        "args": [
          "q4"
        ]
      },
      {
        "name": "dy",
        "op": "*/",
        "args": [
          "q5",
          "hR",
          "w"
        ]
      },
      {
        "name": "y5",
        "op": "+-",
        "args": [
          "hR",
          "dy",
          "0"
        ]
      },
      {
        "name": "y7",
        "op": "+-",
        "args": [
          "y3",
          "dy",
          "0"
        ]
      },
      {
        "name": "q6",
        "op": "+-",
        "args": [
          "aw",
          "0",
          "th"
        ]
      },
      {
        "name": "dh",
        "op": "*/",
        "args": [
          "q6",
          "1",
          "2"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "y5",
          "0",
          "dh"
        ]
      },
      {
        "name": "y8",
        "op": "+-",
        "args": [
          "y7",
          "dh",
          "0"
        ]
      },
      {
        "name": "aw2",
        "op": "*/",
        "args": [
          "aw",
          "1",
          "2"
        ]
      },
      {
        "name": "y6",
        "op": "+-",
        "args": [
          "b",
          "0",
          "aw2"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "l",
          "ah",
          "0"
        ]
      },
      {
        "name": "swAng",
        "op": "at2",
        "args": [
          "ah",
          "dy"
        ]
      },
      {
        "name": "mswAng",
        "op": "+-",
        "args": [
          "0",
          "0",
          "swAng"
        ]
      },
      {
        "name": "ix",
        "op": "+-",
        "args": [
          "l",
          "idx",
          "0"
        ]
      },
      {
        "name": "iy",
        "op": "+/",
        "args": [
          "hR",
          "y3",
          "2"
        ]
      },
      {
        "name": "q12",
        "op": "*/",
        "args": [
          "th",
          "1",
          "2"
        ]
      },
      {
        "name": "dang2",
        "op": "at2",
        "args": [
          "idx",
          "q12"
        ]
      },
      {
        "name": "swAng2",
        "op": "+-",
        "args": [
          "dang2",
          "0",
          "swAng"
        ]
      },
      {
        "name": "swAng3",
        "op": "+-",
        "args": [
          "swAng",
          "dang2",
          "0"
        ]
      },
      {
        "name": "stAng3",
        "op": "+-",
        "args": [
          "0",
          "0",
          "dang2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y5"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "hR",
              "swAng",
              "swAng2"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "hR",
              "stAng3",
              "swAng3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y8"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darkenLess",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "r",
              "y3"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "hR",
              "0",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "hR",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "r",
              "y3"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "hR",
              "0",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "hR",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y3"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "hR",
              "0",
              "swAng"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y8"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y5"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "hR",
              "swAng",
              "swAng2"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "curvedRightArrow": {
    "adjustments": {
      "adj1": 25000,
      "adj2": 50000,
      "adj3": 25000
    },
    "guides": [
      {
        "name": "maxAdj2",
        "op": "*/",
        "args": [
          "50000",
          "h",
          "ss"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "a2"
        ]
      },
      {
        "name": "th",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "aw",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "q1",
        "op": "+/",
        "args": [
          "th",
          "aw",
          "4"
        ]
      },
      {
        "name": "hR",
        "op": "+-",
        "args": [
          "hd2",
          "0",
          "q1"
        ]
      },
      {
        "name": "q7",
        "op": "*/",
        "args": [
          "hR",
          "2",
          "1"
        ]
      },
      {
        "name": "q8",
        "op": "*/",
        "args": [
          "q7",
          "q7",
          "1"
        ]
      },
      {
        "name": "q9",
        "op": "*/",
        "args": [
          "th",
          "th",
          "1"
        ]
      },
      {
        "name": "q10",
        "op": "+-",
        "args": [
          "q8",
          "0",
          "q9"
        ]
      },
      {
        "name": "q11",
        "op": "sqrt",
        "args": [
          "q10"
        ]
      },
      {
        "name": "idx",
        "op": "*/",
        "args": [
          "q11",
          "w",
          "q7"
        ]
      },
      {
        "name": "maxAdj3",
        "op": "*/",
        "args": [
          "100000",
          "idx",
          "ss"
        ]
      },
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "0",
          "adj3",
          "maxAdj3"
        ]
      },
      {
        "name": "ah",
        "op": "*/",
        "args": [
          "ss",
          "a3",
          "100000"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "hR",
          "th",
          "0"
        ]
      },
      {
        "name": "q2",
        "op": "*/",
        "args": [
          "w",
          "w",
          "1"
        ]
      },
      {
        "name": "q3",
        "op": "*/",
        "args": [
          "ah",
          "ah",
          "1"
        ]
      },
      {
        "name": "q4",
        "op": "+-",
        "args": [
          "q2",
          "0",
          "q3"
        ]
      },
      {
        "name": "q5",
        "op": "sqrt",
        "args": [
          "q4"
        ]
      },
      {
        "name": "dy",
        "op": "*/",
        "args": [
          "q5",
          "hR",
          "w"
        ]
      },
      {
        "name": "y5",
        "op": "+-",
        "args": [
          "hR",
          "dy",
          "0"
        ]
      },
      {
        "name": "y7",
        "op": "+-",
        "args": [
          "y3",
          "dy",
          "0"
        ]
      },
      {
        "name": "q6",
        "op": "+-",
        "args": [
          "aw",
          "0",
          "th"
        ]
      },
      {
        "name": "dh",
        "op": "*/",
        "args": [
          "q6",
          "1",
          "2"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "y5",
          "0",
          "dh"
        ]
      },
      {
        "name": "y8",
        "op": "+-",
        "args": [
          "y7",
          "dh",
          "0"
        ]
      },
      {
        "name": "aw2",
        "op": "*/",
        "args": [
          "aw",
          "1",
          "2"
        ]
      },
      {
        "name": "y6",
        "op": "+-",
        "args": [
          "b",
          "0",
          "aw2"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "r",
          "0",
          "ah"
        ]
      },
      {
        "name": "swAng",
        "op": "at2",
        "args": [
          "ah",
          "dy"
        ]
      },
      {
        "name": "stAng",
        "op": "+-",
        "args": [
          "cd2",
          "0",
          "swAng"
        ]
      },
      {
        "name": "mswAng",
        "op": "+-",
        "args": [
          "0",
          "0",
          "swAng"
        ]
      },
      {
        "name": "ix",
        "op": "+-",
        "args": [
          "r",
          "0",
          "idx"
        ]
      },
      {
        "name": "iy",
        "op": "+/",
        "args": [
          "hR",
          "y3",
          "2"
        ]
      },
      {
        "name": "q12",
        "op": "*/",
        "args": [
          "th",
          "1",
          "2"
        ]
      },
      {
        "name": "dang2",
        "op": "at2",
        "args": [
          "idx",
          "q12"
        ]
      },
      {
        "name": "swAng2",
        "op": "+-",
        "args": [
          "dang2",
          "0",
          "cd4"
        ]
      },
      {
        "name": "swAng3",
        "op": "+-",
        "args": [
          "cd4",
          "dang2",
          "0"
        ]
      },
      {
        "name": "stAng3",
        "op": "+-",
        "args": [
          "cd2",
          "0",
          "dang2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "hR"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "hR",
              "cd2",
              "mswAng"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y8"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y7"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "hR",
              "stAng",
              "swAng"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darkenLess",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "r",
              "th"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "hR",
              "3cd4",
              "swAng2"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "hR",
              "stAng3",
              "swAng3"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "hR"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "hR",
              "cd2",
              "mswAng"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y8"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y7"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "hR",
              "stAng",
              "swAng"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "hR"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "hR",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "th"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "hR",
              "3cd4",
              "swAng2"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "curvedUpArrow": {
    "adjustments": {
      "adj1": 25000,
      "adj2": 50000,
      "adj3": 25000
    },
    "guides": [
      {
        "name": "maxAdj2",
        "op": "*/",
        "args": [
          "50000",
          "w",
          "ss"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "th",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "aw",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "q1",
        "op": "+/",
        "args": [
          "th",
          "aw",
          "4"
        ]
      },
      {
        "name": "wR",
        "op": "+-",
        "args": [
          "wd2",
          "0",
          "q1"
        ]
      },
      {
        "name": "q7",
        "op": "*/",
        "args": [
          "wR",
          "2",
          "1"
        ]
      },
      {
        "name": "q8",
        "op": "*/",
        "args": [
          "q7",
          "q7",
          "1"
        ]
      },
      {
        "name": "q9",
        "op": "*/",
        "args": [
          "th",
          "th",
          "1"
        ]
      },
      {
        "name": "q10",
        "op": "+-",
        "args": [
          "q8",
          "0",
          "q9"
        ]
      },
      {
        "name": "q11",
        "op": "sqrt",
        "args": [
          "q10"
        ]
      },
      {
        "name": "idy",
        "op": "*/",
        "args": [
          "q11",
          "h",
          "q7"
        ]
      },
      {
        "name": "maxAdj3",
        "op": "*/",
        "args": [
          "100000",
          "idy",
          "ss"
        ]
      },
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "0",
          "adj3",
          "maxAdj3"
        ]
      },
      {
        "name": "ah",
        "op": "*/",
        "args": [
          "ss",
          "adj3",
          "100000"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "wR",
          "th",
          "0"
        ]
      },
      {
        "name": "q2",
        "op": "*/",
        "args": [
          "h",
          "h",
          "1"
        ]
      },
      {
        "name": "q3",
        "op": "*/",
        "args": [
          "ah",
          "ah",
          "1"
        ]
      },
      {
        "name": "q4",
        "op": "+-",
        "args": [
          "q2",
          "0",
          "q3"
        ]
      },
      {
        "name": "q5",
        "op": "sqrt",
        "args": [
          "q4"
        ]
      },
      {
        "name": "dx",
        "op": "*/",
        "args": [
          "q5",
          "wR",
          "h"
        ]
      },
      {
        "name": "x5",
        "op": "+-",
        "args": [
          "wR",
          "dx",
          "0"
        ]
      },
      {
        "name": "x7",
        "op": "+-",
        "args": [
          "x3",
          "dx",
          "0"
        ]
      },
      {
        "name": "q6",
        "op": "+-",
        "args": [
          "aw",
          "0",
          "th"
        ]
      },
      {
        "name": "dh",
        "op": "*/",
        "args": [
          "q6",
          "1",
          "2"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "x5",
          "0",
          "dh"
        ]
      },
      {
        "name": "x8",
        "op": "+-",
        "args": [
          "x7",
          "dh",
          "0"
        ]
      },
      {
        "name": "aw2",
        "op": "*/",
        "args": [
          "aw",
          "1",
          "2"
        ]
      },
      {
        "name": "x6",
        "op": "+-",
        "args": [
          "r",
          "0",
          "aw2"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "t",
          "ah",
          "0"
        ]
      },
      {
        "name": "swAng",
        "op": "at2",
        "args": [
          "ah",
          "dx"
        ]
      },
      {
        "name": "mswAng",
        "op": "+-",
        "args": [
          "0",
          "0",
          "swAng"
        ]
      },
      {
        "name": "iy",
        "op": "+-",
        "args": [
          "t",
          "idy",
          "0"
        ]
      },
      {
        "name": "ix",
        "op": "+/",
        "args": [
          "wR",
          "x3",
          "2"
        ]
      },
      {
        "name": "q12",
        "op": "*/",
        "args": [
          "th",
          "1",
          "2"
        ]
      },
      {
        "name": "dang2",
        "op": "at2",
        "args": [
          "idy",
          "q12"
        ]
      },
      {
        "name": "swAng2",
        "op": "+-",
        "args": [
          "dang2",
          "0",
          "swAng"
        ]
      },
      {
        "name": "mswAng2",
        "op": "+-",
        "args": [
          "0",
          "0",
          "swAng2"
        ]
      },
      {
        "name": "stAng3",
        "op": "+-",
        "args": [
          "cd4",
          "0",
          "swAng"
        ]
      },
      {
        "name": "swAng3",
        "op": "+-",
        "args": [
          "swAng",
          "dang2",
          "0"
        ]
      },
      {
        "name": "stAng2",
        "op": "+-",
        "args": [
          "cd4",
          "0",
          "dang2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "x6",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x7",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wR",
              "h",
              "stAng3",
              "swAng3"
            ]
          },
          {
            "type": "A",
            "data": [
              "wR",
              "h",
              "stAng2",
              "swAng2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darkenLess",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "wR",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "wR",
              "h",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "th",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "wR",
              "h",
              "cd2",
              "-5400000"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "ix",
              "iy"
            ]
          },
          {
            "type": "A",
            "data": [
              "wR",
              "h",
              "stAng2",
              "swAng2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x7",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wR",
              "h",
              "stAng3",
              "swAng"
            ]
          },
          {
            "type": "L",
            "data": [
              "wR",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "wR",
              "h",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "th",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "wR",
              "h",
              "cd2",
              "-5400000"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "decagon": {
    "adjustments": {
      "vf": 105146
    },
    "guides": [
      {
        "name": "shd2",
        "op": "*/",
        "args": [
          "hd2",
          "vf",
          "100000"
        ]
      },
      {
        "name": "dx1",
        "op": "cos",
        "args": [
          "wd2",
          "2160000"
        ]
      },
      {
        "name": "dx2",
        "op": "cos",
        "args": [
          "wd2",
          "4320000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "dy1",
        "op": "sin",
        "args": [
          "shd2",
          "4320000"
        ]
      },
      {
        "name": "dy2",
        "op": "sin",
        "args": [
          "shd2",
          "2160000"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy2"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "vc",
          "dy2",
          "0"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y3"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x1",
      "t": "y2",
      "r": "x4",
      "b": "y3"
    }
  },
  "diagStripe": {
    "adjustments": {
      "adj": 50000
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "a",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "x2",
          "1",
          "2"
        ]
      },
      {
        "name": "x3",
        "op": "+/",
        "args": [
          "x2",
          "r",
          "2"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "a",
          "100000"
        ]
      },
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "y2",
          "1",
          "2"
        ]
      },
      {
        "name": "y3",
        "op": "+/",
        "args": [
          "y2",
          "b",
          "2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "x3",
      "b": "y3"
    }
  },
  "diamond": {
    "adjustments": {},
    "guides": [
      {
        "name": "ir",
        "op": "*/",
        "args": [
          "w",
          "3",
          "4"
        ]
      },
      {
        "name": "ib",
        "op": "*/",
        "args": [
          "h",
          "3",
          "4"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "wd4",
      "t": "hd4",
      "r": "ir",
      "b": "ib"
    }
  },
  "dodecagon": {
    "adjustments": {},
    "guides": [
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "w",
          "2894",
          "21600"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "7906",
          "21600"
        ]
      },
      {
        "name": "x3",
        "op": "*/",
        "args": [
          "w",
          "13694",
          "21600"
        ]
      },
      {
        "name": "x4",
        "op": "*/",
        "args": [
          "w",
          "18706",
          "21600"
        ]
      },
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "h",
          "2894",
          "21600"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "7906",
          "21600"
        ]
      },
      {
        "name": "y3",
        "op": "*/",
        "args": [
          "h",
          "13694",
          "21600"
        ]
      },
      {
        "name": "y4",
        "op": "*/",
        "args": [
          "h",
          "18706",
          "21600"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y3"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x1",
      "t": "y1",
      "r": "x4",
      "b": "y4"
    }
  },
  "donut": {
    "adjustments": {
      "adj": 25000
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "50000"
        ]
      },
      {
        "name": "dr",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "iwd2",
        "op": "+-",
        "args": [
          "wd2",
          "0",
          "dr"
        ]
      },
      {
        "name": "ihd2",
        "op": "+-",
        "args": [
          "hd2",
          "0",
          "dr"
        ]
      },
      {
        "name": "idx",
        "op": "cos",
        "args": [
          "wd2",
          "2700000"
        ]
      },
      {
        "name": "idy",
        "op": "sin",
        "args": [
          "hd2",
          "2700000"
        ]
      },
      {
        "name": "il",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "idx"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "hc",
          "idx",
          "0"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "idy"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "vc",
          "idy",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "0",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "dr",
              "vc"
            ]
          },
          {
            "type": "A",
            "data": [
              "iwd2",
              "ihd2",
              "cd2",
              "-5400000"
            ]
          },
          {
            "type": "A",
            "data": [
              "iwd2",
              "ihd2",
              "cd4",
              "-5400000"
            ]
          },
          {
            "type": "A",
            "data": [
              "iwd2",
              "ihd2",
              "0",
              "-5400000"
            ]
          },
          {
            "type": "A",
            "data": [
              "iwd2",
              "ihd2",
              "3cd4",
              "-5400000"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "doubleWave": {
    "adjustments": {
      "adj1": 6250,
      "adj2": 0
    },
    "guides": [
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "12500"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "-10000",
          "adj2",
          "10000"
        ]
      },
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "100000"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "y1",
          "10",
          "3"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "y1",
          "0",
          "dy2"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "y1",
          "dy2",
          "0"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "b",
          "0",
          "y1"
        ]
      },
      {
        "name": "y5",
        "op": "+-",
        "args": [
          "y4",
          "0",
          "dy2"
        ]
      },
      {
        "name": "y6",
        "op": "+-",
        "args": [
          "y4",
          "dy2",
          "0"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "w",
          "a2",
          "100000"
        ]
      },
      {
        "name": "of2",
        "op": "*/",
        "args": [
          "w",
          "a2",
          "50000"
        ]
      },
      {
        "name": "x1",
        "op": "abs",
        "args": [
          "dx1"
        ]
      },
      {
        "name": "dx2",
        "op": "?:",
        "args": [
          "of2",
          "0",
          "of2"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "l",
          "0",
          "dx2"
        ]
      },
      {
        "name": "dx8",
        "op": "?:",
        "args": [
          "of2",
          "of2",
          "0"
        ]
      },
      {
        "name": "x8",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dx8"
        ]
      },
      {
        "name": "dx3",
        "op": "+/",
        "args": [
          "dx2",
          "x8",
          "6"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "x2",
          "dx3",
          "0"
        ]
      },
      {
        "name": "dx4",
        "op": "+/",
        "args": [
          "dx2",
          "x8",
          "3"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "x2",
          "dx4",
          "0"
        ]
      },
      {
        "name": "x5",
        "op": "+/",
        "args": [
          "x2",
          "x8",
          "2"
        ]
      },
      {
        "name": "x6",
        "op": "+-",
        "args": [
          "x5",
          "dx3",
          "0"
        ]
      },
      {
        "name": "x7",
        "op": "+/",
        "args": [
          "x6",
          "x8",
          "2"
        ]
      },
      {
        "name": "x9",
        "op": "+-",
        "args": [
          "l",
          "dx8",
          "0"
        ]
      },
      {
        "name": "x15",
        "op": "+-",
        "args": [
          "r",
          "dx2",
          "0"
        ]
      },
      {
        "name": "x10",
        "op": "+-",
        "args": [
          "x9",
          "dx3",
          "0"
        ]
      },
      {
        "name": "x11",
        "op": "+-",
        "args": [
          "x9",
          "dx4",
          "0"
        ]
      },
      {
        "name": "x12",
        "op": "+/",
        "args": [
          "x9",
          "x15",
          "2"
        ]
      },
      {
        "name": "x13",
        "op": "+-",
        "args": [
          "x12",
          "dx3",
          "0"
        ]
      },
      {
        "name": "x14",
        "op": "+/",
        "args": [
          "x13",
          "x15",
          "2"
        ]
      },
      {
        "name": "x16",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x1"
        ]
      },
      {
        "name": "xAdj",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "il",
        "op": "max",
        "args": [
          "x2",
          "x9"
        ]
      },
      {
        "name": "ir",
        "op": "min",
        "args": [
          "x8",
          "x15"
        ]
      },
      {
        "name": "it",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "50000"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "b",
          "0",
          "it"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "C",
            "data": [
              "x3",
              "y2",
              "x4",
              "y3",
              "x5",
              "y1"
            ]
          },
          {
            "type": "C",
            "data": [
              "x6",
              "y2",
              "x7",
              "y3",
              "x8",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x15",
              "y4"
            ]
          },
          {
            "type": "C",
            "data": [
              "x14",
              "y6",
              "x13",
              "y5",
              "x12",
              "y4"
            ]
          },
          {
            "type": "C",
            "data": [
              "x11",
              "y6",
              "x10",
              "y5",
              "x9",
              "y4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "downArrow": {
    "adjustments": {
      "adj1": 50000,
      "adj2": 50000
    },
    "guides": [
      {
        "name": "maxAdj2",
        "op": "*/",
        "args": [
          "100000",
          "h",
          "ss"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "b",
          "0",
          "dy1"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "w",
          "a1",
          "200000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "x1",
          "dy1",
          "wd2"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "y1",
          "dy2",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x1",
      "t": "t",
      "r": "x2",
      "b": "y2"
    }
  },
  "downArrowCallout": {
    "adjustments": {
      "adj1": 25000,
      "adj2": 25000,
      "adj3": 25000,
      "adj4": 64977
    },
    "guides": [
      {
        "name": "maxAdj2",
        "op": "*/",
        "args": [
          "50000",
          "w",
          "ss"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "maxAdj1",
        "op": "*/",
        "args": [
          "a2",
          "2",
          "1"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "maxAdj1"
        ]
      },
      {
        "name": "maxAdj3",
        "op": "*/",
        "args": [
          "100000",
          "h",
          "ss"
        ]
      },
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "0",
          "adj3",
          "maxAdj3"
        ]
      },
      {
        "name": "q2",
        "op": "*/",
        "args": [
          "a3",
          "ss",
          "h"
        ]
      },
      {
        "name": "maxAdj4",
        "op": "+-",
        "args": [
          "100000",
          "0",
          "q2"
        ]
      },
      {
        "name": "a4",
        "op": "pin",
        "args": [
          "0",
          "adj4",
          "maxAdj4"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "200000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "dy3",
        "op": "*/",
        "args": [
          "ss",
          "a3",
          "100000"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "b",
          "0",
          "dy3"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "a4",
          "100000"
        ]
      },
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "y2",
          "1",
          "2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "y2"
    }
  },
  "ellipse": {
    "adjustments": {},
    "guides": [
      {
        "name": "idx",
        "op": "cos",
        "args": [
          "wd2",
          "2700000"
        ]
      },
      {
        "name": "idy",
        "op": "sin",
        "args": [
          "hd2",
          "2700000"
        ]
      },
      {
        "name": "il",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "idx"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "hc",
          "idx",
          "0"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "idy"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "vc",
          "idy",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "0",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "ellipseRibbon": {
    "adjustments": {
      "adj1": 25000,
      "adj2": 50000,
      "adj3": 12500
    },
    "guides": [
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "25000",
          "adj2",
          "75000"
        ]
      },
      {
        "name": "q10",
        "op": "+-",
        "args": [
          "100000",
          "0",
          "a1"
        ]
      },
      {
        "name": "q11",
        "op": "*/",
        "args": [
          "q10",
          "1",
          "2"
        ]
      },
      {
        "name": "q12",
        "op": "+-",
        "args": [
          "a1",
          "0",
          "q11"
        ]
      },
      {
        "name": "minAdj3",
        "op": "max",
        "args": [
          "0",
          "q12"
        ]
      },
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "minAdj3",
          "adj3",
          "a1"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "w",
          "a2",
          "200000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "x2",
          "wd8",
          "0"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x3"
        ]
      },
      {
        "name": "x5",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x2"
        ]
      },
      {
        "name": "x6",
        "op": "+-",
        "args": [
          "r",
          "0",
          "wd8"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "h",
          "a3",
          "100000"
        ]
      },
      {
        "name": "f1",
        "op": "*/",
        "args": [
          "4",
          "dy1",
          "w"
        ]
      },
      {
        "name": "q1",
        "op": "*/",
        "args": [
          "x3",
          "x3",
          "w"
        ]
      },
      {
        "name": "q2",
        "op": "+-",
        "args": [
          "x3",
          "0",
          "q1"
        ]
      },
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "f1",
          "q2",
          "1"
        ]
      },
      {
        "name": "cx1",
        "op": "*/",
        "args": [
          "x3",
          "1",
          "2"
        ]
      },
      {
        "name": "cy1",
        "op": "*/",
        "args": [
          "f1",
          "cx1",
          "1"
        ]
      },
      {
        "name": "cx2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "cx1"
        ]
      },
      {
        "name": "q1",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "100000"
        ]
      },
      {
        "name": "dy3",
        "op": "+-",
        "args": [
          "q1",
          "0",
          "dy1"
        ]
      },
      {
        "name": "q3",
        "op": "*/",
        "args": [
          "x2",
          "x2",
          "w"
        ]
      },
      {
        "name": "q4",
        "op": "+-",
        "args": [
          "x2",
          "0",
          "q3"
        ]
      },
      {
        "name": "q5",
        "op": "*/",
        "args": [
          "f1",
          "q4",
          "1"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "q5",
          "dy3",
          "0"
        ]
      },
      {
        "name": "q6",
        "op": "+-",
        "args": [
          "dy1",
          "dy3",
          "y3"
        ]
      },
      {
        "name": "q7",
        "op": "+-",
        "args": [
          "q6",
          "dy1",
          "0"
        ]
      },
      {
        "name": "cy3",
        "op": "+-",
        "args": [
          "q7",
          "dy3",
          "0"
        ]
      },
      {
        "name": "rh",
        "op": "+-",
        "args": [
          "b",
          "0",
          "q1"
        ]
      },
      {
        "name": "q8",
        "op": "*/",
        "args": [
          "dy1",
          "14",
          "16"
        ]
      },
      {
        "name": "y2",
        "op": "+/",
        "args": [
          "q8",
          "rh",
          "2"
        ]
      },
      {
        "name": "y5",
        "op": "+-",
        "args": [
          "q5",
          "rh",
          "0"
        ]
      },
      {
        "name": "y6",
        "op": "+-",
        "args": [
          "y3",
          "rh",
          "0"
        ]
      },
      {
        "name": "cx4",
        "op": "*/",
        "args": [
          "x2",
          "1",
          "2"
        ]
      },
      {
        "name": "q9",
        "op": "*/",
        "args": [
          "f1",
          "cx4",
          "1"
        ]
      },
      {
        "name": "cy4",
        "op": "+-",
        "args": [
          "q9",
          "rh",
          "0"
        ]
      },
      {
        "name": "cx5",
        "op": "+-",
        "args": [
          "r",
          "0",
          "cx4"
        ]
      },
      {
        "name": "cy6",
        "op": "+-",
        "args": [
          "cy3",
          "rh",
          "0"
        ]
      },
      {
        "name": "y7",
        "op": "+-",
        "args": [
          "y1",
          "dy3",
          "0"
        ]
      },
      {
        "name": "cy7",
        "op": "+-",
        "args": [
          "q1",
          "q1",
          "y7"
        ]
      },
      {
        "name": "y8",
        "op": "+-",
        "args": [
          "b",
          "0",
          "dy1"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "Q",
            "data": [
              "cx1",
              "cy1",
              "x3",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y3"
            ]
          },
          {
            "type": "Q",
            "data": [
              "hc",
              "cy3",
              "x5",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "Q",
            "data": [
              "cx2",
              "cy1",
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "rh"
            ]
          },
          {
            "type": "Q",
            "data": [
              "cx5",
              "cy4",
              "x5",
              "y5"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y6"
            ]
          },
          {
            "type": "Q",
            "data": [
              "hc",
              "cy6",
              "x2",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y5"
            ]
          },
          {
            "type": "Q",
            "data": [
              "cx4",
              "cy4",
              "l",
              "rh"
            ]
          },
          {
            "type": "L",
            "data": [
              "wd8",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darkenLess",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "x3",
              "y7"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y3"
            ]
          },
          {
            "type": "Q",
            "data": [
              "hc",
              "cy3",
              "x5",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y7"
            ]
          },
          {
            "type": "Q",
            "data": [
              "hc",
              "cy7",
              "x3",
              "y7"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "Q",
            "data": [
              "cx1",
              "cy1",
              "x3",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y3"
            ]
          },
          {
            "type": "Q",
            "data": [
              "hc",
              "cy3",
              "x5",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "Q",
            "data": [
              "cx2",
              "cy1",
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "rh"
            ]
          },
          {
            "type": "Q",
            "data": [
              "cx5",
              "cy4",
              "x5",
              "y5"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y6"
            ]
          },
          {
            "type": "Q",
            "data": [
              "hc",
              "cy6",
              "x2",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y5"
            ]
          },
          {
            "type": "Q",
            "data": [
              "cx4",
              "cy4",
              "l",
              "rh"
            ]
          },
          {
            "type": "L",
            "data": [
              "wd8",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "x2",
              "y5"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y3"
            ]
          },
          {
            "type": "M",
            "data": [
              "x5",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y5"
            ]
          },
          {
            "type": "M",
            "data": [
              "x3",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y7"
            ]
          },
          {
            "type": "M",
            "data": [
              "x4",
              "y7"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y1"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "x2",
      "t": "q1",
      "r": "x5",
      "b": "y6"
    }
  },
  "ellipseRibbon2": {
    "adjustments": {
      "adj1": 25000,
      "adj2": 50000,
      "adj3": 12500
    },
    "guides": [
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "25000",
          "adj2",
          "75000"
        ]
      },
      {
        "name": "q10",
        "op": "+-",
        "args": [
          "100000",
          "0",
          "a1"
        ]
      },
      {
        "name": "q11",
        "op": "*/",
        "args": [
          "q10",
          "1",
          "2"
        ]
      },
      {
        "name": "q12",
        "op": "+-",
        "args": [
          "a1",
          "0",
          "q11"
        ]
      },
      {
        "name": "minAdj3",
        "op": "max",
        "args": [
          "0",
          "q12"
        ]
      },
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "minAdj3",
          "adj3",
          "a1"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "w",
          "a2",
          "200000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "x2",
          "wd8",
          "0"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x3"
        ]
      },
      {
        "name": "x5",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x2"
        ]
      },
      {
        "name": "x6",
        "op": "+-",
        "args": [
          "r",
          "0",
          "wd8"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "h",
          "a3",
          "100000"
        ]
      },
      {
        "name": "f1",
        "op": "*/",
        "args": [
          "4",
          "dy1",
          "w"
        ]
      },
      {
        "name": "q1",
        "op": "*/",
        "args": [
          "x3",
          "x3",
          "w"
        ]
      },
      {
        "name": "q2",
        "op": "+-",
        "args": [
          "x3",
          "0",
          "q1"
        ]
      },
      {
        "name": "u1",
        "op": "*/",
        "args": [
          "f1",
          "q2",
          "1"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "b",
          "0",
          "u1"
        ]
      },
      {
        "name": "cx1",
        "op": "*/",
        "args": [
          "x3",
          "1",
          "2"
        ]
      },
      {
        "name": "cu1",
        "op": "*/",
        "args": [
          "f1",
          "cx1",
          "1"
        ]
      },
      {
        "name": "cy1",
        "op": "+-",
        "args": [
          "b",
          "0",
          "cu1"
        ]
      },
      {
        "name": "cx2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "cx1"
        ]
      },
      {
        "name": "q1",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "100000"
        ]
      },
      {
        "name": "dy3",
        "op": "+-",
        "args": [
          "q1",
          "0",
          "dy1"
        ]
      },
      {
        "name": "q3",
        "op": "*/",
        "args": [
          "x2",
          "x2",
          "w"
        ]
      },
      {
        "name": "q4",
        "op": "+-",
        "args": [
          "x2",
          "0",
          "q3"
        ]
      },
      {
        "name": "q5",
        "op": "*/",
        "args": [
          "f1",
          "q4",
          "1"
        ]
      },
      {
        "name": "u3",
        "op": "+-",
        "args": [
          "q5",
          "dy3",
          "0"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "b",
          "0",
          "u3"
        ]
      },
      {
        "name": "q6",
        "op": "+-",
        "args": [
          "dy1",
          "dy3",
          "u3"
        ]
      },
      {
        "name": "q7",
        "op": "+-",
        "args": [
          "q6",
          "dy1",
          "0"
        ]
      },
      {
        "name": "cu3",
        "op": "+-",
        "args": [
          "q7",
          "dy3",
          "0"
        ]
      },
      {
        "name": "cy3",
        "op": "+-",
        "args": [
          "b",
          "0",
          "cu3"
        ]
      },
      {
        "name": "rh",
        "op": "+-",
        "args": [
          "b",
          "0",
          "q1"
        ]
      },
      {
        "name": "q8",
        "op": "*/",
        "args": [
          "dy1",
          "14",
          "16"
        ]
      },
      {
        "name": "u2",
        "op": "+/",
        "args": [
          "q8",
          "rh",
          "2"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "b",
          "0",
          "u2"
        ]
      },
      {
        "name": "u5",
        "op": "+-",
        "args": [
          "q5",
          "rh",
          "0"
        ]
      },
      {
        "name": "y5",
        "op": "+-",
        "args": [
          "b",
          "0",
          "u5"
        ]
      },
      {
        "name": "u6",
        "op": "+-",
        "args": [
          "u3",
          "rh",
          "0"
        ]
      },
      {
        "name": "y6",
        "op": "+-",
        "args": [
          "b",
          "0",
          "u6"
        ]
      },
      {
        "name": "cx4",
        "op": "*/",
        "args": [
          "x2",
          "1",
          "2"
        ]
      },
      {
        "name": "q9",
        "op": "*/",
        "args": [
          "f1",
          "cx4",
          "1"
        ]
      },
      {
        "name": "cu4",
        "op": "+-",
        "args": [
          "q9",
          "rh",
          "0"
        ]
      },
      {
        "name": "cy4",
        "op": "+-",
        "args": [
          "b",
          "0",
          "cu4"
        ]
      },
      {
        "name": "cx5",
        "op": "+-",
        "args": [
          "r",
          "0",
          "cx4"
        ]
      },
      {
        "name": "cu6",
        "op": "+-",
        "args": [
          "cu3",
          "rh",
          "0"
        ]
      },
      {
        "name": "cy6",
        "op": "+-",
        "args": [
          "b",
          "0",
          "cu6"
        ]
      },
      {
        "name": "u7",
        "op": "+-",
        "args": [
          "u1",
          "dy3",
          "0"
        ]
      },
      {
        "name": "y7",
        "op": "+-",
        "args": [
          "b",
          "0",
          "u7"
        ]
      },
      {
        "name": "cu7",
        "op": "+-",
        "args": [
          "q1",
          "q1",
          "u7"
        ]
      },
      {
        "name": "cy7",
        "op": "+-",
        "args": [
          "b",
          "0",
          "cu7"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Q",
            "data": [
              "cx1",
              "cy1",
              "x3",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y3"
            ]
          },
          {
            "type": "Q",
            "data": [
              "hc",
              "cy3",
              "x5",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "Q",
            "data": [
              "cx2",
              "cy1",
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "q1"
            ]
          },
          {
            "type": "Q",
            "data": [
              "cx5",
              "cy4",
              "x5",
              "y5"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y6"
            ]
          },
          {
            "type": "Q",
            "data": [
              "hc",
              "cy6",
              "x2",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y5"
            ]
          },
          {
            "type": "Q",
            "data": [
              "cx4",
              "cy4",
              "l",
              "q1"
            ]
          },
          {
            "type": "L",
            "data": [
              "wd8",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darkenLess",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "x3",
              "y7"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y3"
            ]
          },
          {
            "type": "Q",
            "data": [
              "hc",
              "cy3",
              "x5",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y7"
            ]
          },
          {
            "type": "Q",
            "data": [
              "hc",
              "cy7",
              "x3",
              "y7"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "wd8",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "q1"
            ]
          },
          {
            "type": "Q",
            "data": [
              "cx4",
              "cy4",
              "x2",
              "y5"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y6"
            ]
          },
          {
            "type": "Q",
            "data": [
              "hc",
              "cy6",
              "x5",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y5"
            ]
          },
          {
            "type": "Q",
            "data": [
              "cx5",
              "cy4",
              "r",
              "q1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "Q",
            "data": [
              "cx2",
              "cy1",
              "x4",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y3"
            ]
          },
          {
            "type": "Q",
            "data": [
              "hc",
              "cy3",
              "x2",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y1"
            ]
          },
          {
            "type": "Q",
            "data": [
              "cx1",
              "cy1",
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "x2",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y5"
            ]
          },
          {
            "type": "M",
            "data": [
              "x5",
              "y5"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y3"
            ]
          },
          {
            "type": "M",
            "data": [
              "x3",
              "y7"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y1"
            ]
          },
          {
            "type": "M",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y7"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "x2",
      "t": "y6",
      "r": "x5",
      "b": "rh"
    }
  },
  "flowChartAlternateProcess": {
    "adjustments": {},
    "guides": [
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "ssd6"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "b",
          "0",
          "ssd6"
        ]
      },
      {
        "name": "il",
        "op": "*/",
        "args": [
          "ssd6",
          "29289",
          "100000"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "r",
          "0",
          "il"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "b",
          "0",
          "il"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "ssd6"
            ]
          },
          {
            "type": "A",
            "data": [
              "ssd6",
              "ssd6",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "ssd6",
              "ssd6",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y2"
            ]
          },
          {
            "type": "A",
            "data": [
              "ssd6",
              "ssd6",
              "0",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "ssd6",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "ssd6",
              "ssd6",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "il",
      "r": "ir",
      "b": "ib"
    }
  },
  "flowChartCollate": {
    "adjustments": {},
    "guides": [
      {
        "name": "ir",
        "op": "*/",
        "args": [
          "w",
          "3",
          "4"
        ]
      },
      {
        "name": "ib",
        "op": "*/",
        "args": [
          "h",
          "3",
          "4"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "2",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "1"
            ]
          },
          {
            "type": "L",
            "data": [
              "2",
              "2"
            ]
          },
          {
            "type": "L",
            "data": [
              "0",
              "2"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "1"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "wd4",
      "t": "hd4",
      "r": "ir",
      "b": "ib"
    }
  },
  "flowChartConnector": {
    "adjustments": {},
    "guides": [
      {
        "name": "idx",
        "op": "cos",
        "args": [
          "wd2",
          "2700000"
        ]
      },
      {
        "name": "idy",
        "op": "sin",
        "args": [
          "hd2",
          "2700000"
        ]
      },
      {
        "name": "il",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "idx"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "hc",
          "idx",
          "0"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "idy"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "vc",
          "idy",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "0",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "flowChartDecision": {
    "adjustments": {},
    "guides": [
      {
        "name": "ir",
        "op": "*/",
        "args": [
          "w",
          "3",
          "4"
        ]
      },
      {
        "name": "ib",
        "op": "*/",
        "args": [
          "h",
          "3",
          "4"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "1"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "2",
              "1"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "wd4",
      "t": "hd4",
      "r": "ir",
      "b": "ib"
    }
  },
  "flowChartDelay": {
    "adjustments": {},
    "guides": [
      {
        "name": "idx",
        "op": "cos",
        "args": [
          "wd2",
          "2700000"
        ]
      },
      {
        "name": "idy",
        "op": "sin",
        "args": [
          "hd2",
          "2700000"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "hc",
          "idx",
          "0"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "idy"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "vc",
          "idy",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "3cd4",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "flowChartDisplay": {
    "adjustments": {},
    "guides": [
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "5",
          "6"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "3"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "5",
              "0"
            ]
          },
          {
            "type": "A",
            "data": [
              "1",
              "3",
              "3cd4",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "6"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "wd6",
      "t": "t",
      "r": "x2",
      "b": "b"
    }
  },
  "flowChartDocument": {
    "adjustments": {},
    "guides": [
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "h",
          "17322",
          "21600"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "20172",
          "21600"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "21600",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "21600",
              "17322"
            ]
          },
          {
            "type": "C",
            "data": [
              "10800",
              "17322",
              "10800",
              "23922",
              "0",
              "20172"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "y1"
    }
  },
  "flowChartExtract": {
    "adjustments": {},
    "guides": [
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "3",
          "4"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "2"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "2",
              "2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "wd4",
      "t": "vc",
      "r": "x2",
      "b": "b"
    }
  },
  "flowChartInputOutput": {
    "adjustments": {},
    "guides": [
      {
        "name": "x3",
        "op": "*/",
        "args": [
          "w",
          "2",
          "5"
        ]
      },
      {
        "name": "x4",
        "op": "*/",
        "args": [
          "w",
          "3",
          "5"
        ]
      },
      {
        "name": "x5",
        "op": "*/",
        "args": [
          "w",
          "4",
          "5"
        ]
      },
      {
        "name": "x6",
        "op": "*/",
        "args": [
          "w",
          "9",
          "10"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "5"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "5",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "4",
              "5"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "wd5",
      "t": "t",
      "r": "x5",
      "b": "b"
    }
  },
  "flowChartInternalStorage": {
    "adjustments": {},
    "guides": [],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "1"
            ]
          },
          {
            "type": "L",
            "data": [
              "0",
              "1"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "1",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "8"
            ]
          },
          {
            "type": "M",
            "data": [
              "0",
              "1"
            ]
          },
          {
            "type": "L",
            "data": [
              "8",
              "1"
            ]
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "1"
            ]
          },
          {
            "type": "L",
            "data": [
              "0",
              "1"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "wd8",
      "t": "hd8",
      "r": "r",
      "b": "b"
    }
  },
  "flowChartMagneticDisk": {
    "adjustments": {},
    "guides": [
      {
        "name": "y3",
        "op": "*/",
        "args": [
          "h",
          "5",
          "6"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "1"
            ]
          },
          {
            "type": "A",
            "data": [
              "3",
              "1",
              "cd2",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "6",
              "5"
            ]
          },
          {
            "type": "A",
            "data": [
              "3",
              "1",
              "0",
              "cd2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "6",
              "1"
            ]
          },
          {
            "type": "A",
            "data": [
              "3",
              "1",
              "0",
              "cd2"
            ]
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "1"
            ]
          },
          {
            "type": "A",
            "data": [
              "3",
              "1",
              "cd2",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "6",
              "5"
            ]
          },
          {
            "type": "A",
            "data": [
              "3",
              "1",
              "0",
              "cd2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "hd3",
      "r": "r",
      "b": "y3"
    }
  },
  "flowChartMagneticDrum": {
    "adjustments": {},
    "guides": [
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "2",
          "3"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "1",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "5",
              "0"
            ]
          },
          {
            "type": "A",
            "data": [
              "1",
              "3",
              "3cd4",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "6"
            ]
          },
          {
            "type": "A",
            "data": [
              "1",
              "3",
              "cd4",
              "cd2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "5",
              "6"
            ]
          },
          {
            "type": "A",
            "data": [
              "1",
              "3",
              "cd4",
              "cd2"
            ]
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "1",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "5",
              "0"
            ]
          },
          {
            "type": "A",
            "data": [
              "1",
              "3",
              "3cd4",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "6"
            ]
          },
          {
            "type": "A",
            "data": [
              "1",
              "3",
              "cd4",
              "cd2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "wd6",
      "t": "t",
      "r": "x2",
      "b": "b"
    }
  },
  "flowChartMagneticTape": {
    "adjustments": {},
    "guides": [
      {
        "name": "idx",
        "op": "cos",
        "args": [
          "wd2",
          "2700000"
        ]
      },
      {
        "name": "idy",
        "op": "sin",
        "args": [
          "hd2",
          "2700000"
        ]
      },
      {
        "name": "il",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "idx"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "hc",
          "idx",
          "0"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "idy"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "vc",
          "idy",
          "0"
        ]
      },
      {
        "name": "ang1",
        "op": "at2",
        "args": [
          "w",
          "h"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "hc",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "0",
              "ang1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "ib"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "flowChartManualInput": {
    "adjustments": {},
    "guides": [],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "1"
            ]
          },
          {
            "type": "L",
            "data": [
              "5",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "5",
              "5"
            ]
          },
          {
            "type": "L",
            "data": [
              "0",
              "5"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "hd5",
      "r": "r",
      "b": "b"
    }
  },
  "flowChartManualOperation": {
    "adjustments": {},
    "guides": [
      {
        "name": "x3",
        "op": "*/",
        "args": [
          "w",
          "4",
          "5"
        ]
      },
      {
        "name": "x4",
        "op": "*/",
        "args": [
          "w",
          "9",
          "10"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "5",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "4",
              "5"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "5"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "wd5",
      "t": "t",
      "r": "x3",
      "b": "b"
    }
  },
  "flowChartMerge": {
    "adjustments": {},
    "guides": [
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "3",
          "4"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "2",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "wd4",
      "t": "t",
      "r": "x2",
      "b": "vc"
    }
  },
  "flowChartMultidocument": {
    "adjustments": {},
    "guides": [
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "3675",
          "21600"
        ]
      },
      {
        "name": "y8",
        "op": "*/",
        "args": [
          "h",
          "20782",
          "21600"
        ]
      },
      {
        "name": "x3",
        "op": "*/",
        "args": [
          "w",
          "9298",
          "21600"
        ]
      },
      {
        "name": "x4",
        "op": "*/",
        "args": [
          "w",
          "12286",
          "21600"
        ]
      },
      {
        "name": "x5",
        "op": "*/",
        "args": [
          "w",
          "18595",
          "21600"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "20782"
            ]
          },
          {
            "type": "C",
            "data": [
              "9298",
              "23542",
              "9298",
              "18022",
              "18595",
              "18022"
            ]
          },
          {
            "type": "L",
            "data": [
              "18595",
              "3675"
            ]
          },
          {
            "type": "L",
            "data": [
              "0",
              "3675"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "1532",
              "3675"
            ]
          },
          {
            "type": "L",
            "data": [
              "1532",
              "1815"
            ]
          },
          {
            "type": "L",
            "data": [
              "20000",
              "1815"
            ]
          },
          {
            "type": "L",
            "data": [
              "20000",
              "16252"
            ]
          },
          {
            "type": "C",
            "data": [
              "19298",
              "16252",
              "18595",
              "16352",
              "18595",
              "16352"
            ]
          },
          {
            "type": "L",
            "data": [
              "18595",
              "3675"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "2972",
              "1815"
            ]
          },
          {
            "type": "L",
            "data": [
              "2972",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "21600",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "21600",
              "14392"
            ]
          },
          {
            "type": "C",
            "data": [
              "20800",
              "14392",
              "20000",
              "14467",
              "20000",
              "14467"
            ]
          },
          {
            "type": "L",
            "data": [
              "20000",
              "1815"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "3675"
            ]
          },
          {
            "type": "L",
            "data": [
              "18595",
              "3675"
            ]
          },
          {
            "type": "L",
            "data": [
              "18595",
              "18022"
            ]
          },
          {
            "type": "C",
            "data": [
              "9298",
              "18022",
              "9298",
              "23542",
              "0",
              "20782"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "1532",
              "3675"
            ]
          },
          {
            "type": "L",
            "data": [
              "1532",
              "1815"
            ]
          },
          {
            "type": "L",
            "data": [
              "20000",
              "1815"
            ]
          },
          {
            "type": "L",
            "data": [
              "20000",
              "16252"
            ]
          },
          {
            "type": "C",
            "data": [
              "19298",
              "16252",
              "18595",
              "16352",
              "18595",
              "16352"
            ]
          },
          {
            "type": "M",
            "data": [
              "2972",
              "1815"
            ]
          },
          {
            "type": "L",
            "data": [
              "2972",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "21600",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "21600",
              "14392"
            ]
          },
          {
            "type": "C",
            "data": [
              "20800",
              "14392",
              "20000",
              "14467",
              "20000",
              "14467"
            ]
          }
        ]
      },
      {
        "fill": "none",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "20782"
            ]
          },
          {
            "type": "C",
            "data": [
              "9298",
              "23542",
              "9298",
              "18022",
              "18595",
              "18022"
            ]
          },
          {
            "type": "L",
            "data": [
              "18595",
              "16352"
            ]
          },
          {
            "type": "C",
            "data": [
              "18595",
              "16352",
              "19298",
              "16252",
              "20000",
              "16252"
            ]
          },
          {
            "type": "L",
            "data": [
              "20000",
              "14467"
            ]
          },
          {
            "type": "C",
            "data": [
              "20000",
              "14467",
              "20800",
              "14392",
              "21600",
              "14392"
            ]
          },
          {
            "type": "L",
            "data": [
              "21600",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "2972",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "2972",
              "1815"
            ]
          },
          {
            "type": "L",
            "data": [
              "1532",
              "1815"
            ]
          },
          {
            "type": "L",
            "data": [
              "1532",
              "3675"
            ]
          },
          {
            "type": "L",
            "data": [
              "0",
              "3675"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "y2",
      "r": "x5",
      "b": "y8"
    }
  },
  "flowChartOfflineStorage": {
    "adjustments": {},
    "guides": [
      {
        "name": "x4",
        "op": "*/",
        "args": [
          "w",
          "3",
          "4"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "2",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "2",
              "4"
            ]
          },
          {
            "type": "L",
            "data": [
              "3",
              "4"
            ]
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "2",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "wd4",
      "t": "t",
      "r": "x4",
      "b": "vc"
    }
  },
  "flowChartOffpageConnector": {
    "adjustments": {},
    "guides": [
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "h",
          "4",
          "5"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "10",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "10",
              "8"
            ]
          },
          {
            "type": "L",
            "data": [
              "5",
              "10"
            ]
          },
          {
            "type": "L",
            "data": [
              "0",
              "8"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "y1"
    }
  },
  "flowChartOnlineStorage": {
    "adjustments": {},
    "guides": [
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "5",
          "6"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "1",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "6",
              "0"
            ]
          },
          {
            "type": "A",
            "data": [
              "1",
              "3",
              "3cd4",
              "-10800000"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "6"
            ]
          },
          {
            "type": "A",
            "data": [
              "1",
              "3",
              "cd4",
              "cd2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "wd6",
      "t": "t",
      "r": "x2",
      "b": "b"
    }
  },
  "flowChartOr": {
    "adjustments": {},
    "guides": [
      {
        "name": "idx",
        "op": "cos",
        "args": [
          "wd2",
          "2700000"
        ]
      },
      {
        "name": "idy",
        "op": "sin",
        "args": [
          "hd2",
          "2700000"
        ]
      },
      {
        "name": "il",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "idx"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "hc",
          "idx",
          "0"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "idy"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "vc",
          "idy",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "0",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "b"
            ]
          },
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "vc"
            ]
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "0",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "flowChartPredefinedProcess": {
    "adjustments": {},
    "guides": [
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "7",
          "8"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "1"
            ]
          },
          {
            "type": "L",
            "data": [
              "0",
              "1"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "1",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "8"
            ]
          },
          {
            "type": "M",
            "data": [
              "7",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "7",
              "8"
            ]
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "1"
            ]
          },
          {
            "type": "L",
            "data": [
              "0",
              "1"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "wd8",
      "t": "t",
      "r": "x2",
      "b": "b"
    }
  },
  "flowChartPreparation": {
    "adjustments": {},
    "guides": [
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "4",
          "5"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "5"
            ]
          },
          {
            "type": "L",
            "data": [
              "2",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "8",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "10",
              "5"
            ]
          },
          {
            "type": "L",
            "data": [
              "8",
              "10"
            ]
          },
          {
            "type": "L",
            "data": [
              "2",
              "10"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "wd5",
      "t": "t",
      "r": "x2",
      "b": "b"
    }
  },
  "flowChartProcess": {
    "adjustments": {},
    "guides": [],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "1"
            ]
          },
          {
            "type": "L",
            "data": [
              "0",
              "1"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "flowChartPunchedCard": {
    "adjustments": {},
    "guides": [],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "1"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "5",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "5",
              "5"
            ]
          },
          {
            "type": "L",
            "data": [
              "0",
              "5"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "hd5",
      "r": "r",
      "b": "b"
    }
  },
  "flowChartPunchedTape": {
    "adjustments": {},
    "guides": [
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "9",
          "10"
        ]
      },
      {
        "name": "ib",
        "op": "*/",
        "args": [
          "h",
          "4",
          "5"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "2"
            ]
          },
          {
            "type": "A",
            "data": [
              "5",
              "2",
              "cd2",
              "-10800000"
            ]
          },
          {
            "type": "A",
            "data": [
              "5",
              "2",
              "cd2",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "20",
              "18"
            ]
          },
          {
            "type": "A",
            "data": [
              "5",
              "2",
              "0",
              "-10800000"
            ]
          },
          {
            "type": "A",
            "data": [
              "5",
              "2",
              "0",
              "cd2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "hd5",
      "r": "r",
      "b": "ib"
    }
  },
  "flowChartSort": {
    "adjustments": {},
    "guides": [
      {
        "name": "ir",
        "op": "*/",
        "args": [
          "w",
          "3",
          "4"
        ]
      },
      {
        "name": "ib",
        "op": "*/",
        "args": [
          "h",
          "3",
          "4"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "1"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "2",
              "1"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "1"
            ]
          },
          {
            "type": "L",
            "data": [
              "2",
              "1"
            ]
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "0",
              "1"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "2",
              "1"
            ]
          },
          {
            "type": "L",
            "data": [
              "1",
              "2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "wd4",
      "t": "hd4",
      "r": "ir",
      "b": "ib"
    }
  },
  "flowChartSummingJunction": {
    "adjustments": {},
    "guides": [
      {
        "name": "idx",
        "op": "cos",
        "args": [
          "wd2",
          "2700000"
        ]
      },
      {
        "name": "idy",
        "op": "sin",
        "args": [
          "hd2",
          "2700000"
        ]
      },
      {
        "name": "il",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "idx"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "hc",
          "idx",
          "0"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "idy"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "vc",
          "idy",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "0",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "il",
              "it"
            ]
          },
          {
            "type": "L",
            "data": [
              "ir",
              "ib"
            ]
          },
          {
            "type": "M",
            "data": [
              "ir",
              "it"
            ]
          },
          {
            "type": "L",
            "data": [
              "il",
              "ib"
            ]
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "0",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "flowChartTerminator": {
    "adjustments": {},
    "guides": [
      {
        "name": "il",
        "op": "*/",
        "args": [
          "w",
          "1018",
          "21600"
        ]
      },
      {
        "name": "ir",
        "op": "*/",
        "args": [
          "w",
          "20582",
          "21600"
        ]
      },
      {
        "name": "it",
        "op": "*/",
        "args": [
          "h",
          "3163",
          "21600"
        ]
      },
      {
        "name": "ib",
        "op": "*/",
        "args": [
          "h",
          "18437",
          "21600"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "3475",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "18125",
              "0"
            ]
          },
          {
            "type": "A",
            "data": [
              "3475",
              "10800",
              "3cd4",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "3475",
              "21600"
            ]
          },
          {
            "type": "A",
            "data": [
              "3475",
              "10800",
              "cd4",
              "cd2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "foldedCorner": {
    "adjustments": {
      "adj": 16667
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "50000"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "dy2",
          "1",
          "5"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dy2"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "x1",
          "dy1",
          "0"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "b",
          "0",
          "dy2"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "y2",
          "dy1",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darkenLess",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y2"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "y2"
    }
  },
  "frame": {
    "adjustments": {
      "adj1": 12500
    },
    "guides": [
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "50000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x1"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "b",
          "0",
          "x1"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "x1",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "x1"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x1",
      "t": "x1",
      "r": "x4",
      "b": "y4"
    }
  },
  "funnel": {
    "adjustments": {},
    "guides": [
      {
        "name": "d",
        "op": "*/",
        "args": [
          "ss",
          "1",
          "20"
        ]
      },
      {
        "name": "rw2",
        "op": "+-",
        "args": [
          "wd2",
          "0",
          "d"
        ]
      },
      {
        "name": "rh2",
        "op": "+-",
        "args": [
          "hd4",
          "0",
          "d"
        ]
      },
      {
        "name": "t1",
        "op": "cos",
        "args": [
          "wd2",
          "480000"
        ]
      },
      {
        "name": "t2",
        "op": "sin",
        "args": [
          "hd4",
          "480000"
        ]
      },
      {
        "name": "da",
        "op": "at2",
        "args": [
          "t1",
          "t2"
        ]
      },
      {
        "name": "2da",
        "op": "*/",
        "args": [
          "da",
          "2",
          "1"
        ]
      },
      {
        "name": "stAng1",
        "op": "+-",
        "args": [
          "cd2",
          "0",
          "da"
        ]
      },
      {
        "name": "swAng1",
        "op": "+-",
        "args": [
          "cd2",
          "2da",
          "0"
        ]
      },
      {
        "name": "swAng3",
        "op": "+-",
        "args": [
          "cd2",
          "0",
          "2da"
        ]
      },
      {
        "name": "rw3",
        "op": "*/",
        "args": [
          "wd2",
          "1",
          "4"
        ]
      },
      {
        "name": "rh3",
        "op": "*/",
        "args": [
          "hd4",
          "1",
          "4"
        ]
      },
      {
        "name": "ct1",
        "op": "cos",
        "args": [
          "hd4",
          "stAng1"
        ]
      },
      {
        "name": "st1",
        "op": "sin",
        "args": [
          "wd2",
          "stAng1"
        ]
      },
      {
        "name": "m1",
        "op": "mod",
        "args": [
          "ct1",
          "st1",
          "0"
        ]
      },
      {
        "name": "n1",
        "op": "*/",
        "args": [
          "wd2",
          "hd4",
          "m1"
        ]
      },
      {
        "name": "dx1",
        "op": "cos",
        "args": [
          "n1",
          "stAng1"
        ]
      },
      {
        "name": "dy1",
        "op": "sin",
        "args": [
          "n1",
          "stAng1"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "hd4",
          "dy1",
          "0"
        ]
      },
      {
        "name": "ct3",
        "op": "cos",
        "args": [
          "rh3",
          "da"
        ]
      },
      {
        "name": "st3",
        "op": "sin",
        "args": [
          "rw3",
          "da"
        ]
      },
      {
        "name": "m3",
        "op": "mod",
        "args": [
          "ct3",
          "st3",
          "0"
        ]
      },
      {
        "name": "n3",
        "op": "*/",
        "args": [
          "rw3",
          "rh3",
          "m3"
        ]
      },
      {
        "name": "dx3",
        "op": "cos",
        "args": [
          "n3",
          "da"
        ]
      },
      {
        "name": "dy3",
        "op": "sin",
        "args": [
          "n3",
          "da"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "hc",
          "dx3",
          "0"
        ]
      },
      {
        "name": "vc3",
        "op": "+-",
        "args": [
          "b",
          "0",
          "rh3"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc3",
          "dy3",
          "0"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "wd2",
          "0",
          "rw2"
        ]
      },
      {
        "name": "cd",
        "op": "*/",
        "args": [
          "cd2",
          "2",
          "1"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd4",
              "stAng1",
              "swAng1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y2"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw3",
              "rh3",
              "da",
              "swAng3"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "x2",
              "hd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw2",
              "rh2",
              "cd2",
              "-21600000"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "gear6": {
    "adjustments": {
      "adj1": 15000,
      "adj2": 3526
    },
    "guides": [
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "20000"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "5358"
        ]
      },
      {
        "name": "th",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "lFD",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "th2",
        "op": "*/",
        "args": [
          "th",
          "1",
          "2"
        ]
      },
      {
        "name": "l2",
        "op": "*/",
        "args": [
          "lFD",
          "1",
          "2"
        ]
      },
      {
        "name": "l3",
        "op": "+-",
        "args": [
          "th2",
          "l2",
          "0"
        ]
      },
      {
        "name": "rh",
        "op": "+-",
        "args": [
          "hd2",
          "0",
          "th"
        ]
      },
      {
        "name": "rw",
        "op": "+-",
        "args": [
          "wd2",
          "0",
          "th"
        ]
      },
      {
        "name": "dr",
        "op": "+-",
        "args": [
          "rw",
          "0",
          "rh"
        ]
      },
      {
        "name": "maxr",
        "op": "?:",
        "args": [
          "dr",
          "rh",
          "rw"
        ]
      },
      {
        "name": "ha",
        "op": "at2",
        "args": [
          "maxr",
          "l3"
        ]
      },
      {
        "name": "aA1",
        "op": "+-",
        "args": [
          "19800000",
          "0",
          "ha"
        ]
      },
      {
        "name": "aD1",
        "op": "+-",
        "args": [
          "19800000",
          "ha",
          "0"
        ]
      },
      {
        "name": "ta11",
        "op": "cos",
        "args": [
          "rw",
          "aA1"
        ]
      },
      {
        "name": "ta12",
        "op": "sin",
        "args": [
          "rh",
          "aA1"
        ]
      },
      {
        "name": "bA1",
        "op": "at2",
        "args": [
          "ta11",
          "ta12"
        ]
      },
      {
        "name": "cta1",
        "op": "cos",
        "args": [
          "rh",
          "bA1"
        ]
      },
      {
        "name": "sta1",
        "op": "sin",
        "args": [
          "rw",
          "bA1"
        ]
      },
      {
        "name": "ma1",
        "op": "mod",
        "args": [
          "cta1",
          "sta1",
          "0"
        ]
      },
      {
        "name": "na1",
        "op": "*/",
        "args": [
          "rw",
          "rh",
          "ma1"
        ]
      },
      {
        "name": "dxa1",
        "op": "cos",
        "args": [
          "na1",
          "bA1"
        ]
      },
      {
        "name": "dya1",
        "op": "sin",
        "args": [
          "na1",
          "bA1"
        ]
      },
      {
        "name": "xA1",
        "op": "+-",
        "args": [
          "hc",
          "dxa1",
          "0"
        ]
      },
      {
        "name": "yA1",
        "op": "+-",
        "args": [
          "vc",
          "dya1",
          "0"
        ]
      },
      {
        "name": "td11",
        "op": "cos",
        "args": [
          "rw",
          "aD1"
        ]
      },
      {
        "name": "td12",
        "op": "sin",
        "args": [
          "rh",
          "aD1"
        ]
      },
      {
        "name": "bD1",
        "op": "at2",
        "args": [
          "td11",
          "td12"
        ]
      },
      {
        "name": "ctd1",
        "op": "cos",
        "args": [
          "rh",
          "bD1"
        ]
      },
      {
        "name": "std1",
        "op": "sin",
        "args": [
          "rw",
          "bD1"
        ]
      },
      {
        "name": "md1",
        "op": "mod",
        "args": [
          "ctd1",
          "std1",
          "0"
        ]
      },
      {
        "name": "nd1",
        "op": "*/",
        "args": [
          "rw",
          "rh",
          "md1"
        ]
      },
      {
        "name": "dxd1",
        "op": "cos",
        "args": [
          "nd1",
          "bD1"
        ]
      },
      {
        "name": "dyd1",
        "op": "sin",
        "args": [
          "nd1",
          "bD1"
        ]
      },
      {
        "name": "xD1",
        "op": "+-",
        "args": [
          "hc",
          "dxd1",
          "0"
        ]
      },
      {
        "name": "yD1",
        "op": "+-",
        "args": [
          "vc",
          "dyd1",
          "0"
        ]
      },
      {
        "name": "xAD1",
        "op": "+-",
        "args": [
          "xA1",
          "0",
          "xD1"
        ]
      },
      {
        "name": "yAD1",
        "op": "+-",
        "args": [
          "yA1",
          "0",
          "yD1"
        ]
      },
      {
        "name": "lAD1",
        "op": "mod",
        "args": [
          "xAD1",
          "yAD1",
          "0"
        ]
      },
      {
        "name": "a1",
        "op": "at2",
        "args": [
          "yAD1",
          "xAD1"
        ]
      },
      {
        "name": "dxF1",
        "op": "sin",
        "args": [
          "lFD",
          "a1"
        ]
      },
      {
        "name": "dyF1",
        "op": "cos",
        "args": [
          "lFD",
          "a1"
        ]
      },
      {
        "name": "xF1",
        "op": "+-",
        "args": [
          "xD1",
          "dxF1",
          "0"
        ]
      },
      {
        "name": "yF1",
        "op": "+-",
        "args": [
          "yD1",
          "dyF1",
          "0"
        ]
      },
      {
        "name": "xE1",
        "op": "+-",
        "args": [
          "xA1",
          "0",
          "dxF1"
        ]
      },
      {
        "name": "yE1",
        "op": "+-",
        "args": [
          "yA1",
          "0",
          "dyF1"
        ]
      },
      {
        "name": "yC1t",
        "op": "sin",
        "args": [
          "th",
          "a1"
        ]
      },
      {
        "name": "xC1t",
        "op": "cos",
        "args": [
          "th",
          "a1"
        ]
      },
      {
        "name": "yC1",
        "op": "+-",
        "args": [
          "yF1",
          "yC1t",
          "0"
        ]
      },
      {
        "name": "xC1",
        "op": "+-",
        "args": [
          "xF1",
          "0",
          "xC1t"
        ]
      },
      {
        "name": "yB1",
        "op": "+-",
        "args": [
          "yE1",
          "yC1t",
          "0"
        ]
      },
      {
        "name": "xB1",
        "op": "+-",
        "args": [
          "xE1",
          "0",
          "xC1t"
        ]
      },
      {
        "name": "aD6",
        "op": "+-",
        "args": [
          "3cd4",
          "ha",
          "0"
        ]
      },
      {
        "name": "td61",
        "op": "cos",
        "args": [
          "rw",
          "aD6"
        ]
      },
      {
        "name": "td62",
        "op": "sin",
        "args": [
          "rh",
          "aD6"
        ]
      },
      {
        "name": "bD6",
        "op": "at2",
        "args": [
          "td61",
          "td62"
        ]
      },
      {
        "name": "ctd6",
        "op": "cos",
        "args": [
          "rh",
          "bD6"
        ]
      },
      {
        "name": "std6",
        "op": "sin",
        "args": [
          "rw",
          "bD6"
        ]
      },
      {
        "name": "md6",
        "op": "mod",
        "args": [
          "ctd6",
          "std6",
          "0"
        ]
      },
      {
        "name": "nd6",
        "op": "*/",
        "args": [
          "rw",
          "rh",
          "md6"
        ]
      },
      {
        "name": "dxd6",
        "op": "cos",
        "args": [
          "nd6",
          "bD6"
        ]
      },
      {
        "name": "dyd6",
        "op": "sin",
        "args": [
          "nd6",
          "bD6"
        ]
      },
      {
        "name": "xD6",
        "op": "+-",
        "args": [
          "hc",
          "dxd6",
          "0"
        ]
      },
      {
        "name": "yD6",
        "op": "+-",
        "args": [
          "vc",
          "dyd6",
          "0"
        ]
      },
      {
        "name": "xA6",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dxd6"
        ]
      },
      {
        "name": "xF6",
        "op": "+-",
        "args": [
          "xD6",
          "0",
          "lFD"
        ]
      },
      {
        "name": "xE6",
        "op": "+-",
        "args": [
          "xA6",
          "lFD",
          "0"
        ]
      },
      {
        "name": "yC6",
        "op": "+-",
        "args": [
          "yD6",
          "0",
          "th"
        ]
      },
      {
        "name": "swAng1",
        "op": "+-",
        "args": [
          "bA1",
          "0",
          "bD6"
        ]
      },
      {
        "name": "aA2",
        "op": "+-",
        "args": [
          "1800000",
          "0",
          "ha"
        ]
      },
      {
        "name": "aD2",
        "op": "+-",
        "args": [
          "1800000",
          "ha",
          "0"
        ]
      },
      {
        "name": "ta21",
        "op": "cos",
        "args": [
          "rw",
          "aA2"
        ]
      },
      {
        "name": "ta22",
        "op": "sin",
        "args": [
          "rh",
          "aA2"
        ]
      },
      {
        "name": "bA2",
        "op": "at2",
        "args": [
          "ta21",
          "ta22"
        ]
      },
      {
        "name": "yA2",
        "op": "+-",
        "args": [
          "h",
          "0",
          "yD1"
        ]
      },
      {
        "name": "td21",
        "op": "cos",
        "args": [
          "rw",
          "aD2"
        ]
      },
      {
        "name": "td22",
        "op": "sin",
        "args": [
          "rh",
          "aD2"
        ]
      },
      {
        "name": "bD2",
        "op": "at2",
        "args": [
          "td21",
          "td22"
        ]
      },
      {
        "name": "yD2",
        "op": "+-",
        "args": [
          "h",
          "0",
          "yA1"
        ]
      },
      {
        "name": "yC2",
        "op": "+-",
        "args": [
          "h",
          "0",
          "yB1"
        ]
      },
      {
        "name": "yB2",
        "op": "+-",
        "args": [
          "h",
          "0",
          "yC1"
        ]
      },
      {
        "name": "xB2",
        "op": "val",
        "args": [
          "xC1"
        ]
      },
      {
        "name": "swAng2",
        "op": "+-",
        "args": [
          "bA2",
          "0",
          "bD1"
        ]
      },
      {
        "name": "aD3",
        "op": "+-",
        "args": [
          "cd4",
          "ha",
          "0"
        ]
      },
      {
        "name": "td31",
        "op": "cos",
        "args": [
          "rw",
          "aD3"
        ]
      },
      {
        "name": "td32",
        "op": "sin",
        "args": [
          "rh",
          "aD3"
        ]
      },
      {
        "name": "bD3",
        "op": "at2",
        "args": [
          "td31",
          "td32"
        ]
      },
      {
        "name": "yD3",
        "op": "+-",
        "args": [
          "h",
          "0",
          "yD6"
        ]
      },
      {
        "name": "yB3",
        "op": "+-",
        "args": [
          "h",
          "0",
          "yC6"
        ]
      },
      {
        "name": "aD4",
        "op": "+-",
        "args": [
          "9000000",
          "ha",
          "0"
        ]
      },
      {
        "name": "td41",
        "op": "cos",
        "args": [
          "rw",
          "aD4"
        ]
      },
      {
        "name": "td42",
        "op": "sin",
        "args": [
          "rh",
          "aD4"
        ]
      },
      {
        "name": "bD4",
        "op": "at2",
        "args": [
          "td41",
          "td42"
        ]
      },
      {
        "name": "xD4",
        "op": "+-",
        "args": [
          "w",
          "0",
          "xD1"
        ]
      },
      {
        "name": "xC4",
        "op": "+-",
        "args": [
          "w",
          "0",
          "xC1"
        ]
      },
      {
        "name": "xB4",
        "op": "+-",
        "args": [
          "w",
          "0",
          "xB1"
        ]
      },
      {
        "name": "aD5",
        "op": "+-",
        "args": [
          "12600000",
          "ha",
          "0"
        ]
      },
      {
        "name": "td51",
        "op": "cos",
        "args": [
          "rw",
          "aD5"
        ]
      },
      {
        "name": "td52",
        "op": "sin",
        "args": [
          "rh",
          "aD5"
        ]
      },
      {
        "name": "bD5",
        "op": "at2",
        "args": [
          "td51",
          "td52"
        ]
      },
      {
        "name": "xD5",
        "op": "+-",
        "args": [
          "w",
          "0",
          "xA1"
        ]
      },
      {
        "name": "xC5",
        "op": "+-",
        "args": [
          "w",
          "0",
          "xB1"
        ]
      },
      {
        "name": "xB5",
        "op": "+-",
        "args": [
          "w",
          "0",
          "xC1"
        ]
      },
      {
        "name": "xCxn1",
        "op": "+/",
        "args": [
          "xB1",
          "xC1",
          "2"
        ]
      },
      {
        "name": "yCxn1",
        "op": "+/",
        "args": [
          "yB1",
          "yC1",
          "2"
        ]
      },
      {
        "name": "yCxn2",
        "op": "+-",
        "args": [
          "b",
          "0",
          "yCxn1"
        ]
      },
      {
        "name": "xCxn4",
        "op": "+/",
        "args": [
          "r",
          "0",
          "xCxn1"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "xA1",
              "yA1"
            ]
          },
          {
            "type": "L",
            "data": [
              "xB1",
              "yB1"
            ]
          },
          {
            "type": "L",
            "data": [
              "xC1",
              "yC1"
            ]
          },
          {
            "type": "L",
            "data": [
              "xD1",
              "yD1"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw",
              "rh",
              "bD1",
              "swAng2"
            ]
          },
          {
            "type": "L",
            "data": [
              "xC1",
              "yB2"
            ]
          },
          {
            "type": "L",
            "data": [
              "xB1",
              "yC2"
            ]
          },
          {
            "type": "L",
            "data": [
              "xA1",
              "yD2"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw",
              "rh",
              "bD2",
              "swAng1"
            ]
          },
          {
            "type": "L",
            "data": [
              "xF6",
              "yB3"
            ]
          },
          {
            "type": "L",
            "data": [
              "xE6",
              "yB3"
            ]
          },
          {
            "type": "L",
            "data": [
              "xA6",
              "yD3"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw",
              "rh",
              "bD3",
              "swAng1"
            ]
          },
          {
            "type": "L",
            "data": [
              "xB4",
              "yC2"
            ]
          },
          {
            "type": "L",
            "data": [
              "xC4",
              "yB2"
            ]
          },
          {
            "type": "L",
            "data": [
              "xD4",
              "yA2"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw",
              "rh",
              "bD4",
              "swAng2"
            ]
          },
          {
            "type": "L",
            "data": [
              "xB5",
              "yC1"
            ]
          },
          {
            "type": "L",
            "data": [
              "xC5",
              "yB1"
            ]
          },
          {
            "type": "L",
            "data": [
              "xD5",
              "yA1"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw",
              "rh",
              "bD5",
              "swAng1"
            ]
          },
          {
            "type": "L",
            "data": [
              "xE6",
              "yC6"
            ]
          },
          {
            "type": "L",
            "data": [
              "xF6",
              "yC6"
            ]
          },
          {
            "type": "L",
            "data": [
              "xD6",
              "yD6"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw",
              "rh",
              "bD6",
              "swAng1"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "xD5",
      "t": "yA1",
      "r": "xA1",
      "b": "yD2"
    }
  },
  "gear9": {
    "adjustments": {
      "adj1": 10000,
      "adj2": 1763
    },
    "guides": [
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "20000"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "2679"
        ]
      },
      {
        "name": "th",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "lFD",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "th2",
        "op": "*/",
        "args": [
          "th",
          "1",
          "2"
        ]
      },
      {
        "name": "l2",
        "op": "*/",
        "args": [
          "lFD",
          "1",
          "2"
        ]
      },
      {
        "name": "l3",
        "op": "+-",
        "args": [
          "th2",
          "l2",
          "0"
        ]
      },
      {
        "name": "rh",
        "op": "+-",
        "args": [
          "hd2",
          "0",
          "th"
        ]
      },
      {
        "name": "rw",
        "op": "+-",
        "args": [
          "wd2",
          "0",
          "th"
        ]
      },
      {
        "name": "dr",
        "op": "+-",
        "args": [
          "rw",
          "0",
          "rh"
        ]
      },
      {
        "name": "maxr",
        "op": "?:",
        "args": [
          "dr",
          "rh",
          "rw"
        ]
      },
      {
        "name": "ha",
        "op": "at2",
        "args": [
          "maxr",
          "l3"
        ]
      },
      {
        "name": "aA1",
        "op": "+-",
        "args": [
          "18600000",
          "0",
          "ha"
        ]
      },
      {
        "name": "aD1",
        "op": "+-",
        "args": [
          "18600000",
          "ha",
          "0"
        ]
      },
      {
        "name": "ta11",
        "op": "cos",
        "args": [
          "rw",
          "aA1"
        ]
      },
      {
        "name": "ta12",
        "op": "sin",
        "args": [
          "rh",
          "aA1"
        ]
      },
      {
        "name": "bA1",
        "op": "at2",
        "args": [
          "ta11",
          "ta12"
        ]
      },
      {
        "name": "cta1",
        "op": "cos",
        "args": [
          "rh",
          "bA1"
        ]
      },
      {
        "name": "sta1",
        "op": "sin",
        "args": [
          "rw",
          "bA1"
        ]
      },
      {
        "name": "ma1",
        "op": "mod",
        "args": [
          "cta1",
          "sta1",
          "0"
        ]
      },
      {
        "name": "na1",
        "op": "*/",
        "args": [
          "rw",
          "rh",
          "ma1"
        ]
      },
      {
        "name": "dxa1",
        "op": "cos",
        "args": [
          "na1",
          "bA1"
        ]
      },
      {
        "name": "dya1",
        "op": "sin",
        "args": [
          "na1",
          "bA1"
        ]
      },
      {
        "name": "xA1",
        "op": "+-",
        "args": [
          "hc",
          "dxa1",
          "0"
        ]
      },
      {
        "name": "yA1",
        "op": "+-",
        "args": [
          "vc",
          "dya1",
          "0"
        ]
      },
      {
        "name": "td11",
        "op": "cos",
        "args": [
          "rw",
          "aD1"
        ]
      },
      {
        "name": "td12",
        "op": "sin",
        "args": [
          "rh",
          "aD1"
        ]
      },
      {
        "name": "bD1",
        "op": "at2",
        "args": [
          "td11",
          "td12"
        ]
      },
      {
        "name": "ctd1",
        "op": "cos",
        "args": [
          "rh",
          "bD1"
        ]
      },
      {
        "name": "std1",
        "op": "sin",
        "args": [
          "rw",
          "bD1"
        ]
      },
      {
        "name": "md1",
        "op": "mod",
        "args": [
          "ctd1",
          "std1",
          "0"
        ]
      },
      {
        "name": "nd1",
        "op": "*/",
        "args": [
          "rw",
          "rh",
          "md1"
        ]
      },
      {
        "name": "dxd1",
        "op": "cos",
        "args": [
          "nd1",
          "bD1"
        ]
      },
      {
        "name": "dyd1",
        "op": "sin",
        "args": [
          "nd1",
          "bD1"
        ]
      },
      {
        "name": "xD1",
        "op": "+-",
        "args": [
          "hc",
          "dxd1",
          "0"
        ]
      },
      {
        "name": "yD1",
        "op": "+-",
        "args": [
          "vc",
          "dyd1",
          "0"
        ]
      },
      {
        "name": "xAD1",
        "op": "+-",
        "args": [
          "xA1",
          "0",
          "xD1"
        ]
      },
      {
        "name": "yAD1",
        "op": "+-",
        "args": [
          "yA1",
          "0",
          "yD1"
        ]
      },
      {
        "name": "lAD1",
        "op": "mod",
        "args": [
          "xAD1",
          "yAD1",
          "0"
        ]
      },
      {
        "name": "a1",
        "op": "at2",
        "args": [
          "yAD1",
          "xAD1"
        ]
      },
      {
        "name": "dxF1",
        "op": "sin",
        "args": [
          "lFD",
          "a1"
        ]
      },
      {
        "name": "dyF1",
        "op": "cos",
        "args": [
          "lFD",
          "a1"
        ]
      },
      {
        "name": "xF1",
        "op": "+-",
        "args": [
          "xD1",
          "dxF1",
          "0"
        ]
      },
      {
        "name": "yF1",
        "op": "+-",
        "args": [
          "yD1",
          "dyF1",
          "0"
        ]
      },
      {
        "name": "xE1",
        "op": "+-",
        "args": [
          "xA1",
          "0",
          "dxF1"
        ]
      },
      {
        "name": "yE1",
        "op": "+-",
        "args": [
          "yA1",
          "0",
          "dyF1"
        ]
      },
      {
        "name": "yC1t",
        "op": "sin",
        "args": [
          "th",
          "a1"
        ]
      },
      {
        "name": "xC1t",
        "op": "cos",
        "args": [
          "th",
          "a1"
        ]
      },
      {
        "name": "yC1",
        "op": "+-",
        "args": [
          "yF1",
          "yC1t",
          "0"
        ]
      },
      {
        "name": "xC1",
        "op": "+-",
        "args": [
          "xF1",
          "0",
          "xC1t"
        ]
      },
      {
        "name": "yB1",
        "op": "+-",
        "args": [
          "yE1",
          "yC1t",
          "0"
        ]
      },
      {
        "name": "xB1",
        "op": "+-",
        "args": [
          "xE1",
          "0",
          "xC1t"
        ]
      },
      {
        "name": "aA2",
        "op": "+-",
        "args": [
          "21000000",
          "0",
          "ha"
        ]
      },
      {
        "name": "aD2",
        "op": "+-",
        "args": [
          "21000000",
          "ha",
          "0"
        ]
      },
      {
        "name": "ta21",
        "op": "cos",
        "args": [
          "rw",
          "aA2"
        ]
      },
      {
        "name": "ta22",
        "op": "sin",
        "args": [
          "rh",
          "aA2"
        ]
      },
      {
        "name": "bA2",
        "op": "at2",
        "args": [
          "ta21",
          "ta22"
        ]
      },
      {
        "name": "cta2",
        "op": "cos",
        "args": [
          "rh",
          "bA2"
        ]
      },
      {
        "name": "sta2",
        "op": "sin",
        "args": [
          "rw",
          "bA2"
        ]
      },
      {
        "name": "ma2",
        "op": "mod",
        "args": [
          "cta2",
          "sta2",
          "0"
        ]
      },
      {
        "name": "na2",
        "op": "*/",
        "args": [
          "rw",
          "rh",
          "ma2"
        ]
      },
      {
        "name": "dxa2",
        "op": "cos",
        "args": [
          "na2",
          "bA2"
        ]
      },
      {
        "name": "dya2",
        "op": "sin",
        "args": [
          "na2",
          "bA2"
        ]
      },
      {
        "name": "xA2",
        "op": "+-",
        "args": [
          "hc",
          "dxa2",
          "0"
        ]
      },
      {
        "name": "yA2",
        "op": "+-",
        "args": [
          "vc",
          "dya2",
          "0"
        ]
      },
      {
        "name": "td21",
        "op": "cos",
        "args": [
          "rw",
          "aD2"
        ]
      },
      {
        "name": "td22",
        "op": "sin",
        "args": [
          "rh",
          "aD2"
        ]
      },
      {
        "name": "bD2",
        "op": "at2",
        "args": [
          "td21",
          "td22"
        ]
      },
      {
        "name": "ctd2",
        "op": "cos",
        "args": [
          "rh",
          "bD2"
        ]
      },
      {
        "name": "std2",
        "op": "sin",
        "args": [
          "rw",
          "bD2"
        ]
      },
      {
        "name": "md2",
        "op": "mod",
        "args": [
          "ctd2",
          "std2",
          "0"
        ]
      },
      {
        "name": "nd2",
        "op": "*/",
        "args": [
          "rw",
          "rh",
          "md2"
        ]
      },
      {
        "name": "dxd2",
        "op": "cos",
        "args": [
          "nd2",
          "bD2"
        ]
      },
      {
        "name": "dyd2",
        "op": "sin",
        "args": [
          "nd2",
          "bD2"
        ]
      },
      {
        "name": "xD2",
        "op": "+-",
        "args": [
          "hc",
          "dxd2",
          "0"
        ]
      },
      {
        "name": "yD2",
        "op": "+-",
        "args": [
          "vc",
          "dyd2",
          "0"
        ]
      },
      {
        "name": "xAD2",
        "op": "+-",
        "args": [
          "xA2",
          "0",
          "xD2"
        ]
      },
      {
        "name": "yAD2",
        "op": "+-",
        "args": [
          "yA2",
          "0",
          "yD2"
        ]
      },
      {
        "name": "lAD2",
        "op": "mod",
        "args": [
          "xAD2",
          "yAD2",
          "0"
        ]
      },
      {
        "name": "a2",
        "op": "at2",
        "args": [
          "yAD2",
          "xAD2"
        ]
      },
      {
        "name": "dxF2",
        "op": "sin",
        "args": [
          "lFD",
          "a2"
        ]
      },
      {
        "name": "dyF2",
        "op": "cos",
        "args": [
          "lFD",
          "a2"
        ]
      },
      {
        "name": "xF2",
        "op": "+-",
        "args": [
          "xD2",
          "dxF2",
          "0"
        ]
      },
      {
        "name": "yF2",
        "op": "+-",
        "args": [
          "yD2",
          "dyF2",
          "0"
        ]
      },
      {
        "name": "xE2",
        "op": "+-",
        "args": [
          "xA2",
          "0",
          "dxF2"
        ]
      },
      {
        "name": "yE2",
        "op": "+-",
        "args": [
          "yA2",
          "0",
          "dyF2"
        ]
      },
      {
        "name": "yC2t",
        "op": "sin",
        "args": [
          "th",
          "a2"
        ]
      },
      {
        "name": "xC2t",
        "op": "cos",
        "args": [
          "th",
          "a2"
        ]
      },
      {
        "name": "yC2",
        "op": "+-",
        "args": [
          "yF2",
          "yC2t",
          "0"
        ]
      },
      {
        "name": "xC2",
        "op": "+-",
        "args": [
          "xF2",
          "0",
          "xC2t"
        ]
      },
      {
        "name": "yB2",
        "op": "+-",
        "args": [
          "yE2",
          "yC2t",
          "0"
        ]
      },
      {
        "name": "xB2",
        "op": "+-",
        "args": [
          "xE2",
          "0",
          "xC2t"
        ]
      },
      {
        "name": "swAng1",
        "op": "+-",
        "args": [
          "bA2",
          "0",
          "bD1"
        ]
      },
      {
        "name": "aA3",
        "op": "+-",
        "args": [
          "1800000",
          "0",
          "ha"
        ]
      },
      {
        "name": "aD3",
        "op": "+-",
        "args": [
          "1800000",
          "ha",
          "0"
        ]
      },
      {
        "name": "ta31",
        "op": "cos",
        "args": [
          "rw",
          "aA3"
        ]
      },
      {
        "name": "ta32",
        "op": "sin",
        "args": [
          "rh",
          "aA3"
        ]
      },
      {
        "name": "bA3",
        "op": "at2",
        "args": [
          "ta31",
          "ta32"
        ]
      },
      {
        "name": "cta3",
        "op": "cos",
        "args": [
          "rh",
          "bA3"
        ]
      },
      {
        "name": "sta3",
        "op": "sin",
        "args": [
          "rw",
          "bA3"
        ]
      },
      {
        "name": "ma3",
        "op": "mod",
        "args": [
          "cta3",
          "sta3",
          "0"
        ]
      },
      {
        "name": "na3",
        "op": "*/",
        "args": [
          "rw",
          "rh",
          "ma3"
        ]
      },
      {
        "name": "dxa3",
        "op": "cos",
        "args": [
          "na3",
          "bA3"
        ]
      },
      {
        "name": "dya3",
        "op": "sin",
        "args": [
          "na3",
          "bA3"
        ]
      },
      {
        "name": "xA3",
        "op": "+-",
        "args": [
          "hc",
          "dxa3",
          "0"
        ]
      },
      {
        "name": "yA3",
        "op": "+-",
        "args": [
          "vc",
          "dya3",
          "0"
        ]
      },
      {
        "name": "td31",
        "op": "cos",
        "args": [
          "rw",
          "aD3"
        ]
      },
      {
        "name": "td32",
        "op": "sin",
        "args": [
          "rh",
          "aD3"
        ]
      },
      {
        "name": "bD3",
        "op": "at2",
        "args": [
          "td31",
          "td32"
        ]
      },
      {
        "name": "ctd3",
        "op": "cos",
        "args": [
          "rh",
          "bD3"
        ]
      },
      {
        "name": "std3",
        "op": "sin",
        "args": [
          "rw",
          "bD3"
        ]
      },
      {
        "name": "md3",
        "op": "mod",
        "args": [
          "ctd3",
          "std3",
          "0"
        ]
      },
      {
        "name": "nd3",
        "op": "*/",
        "args": [
          "rw",
          "rh",
          "md3"
        ]
      },
      {
        "name": "dxd3",
        "op": "cos",
        "args": [
          "nd3",
          "bD3"
        ]
      },
      {
        "name": "dyd3",
        "op": "sin",
        "args": [
          "nd3",
          "bD3"
        ]
      },
      {
        "name": "xD3",
        "op": "+-",
        "args": [
          "hc",
          "dxd3",
          "0"
        ]
      },
      {
        "name": "yD3",
        "op": "+-",
        "args": [
          "vc",
          "dyd3",
          "0"
        ]
      },
      {
        "name": "xAD3",
        "op": "+-",
        "args": [
          "xA3",
          "0",
          "xD3"
        ]
      },
      {
        "name": "yAD3",
        "op": "+-",
        "args": [
          "yA3",
          "0",
          "yD3"
        ]
      },
      {
        "name": "lAD3",
        "op": "mod",
        "args": [
          "xAD3",
          "yAD3",
          "0"
        ]
      },
      {
        "name": "a3",
        "op": "at2",
        "args": [
          "yAD3",
          "xAD3"
        ]
      },
      {
        "name": "dxF3",
        "op": "sin",
        "args": [
          "lFD",
          "a3"
        ]
      },
      {
        "name": "dyF3",
        "op": "cos",
        "args": [
          "lFD",
          "a3"
        ]
      },
      {
        "name": "xF3",
        "op": "+-",
        "args": [
          "xD3",
          "dxF3",
          "0"
        ]
      },
      {
        "name": "yF3",
        "op": "+-",
        "args": [
          "yD3",
          "dyF3",
          "0"
        ]
      },
      {
        "name": "xE3",
        "op": "+-",
        "args": [
          "xA3",
          "0",
          "dxF3"
        ]
      },
      {
        "name": "yE3",
        "op": "+-",
        "args": [
          "yA3",
          "0",
          "dyF3"
        ]
      },
      {
        "name": "yC3t",
        "op": "sin",
        "args": [
          "th",
          "a3"
        ]
      },
      {
        "name": "xC3t",
        "op": "cos",
        "args": [
          "th",
          "a3"
        ]
      },
      {
        "name": "yC3",
        "op": "+-",
        "args": [
          "yF3",
          "yC3t",
          "0"
        ]
      },
      {
        "name": "xC3",
        "op": "+-",
        "args": [
          "xF3",
          "0",
          "xC3t"
        ]
      },
      {
        "name": "yB3",
        "op": "+-",
        "args": [
          "yE3",
          "yC3t",
          "0"
        ]
      },
      {
        "name": "xB3",
        "op": "+-",
        "args": [
          "xE3",
          "0",
          "xC3t"
        ]
      },
      {
        "name": "swAng2",
        "op": "+-",
        "args": [
          "bA3",
          "0",
          "bD2"
        ]
      },
      {
        "name": "aA4",
        "op": "+-",
        "args": [
          "4200000",
          "0",
          "ha"
        ]
      },
      {
        "name": "aD4",
        "op": "+-",
        "args": [
          "4200000",
          "ha",
          "0"
        ]
      },
      {
        "name": "ta41",
        "op": "cos",
        "args": [
          "rw",
          "aA4"
        ]
      },
      {
        "name": "ta42",
        "op": "sin",
        "args": [
          "rh",
          "aA4"
        ]
      },
      {
        "name": "bA4",
        "op": "at2",
        "args": [
          "ta41",
          "ta42"
        ]
      },
      {
        "name": "cta4",
        "op": "cos",
        "args": [
          "rh",
          "bA4"
        ]
      },
      {
        "name": "sta4",
        "op": "sin",
        "args": [
          "rw",
          "bA4"
        ]
      },
      {
        "name": "ma4",
        "op": "mod",
        "args": [
          "cta4",
          "sta4",
          "0"
        ]
      },
      {
        "name": "na4",
        "op": "*/",
        "args": [
          "rw",
          "rh",
          "ma4"
        ]
      },
      {
        "name": "dxa4",
        "op": "cos",
        "args": [
          "na4",
          "bA4"
        ]
      },
      {
        "name": "dya4",
        "op": "sin",
        "args": [
          "na4",
          "bA4"
        ]
      },
      {
        "name": "xA4",
        "op": "+-",
        "args": [
          "hc",
          "dxa4",
          "0"
        ]
      },
      {
        "name": "yA4",
        "op": "+-",
        "args": [
          "vc",
          "dya4",
          "0"
        ]
      },
      {
        "name": "td41",
        "op": "cos",
        "args": [
          "rw",
          "aD4"
        ]
      },
      {
        "name": "td42",
        "op": "sin",
        "args": [
          "rh",
          "aD4"
        ]
      },
      {
        "name": "bD4",
        "op": "at2",
        "args": [
          "td41",
          "td42"
        ]
      },
      {
        "name": "ctd4",
        "op": "cos",
        "args": [
          "rh",
          "bD4"
        ]
      },
      {
        "name": "std4",
        "op": "sin",
        "args": [
          "rw",
          "bD4"
        ]
      },
      {
        "name": "md4",
        "op": "mod",
        "args": [
          "ctd4",
          "std4",
          "0"
        ]
      },
      {
        "name": "nd4",
        "op": "*/",
        "args": [
          "rw",
          "rh",
          "md4"
        ]
      },
      {
        "name": "dxd4",
        "op": "cos",
        "args": [
          "nd4",
          "bD4"
        ]
      },
      {
        "name": "dyd4",
        "op": "sin",
        "args": [
          "nd4",
          "bD4"
        ]
      },
      {
        "name": "xD4",
        "op": "+-",
        "args": [
          "hc",
          "dxd4",
          "0"
        ]
      },
      {
        "name": "yD4",
        "op": "+-",
        "args": [
          "vc",
          "dyd4",
          "0"
        ]
      },
      {
        "name": "xAD4",
        "op": "+-",
        "args": [
          "xA4",
          "0",
          "xD4"
        ]
      },
      {
        "name": "yAD4",
        "op": "+-",
        "args": [
          "yA4",
          "0",
          "yD4"
        ]
      },
      {
        "name": "lAD4",
        "op": "mod",
        "args": [
          "xAD4",
          "yAD4",
          "0"
        ]
      },
      {
        "name": "a4",
        "op": "at2",
        "args": [
          "yAD4",
          "xAD4"
        ]
      },
      {
        "name": "dxF4",
        "op": "sin",
        "args": [
          "lFD",
          "a4"
        ]
      },
      {
        "name": "dyF4",
        "op": "cos",
        "args": [
          "lFD",
          "a4"
        ]
      },
      {
        "name": "xF4",
        "op": "+-",
        "args": [
          "xD4",
          "dxF4",
          "0"
        ]
      },
      {
        "name": "yF4",
        "op": "+-",
        "args": [
          "yD4",
          "dyF4",
          "0"
        ]
      },
      {
        "name": "xE4",
        "op": "+-",
        "args": [
          "xA4",
          "0",
          "dxF4"
        ]
      },
      {
        "name": "yE4",
        "op": "+-",
        "args": [
          "yA4",
          "0",
          "dyF4"
        ]
      },
      {
        "name": "yC4t",
        "op": "sin",
        "args": [
          "th",
          "a4"
        ]
      },
      {
        "name": "xC4t",
        "op": "cos",
        "args": [
          "th",
          "a4"
        ]
      },
      {
        "name": "yC4",
        "op": "+-",
        "args": [
          "yF4",
          "yC4t",
          "0"
        ]
      },
      {
        "name": "xC4",
        "op": "+-",
        "args": [
          "xF4",
          "0",
          "xC4t"
        ]
      },
      {
        "name": "yB4",
        "op": "+-",
        "args": [
          "yE4",
          "yC4t",
          "0"
        ]
      },
      {
        "name": "xB4",
        "op": "+-",
        "args": [
          "xE4",
          "0",
          "xC4t"
        ]
      },
      {
        "name": "swAng3",
        "op": "+-",
        "args": [
          "bA4",
          "0",
          "bD3"
        ]
      },
      {
        "name": "aA5",
        "op": "+-",
        "args": [
          "6600000",
          "0",
          "ha"
        ]
      },
      {
        "name": "aD5",
        "op": "+-",
        "args": [
          "6600000",
          "ha",
          "0"
        ]
      },
      {
        "name": "ta51",
        "op": "cos",
        "args": [
          "rw",
          "aA5"
        ]
      },
      {
        "name": "ta52",
        "op": "sin",
        "args": [
          "rh",
          "aA5"
        ]
      },
      {
        "name": "bA5",
        "op": "at2",
        "args": [
          "ta51",
          "ta52"
        ]
      },
      {
        "name": "td51",
        "op": "cos",
        "args": [
          "rw",
          "aD5"
        ]
      },
      {
        "name": "td52",
        "op": "sin",
        "args": [
          "rh",
          "aD5"
        ]
      },
      {
        "name": "bD5",
        "op": "at2",
        "args": [
          "td51",
          "td52"
        ]
      },
      {
        "name": "xD5",
        "op": "+-",
        "args": [
          "w",
          "0",
          "xA4"
        ]
      },
      {
        "name": "xC5",
        "op": "+-",
        "args": [
          "w",
          "0",
          "xB4"
        ]
      },
      {
        "name": "xB5",
        "op": "+-",
        "args": [
          "w",
          "0",
          "xC4"
        ]
      },
      {
        "name": "swAng4",
        "op": "+-",
        "args": [
          "bA5",
          "0",
          "bD4"
        ]
      },
      {
        "name": "aD6",
        "op": "+-",
        "args": [
          "9000000",
          "ha",
          "0"
        ]
      },
      {
        "name": "td61",
        "op": "cos",
        "args": [
          "rw",
          "aD6"
        ]
      },
      {
        "name": "td62",
        "op": "sin",
        "args": [
          "rh",
          "aD6"
        ]
      },
      {
        "name": "bD6",
        "op": "at2",
        "args": [
          "td61",
          "td62"
        ]
      },
      {
        "name": "xD6",
        "op": "+-",
        "args": [
          "w",
          "0",
          "xA3"
        ]
      },
      {
        "name": "xC6",
        "op": "+-",
        "args": [
          "w",
          "0",
          "xB3"
        ]
      },
      {
        "name": "xB6",
        "op": "+-",
        "args": [
          "w",
          "0",
          "xC3"
        ]
      },
      {
        "name": "aD7",
        "op": "+-",
        "args": [
          "11400000",
          "ha",
          "0"
        ]
      },
      {
        "name": "td71",
        "op": "cos",
        "args": [
          "rw",
          "aD7"
        ]
      },
      {
        "name": "td72",
        "op": "sin",
        "args": [
          "rh",
          "aD7"
        ]
      },
      {
        "name": "bD7",
        "op": "at2",
        "args": [
          "td71",
          "td72"
        ]
      },
      {
        "name": "xD7",
        "op": "+-",
        "args": [
          "w",
          "0",
          "xA2"
        ]
      },
      {
        "name": "xC7",
        "op": "+-",
        "args": [
          "w",
          "0",
          "xB2"
        ]
      },
      {
        "name": "xB7",
        "op": "+-",
        "args": [
          "w",
          "0",
          "xC2"
        ]
      },
      {
        "name": "aD8",
        "op": "+-",
        "args": [
          "13800000",
          "ha",
          "0"
        ]
      },
      {
        "name": "td81",
        "op": "cos",
        "args": [
          "rw",
          "aD8"
        ]
      },
      {
        "name": "td82",
        "op": "sin",
        "args": [
          "rh",
          "aD8"
        ]
      },
      {
        "name": "bD8",
        "op": "at2",
        "args": [
          "td81",
          "td82"
        ]
      },
      {
        "name": "xA8",
        "op": "+-",
        "args": [
          "w",
          "0",
          "xD1"
        ]
      },
      {
        "name": "xD8",
        "op": "+-",
        "args": [
          "w",
          "0",
          "xA1"
        ]
      },
      {
        "name": "xC8",
        "op": "+-",
        "args": [
          "w",
          "0",
          "xB1"
        ]
      },
      {
        "name": "xB8",
        "op": "+-",
        "args": [
          "w",
          "0",
          "xC1"
        ]
      },
      {
        "name": "aA9",
        "op": "+-",
        "args": [
          "3cd4",
          "0",
          "ha"
        ]
      },
      {
        "name": "aD9",
        "op": "+-",
        "args": [
          "3cd4",
          "ha",
          "0"
        ]
      },
      {
        "name": "td91",
        "op": "cos",
        "args": [
          "rw",
          "aD9"
        ]
      },
      {
        "name": "td92",
        "op": "sin",
        "args": [
          "rh",
          "aD9"
        ]
      },
      {
        "name": "bD9",
        "op": "at2",
        "args": [
          "td91",
          "td92"
        ]
      },
      {
        "name": "ctd9",
        "op": "cos",
        "args": [
          "rh",
          "bD9"
        ]
      },
      {
        "name": "std9",
        "op": "sin",
        "args": [
          "rw",
          "bD9"
        ]
      },
      {
        "name": "md9",
        "op": "mod",
        "args": [
          "ctd9",
          "std9",
          "0"
        ]
      },
      {
        "name": "nd9",
        "op": "*/",
        "args": [
          "rw",
          "rh",
          "md9"
        ]
      },
      {
        "name": "dxd9",
        "op": "cos",
        "args": [
          "nd9",
          "bD9"
        ]
      },
      {
        "name": "dyd9",
        "op": "sin",
        "args": [
          "nd9",
          "bD9"
        ]
      },
      {
        "name": "xD9",
        "op": "+-",
        "args": [
          "hc",
          "dxd9",
          "0"
        ]
      },
      {
        "name": "yD9",
        "op": "+-",
        "args": [
          "vc",
          "dyd9",
          "0"
        ]
      },
      {
        "name": "ta91",
        "op": "cos",
        "args": [
          "rw",
          "aA9"
        ]
      },
      {
        "name": "ta92",
        "op": "sin",
        "args": [
          "rh",
          "aA9"
        ]
      },
      {
        "name": "bA9",
        "op": "at2",
        "args": [
          "ta91",
          "ta92"
        ]
      },
      {
        "name": "xA9",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dxd9"
        ]
      },
      {
        "name": "xF9",
        "op": "+-",
        "args": [
          "xD9",
          "0",
          "lFD"
        ]
      },
      {
        "name": "xE9",
        "op": "+-",
        "args": [
          "xA9",
          "lFD",
          "0"
        ]
      },
      {
        "name": "yC9",
        "op": "+-",
        "args": [
          "yD9",
          "0",
          "th"
        ]
      },
      {
        "name": "swAng5",
        "op": "+-",
        "args": [
          "bA9",
          "0",
          "bD8"
        ]
      },
      {
        "name": "xCxn1",
        "op": "+/",
        "args": [
          "xB1",
          "xC1",
          "2"
        ]
      },
      {
        "name": "yCxn1",
        "op": "+/",
        "args": [
          "yB1",
          "yC1",
          "2"
        ]
      },
      {
        "name": "xCxn2",
        "op": "+/",
        "args": [
          "xB2",
          "xC2",
          "2"
        ]
      },
      {
        "name": "yCxn2",
        "op": "+/",
        "args": [
          "yB2",
          "yC2",
          "2"
        ]
      },
      {
        "name": "xCxn3",
        "op": "+/",
        "args": [
          "xB3",
          "xC3",
          "2"
        ]
      },
      {
        "name": "yCxn3",
        "op": "+/",
        "args": [
          "yB3",
          "yC3",
          "2"
        ]
      },
      {
        "name": "xCxn4",
        "op": "+/",
        "args": [
          "xB4",
          "xC4",
          "2"
        ]
      },
      {
        "name": "yCxn4",
        "op": "+/",
        "args": [
          "yB4",
          "yC4",
          "2"
        ]
      },
      {
        "name": "xCxn5",
        "op": "+/",
        "args": [
          "r",
          "0",
          "xCxn4"
        ]
      },
      {
        "name": "xCxn6",
        "op": "+/",
        "args": [
          "r",
          "0",
          "xCxn3"
        ]
      },
      {
        "name": "xCxn7",
        "op": "+/",
        "args": [
          "r",
          "0",
          "xCxn2"
        ]
      },
      {
        "name": "xCxn8",
        "op": "+/",
        "args": [
          "r",
          "0",
          "xCxn1"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "xA1",
              "yA1"
            ]
          },
          {
            "type": "L",
            "data": [
              "xB1",
              "yB1"
            ]
          },
          {
            "type": "L",
            "data": [
              "xC1",
              "yC1"
            ]
          },
          {
            "type": "L",
            "data": [
              "xD1",
              "yD1"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw",
              "rh",
              "bD1",
              "swAng1"
            ]
          },
          {
            "type": "L",
            "data": [
              "xB2",
              "yB2"
            ]
          },
          {
            "type": "L",
            "data": [
              "xC2",
              "yC2"
            ]
          },
          {
            "type": "L",
            "data": [
              "xD2",
              "yD2"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw",
              "rh",
              "bD2",
              "swAng2"
            ]
          },
          {
            "type": "L",
            "data": [
              "xB3",
              "yB3"
            ]
          },
          {
            "type": "L",
            "data": [
              "xC3",
              "yC3"
            ]
          },
          {
            "type": "L",
            "data": [
              "xD3",
              "yD3"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw",
              "rh",
              "bD3",
              "swAng3"
            ]
          },
          {
            "type": "L",
            "data": [
              "xB4",
              "yB4"
            ]
          },
          {
            "type": "L",
            "data": [
              "xC4",
              "yC4"
            ]
          },
          {
            "type": "L",
            "data": [
              "xD4",
              "yD4"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw",
              "rh",
              "bD4",
              "swAng4"
            ]
          },
          {
            "type": "L",
            "data": [
              "xB5",
              "yC4"
            ]
          },
          {
            "type": "L",
            "data": [
              "xC5",
              "yB4"
            ]
          },
          {
            "type": "L",
            "data": [
              "xD5",
              "yA4"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw",
              "rh",
              "bD5",
              "swAng3"
            ]
          },
          {
            "type": "L",
            "data": [
              "xB6",
              "yC3"
            ]
          },
          {
            "type": "L",
            "data": [
              "xC6",
              "yB3"
            ]
          },
          {
            "type": "L",
            "data": [
              "xD6",
              "yA3"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw",
              "rh",
              "bD6",
              "swAng2"
            ]
          },
          {
            "type": "L",
            "data": [
              "xB7",
              "yC2"
            ]
          },
          {
            "type": "L",
            "data": [
              "xC7",
              "yB2"
            ]
          },
          {
            "type": "L",
            "data": [
              "xD7",
              "yA2"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw",
              "rh",
              "bD7",
              "swAng1"
            ]
          },
          {
            "type": "L",
            "data": [
              "xB8",
              "yC1"
            ]
          },
          {
            "type": "L",
            "data": [
              "xC8",
              "yB1"
            ]
          },
          {
            "type": "L",
            "data": [
              "xD8",
              "yA1"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw",
              "rh",
              "bD8",
              "swAng5"
            ]
          },
          {
            "type": "L",
            "data": [
              "xE9",
              "yC9"
            ]
          },
          {
            "type": "L",
            "data": [
              "xF9",
              "yC9"
            ]
          },
          {
            "type": "L",
            "data": [
              "xD9",
              "yD9"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw",
              "rh",
              "bD9",
              "swAng5"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "xA8",
      "t": "yD1",
      "r": "xD1",
      "b": "yD3"
    }
  },
  "halfFrame": {
    "adjustments": {
      "adj1": 33333,
      "adj2": 33333
    },
    "guides": [
      {
        "name": "maxAdj2",
        "op": "*/",
        "args": [
          "100000",
          "w",
          "ss"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "g1",
        "op": "*/",
        "args": [
          "h",
          "x1",
          "w"
        ]
      },
      {
        "name": "g2",
        "op": "+-",
        "args": [
          "h",
          "0",
          "g1"
        ]
      },
      {
        "name": "maxAdj1",
        "op": "*/",
        "args": [
          "100000",
          "g2",
          "ss"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "maxAdj1"
        ]
      },
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "y1",
          "w",
          "h"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dx2"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "x1",
          "h",
          "w"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "b",
          "0",
          "dy2"
        ]
      },
      {
        "name": "cx1",
        "op": "*/",
        "args": [
          "x1",
          "1",
          "2"
        ]
      },
      {
        "name": "cy1",
        "op": "+/",
        "args": [
          "y2",
          "b",
          "2"
        ]
      },
      {
        "name": "cx2",
        "op": "+/",
        "args": [
          "x2",
          "r",
          "2"
        ]
      },
      {
        "name": "cy2",
        "op": "*/",
        "args": [
          "y1",
          "1",
          "2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "heart": {
    "adjustments": {},
    "guides": [
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "w",
          "49",
          "48"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "w",
          "10",
          "48"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "t",
          "0",
          "hd3"
        ]
      },
      {
        "name": "il",
        "op": "*/",
        "args": [
          "w",
          "1",
          "6"
        ]
      },
      {
        "name": "ir",
        "op": "*/",
        "args": [
          "w",
          "5",
          "6"
        ]
      },
      {
        "name": "ib",
        "op": "*/",
        "args": [
          "h",
          "2",
          "3"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "hc",
              "hd4"
            ]
          },
          {
            "type": "C",
            "data": [
              "x3",
              "y1",
              "x4",
              "hd4",
              "hc",
              "b"
            ]
          },
          {
            "type": "C",
            "data": [
              "x1",
              "hd4",
              "x2",
              "y1",
              "hc",
              "hd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "hd4",
      "r": "ir",
      "b": "ib"
    }
  },
  "heptagon": {
    "adjustments": {
      "hf": 102572,
      "vf": 105210
    },
    "guides": [
      {
        "name": "swd2",
        "op": "*/",
        "args": [
          "wd2",
          "hf",
          "100000"
        ]
      },
      {
        "name": "shd2",
        "op": "*/",
        "args": [
          "hd2",
          "vf",
          "100000"
        ]
      },
      {
        "name": "svc",
        "op": "*/",
        "args": [
          "vc",
          "vf",
          "100000"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "swd2",
          "97493",
          "100000"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "swd2",
          "78183",
          "100000"
        ]
      },
      {
        "name": "dx3",
        "op": "*/",
        "args": [
          "swd2",
          "43388",
          "100000"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "shd2",
          "62349",
          "100000"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "shd2",
          "22252",
          "100000"
        ]
      },
      {
        "name": "dy3",
        "op": "*/",
        "args": [
          "shd2",
          "90097",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx3"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "hc",
          "dx3",
          "0"
        ]
      },
      {
        "name": "x5",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "x6",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "svc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "svc",
          "dy2",
          "0"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "svc",
          "dy3",
          "0"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "b",
          "0",
          "y1"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y3"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x2",
      "t": "y1",
      "r": "x5",
      "b": "ib"
    }
  },
  "hexagon": {
    "adjustments": {
      "adj": 25000,
      "vf": 115470
    },
    "guides": [
      {
        "name": "maxAdj",
        "op": "*/",
        "args": [
          "50000",
          "w",
          "ss"
        ]
      },
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "maxAdj"
        ]
      },
      {
        "name": "shd2",
        "op": "*/",
        "args": [
          "hd2",
          "vf",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x1"
        ]
      },
      {
        "name": "dy1",
        "op": "sin",
        "args": [
          "shd2",
          "3600000"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "q1",
        "op": "*/",
        "args": [
          "maxAdj",
          "-1",
          "2"
        ]
      },
      {
        "name": "q2",
        "op": "+-",
        "args": [
          "a",
          "q1",
          "0"
        ]
      },
      {
        "name": "q3",
        "op": "?:",
        "args": [
          "q2",
          "4",
          "2"
        ]
      },
      {
        "name": "q4",
        "op": "?:",
        "args": [
          "q2",
          "3",
          "2"
        ]
      },
      {
        "name": "q5",
        "op": "?:",
        "args": [
          "q2",
          "q1",
          "0"
        ]
      },
      {
        "name": "q6",
        "op": "+/",
        "args": [
          "a",
          "q5",
          "q1"
        ]
      },
      {
        "name": "q7",
        "op": "*/",
        "args": [
          "q6",
          "q4",
          "-1"
        ]
      },
      {
        "name": "q8",
        "op": "+-",
        "args": [
          "q3",
          "q7",
          "0"
        ]
      },
      {
        "name": "il",
        "op": "*/",
        "args": [
          "w",
          "q8",
          "24"
        ]
      },
      {
        "name": "it",
        "op": "*/",
        "args": [
          "h",
          "q8",
          "24"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "r",
          "0",
          "il"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "b",
          "0",
          "it"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "homePlate": {
    "adjustments": {
      "adj": 50000
    },
    "guides": [
      {
        "name": "maxAdj",
        "op": "*/",
        "args": [
          "100000",
          "w",
          "ss"
        ]
      },
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "maxAdj"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dx1"
        ]
      },
      {
        "name": "ir",
        "op": "+/",
        "args": [
          "x1",
          "r",
          "2"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "x1",
          "1",
          "2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "ir",
      "b": "b"
    }
  },
  "horizontalScroll": {
    "adjustments": {
      "adj": 12500
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "25000"
        ]
      },
      {
        "name": "ch",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "ch2",
        "op": "*/",
        "args": [
          "ch",
          "1",
          "2"
        ]
      },
      {
        "name": "ch4",
        "op": "*/",
        "args": [
          "ch",
          "1",
          "4"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "ch",
          "ch2",
          "0"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "ch",
          "ch",
          "0"
        ]
      },
      {
        "name": "y6",
        "op": "+-",
        "args": [
          "b",
          "0",
          "ch"
        ]
      },
      {
        "name": "y7",
        "op": "+-",
        "args": [
          "b",
          "0",
          "ch2"
        ]
      },
      {
        "name": "y5",
        "op": "+-",
        "args": [
          "y6",
          "0",
          "ch2"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "r",
          "0",
          "ch"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "r",
          "0",
          "ch2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "r",
              "ch2"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "0",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "ch2"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch4",
              "ch4",
              "0",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "ch"
            ]
          },
          {
            "type": "L",
            "data": [
              "ch2",
              "ch"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "3cd4",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y7"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "cd2",
              "-10800000"
            ]
          },
          {
            "type": "L",
            "data": [
              "ch",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y6"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "cd4",
              "-5400000"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "ch2",
              "y4"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "cd4",
              "-5400000"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch4",
              "ch4",
              "0",
              "-10800000"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darkenLess",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "ch2",
              "y4"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "cd4",
              "-5400000"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch4",
              "ch4",
              "0",
              "-10800000"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "x4",
              "ch"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "cd4",
              "-16200000"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch4",
              "ch4",
              "cd2",
              "-10800000"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y3"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "ch"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "ch2"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "cd2",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y5"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "0",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "ch",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "ch",
              "y7"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "0",
              "cd2"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "x3",
              "ch"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "ch"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "cd4",
              "-5400000"
            ]
          },
          {
            "type": "M",
            "data": [
              "x4",
              "ch"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "ch2"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch4",
              "ch4",
              "0",
              "cd2"
            ]
          },
          {
            "type": "M",
            "data": [
              "ch2",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "ch2",
              "y3"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch4",
              "ch4",
              "cd2",
              "cd2"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "0",
              "cd2"
            ]
          },
          {
            "type": "M",
            "data": [
              "ch",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "ch",
              "y6"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "ch",
      "t": "ch",
      "r": "x4",
      "b": "y6"
    }
  },
  "irregularSeal1": {
    "adjustments": {},
    "guides": [
      {
        "name": "x5",
        "op": "*/",
        "args": [
          "w",
          "4627",
          "21600"
        ]
      },
      {
        "name": "x12",
        "op": "*/",
        "args": [
          "w",
          "8485",
          "21600"
        ]
      },
      {
        "name": "x21",
        "op": "*/",
        "args": [
          "w",
          "16702",
          "21600"
        ]
      },
      {
        "name": "x24",
        "op": "*/",
        "args": [
          "w",
          "14522",
          "21600"
        ]
      },
      {
        "name": "y3",
        "op": "*/",
        "args": [
          "h",
          "6320",
          "21600"
        ]
      },
      {
        "name": "y6",
        "op": "*/",
        "args": [
          "h",
          "8615",
          "21600"
        ]
      },
      {
        "name": "y9",
        "op": "*/",
        "args": [
          "h",
          "13937",
          "21600"
        ]
      },
      {
        "name": "y18",
        "op": "*/",
        "args": [
          "h",
          "13290",
          "21600"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "10800",
              "5800"
            ]
          },
          {
            "type": "L",
            "data": [
              "14522",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "14155",
              "5325"
            ]
          },
          {
            "type": "L",
            "data": [
              "18380",
              "4457"
            ]
          },
          {
            "type": "L",
            "data": [
              "16702",
              "7315"
            ]
          },
          {
            "type": "L",
            "data": [
              "21097",
              "8137"
            ]
          },
          {
            "type": "L",
            "data": [
              "17607",
              "10475"
            ]
          },
          {
            "type": "L",
            "data": [
              "21600",
              "13290"
            ]
          },
          {
            "type": "L",
            "data": [
              "16837",
              "12942"
            ]
          },
          {
            "type": "L",
            "data": [
              "18145",
              "18095"
            ]
          },
          {
            "type": "L",
            "data": [
              "14020",
              "14457"
            ]
          },
          {
            "type": "L",
            "data": [
              "13247",
              "19737"
            ]
          },
          {
            "type": "L",
            "data": [
              "10532",
              "14935"
            ]
          },
          {
            "type": "L",
            "data": [
              "8485",
              "21600"
            ]
          },
          {
            "type": "L",
            "data": [
              "7715",
              "15627"
            ]
          },
          {
            "type": "L",
            "data": [
              "4762",
              "17617"
            ]
          },
          {
            "type": "L",
            "data": [
              "5667",
              "13937"
            ]
          },
          {
            "type": "L",
            "data": [
              "135",
              "14587"
            ]
          },
          {
            "type": "L",
            "data": [
              "3722",
              "11775"
            ]
          },
          {
            "type": "L",
            "data": [
              "0",
              "8615"
            ]
          },
          {
            "type": "L",
            "data": [
              "4627",
              "7617"
            ]
          },
          {
            "type": "L",
            "data": [
              "370",
              "2295"
            ]
          },
          {
            "type": "L",
            "data": [
              "7312",
              "6320"
            ]
          },
          {
            "type": "L",
            "data": [
              "8352",
              "2295"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x5",
      "t": "y3",
      "r": "x21",
      "b": "y9"
    }
  },
  "irregularSeal2": {
    "adjustments": {},
    "guides": [
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "9722",
          "21600"
        ]
      },
      {
        "name": "x5",
        "op": "*/",
        "args": [
          "w",
          "5372",
          "21600"
        ]
      },
      {
        "name": "x16",
        "op": "*/",
        "args": [
          "w",
          "11612",
          "21600"
        ]
      },
      {
        "name": "x19",
        "op": "*/",
        "args": [
          "w",
          "14640",
          "21600"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "1887",
          "21600"
        ]
      },
      {
        "name": "y3",
        "op": "*/",
        "args": [
          "h",
          "6382",
          "21600"
        ]
      },
      {
        "name": "y8",
        "op": "*/",
        "args": [
          "h",
          "12877",
          "21600"
        ]
      },
      {
        "name": "y14",
        "op": "*/",
        "args": [
          "h",
          "19712",
          "21600"
        ]
      },
      {
        "name": "y16",
        "op": "*/",
        "args": [
          "h",
          "18842",
          "21600"
        ]
      },
      {
        "name": "y17",
        "op": "*/",
        "args": [
          "h",
          "15935",
          "21600"
        ]
      },
      {
        "name": "y24",
        "op": "*/",
        "args": [
          "h",
          "6645",
          "21600"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "11462",
              "4342"
            ]
          },
          {
            "type": "L",
            "data": [
              "14790",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "14525",
              "5777"
            ]
          },
          {
            "type": "L",
            "data": [
              "18007",
              "3172"
            ]
          },
          {
            "type": "L",
            "data": [
              "16380",
              "6532"
            ]
          },
          {
            "type": "L",
            "data": [
              "21600",
              "6645"
            ]
          },
          {
            "type": "L",
            "data": [
              "16985",
              "9402"
            ]
          },
          {
            "type": "L",
            "data": [
              "18270",
              "11290"
            ]
          },
          {
            "type": "L",
            "data": [
              "16380",
              "12310"
            ]
          },
          {
            "type": "L",
            "data": [
              "18877",
              "15632"
            ]
          },
          {
            "type": "L",
            "data": [
              "14640",
              "14350"
            ]
          },
          {
            "type": "L",
            "data": [
              "14942",
              "17370"
            ]
          },
          {
            "type": "L",
            "data": [
              "12180",
              "15935"
            ]
          },
          {
            "type": "L",
            "data": [
              "11612",
              "18842"
            ]
          },
          {
            "type": "L",
            "data": [
              "9872",
              "17370"
            ]
          },
          {
            "type": "L",
            "data": [
              "8700",
              "19712"
            ]
          },
          {
            "type": "L",
            "data": [
              "7527",
              "18125"
            ]
          },
          {
            "type": "L",
            "data": [
              "4917",
              "21600"
            ]
          },
          {
            "type": "L",
            "data": [
              "4805",
              "18240"
            ]
          },
          {
            "type": "L",
            "data": [
              "1285",
              "17825"
            ]
          },
          {
            "type": "L",
            "data": [
              "3330",
              "15370"
            ]
          },
          {
            "type": "L",
            "data": [
              "0",
              "12877"
            ]
          },
          {
            "type": "L",
            "data": [
              "3935",
              "11592"
            ]
          },
          {
            "type": "L",
            "data": [
              "1172",
              "8270"
            ]
          },
          {
            "type": "L",
            "data": [
              "5372",
              "7817"
            ]
          },
          {
            "type": "L",
            "data": [
              "4502",
              "3625"
            ]
          },
          {
            "type": "L",
            "data": [
              "8550",
              "6382"
            ]
          },
          {
            "type": "L",
            "data": [
              "9722",
              "1887"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x5",
      "t": "y3",
      "r": "x19",
      "b": "y17"
    }
  },
  "leftArrow": {
    "adjustments": {
      "adj1": 50000,
      "adj2": 50000
    },
    "guides": [
      {
        "name": "maxAdj2",
        "op": "*/",
        "args": [
          "100000",
          "w",
          "ss"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "l",
          "dx2",
          "0"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "200000"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "y1",
          "dx2",
          "hd2"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "x2",
          "0",
          "dx1"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x1",
      "t": "y1",
      "r": "r",
      "b": "y2"
    }
  },
  "leftArrowCallout": {
    "adjustments": {
      "adj1": 25000,
      "adj2": 25000,
      "adj3": 25000,
      "adj4": 64977
    },
    "guides": [
      {
        "name": "maxAdj2",
        "op": "*/",
        "args": [
          "50000",
          "h",
          "ss"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "maxAdj1",
        "op": "*/",
        "args": [
          "a2",
          "2",
          "1"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "maxAdj1"
        ]
      },
      {
        "name": "maxAdj3",
        "op": "*/",
        "args": [
          "100000",
          "w",
          "ss"
        ]
      },
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "0",
          "adj3",
          "maxAdj3"
        ]
      },
      {
        "name": "q2",
        "op": "*/",
        "args": [
          "a3",
          "ss",
          "w"
        ]
      },
      {
        "name": "maxAdj4",
        "op": "+-",
        "args": [
          "100000",
          "0",
          "q2"
        ]
      },
      {
        "name": "a4",
        "op": "pin",
        "args": [
          "0",
          "adj4",
          "maxAdj4"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "200000"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy2"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "vc",
          "dy2",
          "0"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a3",
          "100000"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "w",
          "a4",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x3",
        "op": "+/",
        "args": [
          "x2",
          "r",
          "2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x2",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "leftBrace": {
    "adjustments": {
      "adj1": 8333,
      "adj2": 50000
    },
    "guides": [
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "100000"
        ]
      },
      {
        "name": "q1",
        "op": "+-",
        "args": [
          "100000",
          "0",
          "a2"
        ]
      },
      {
        "name": "q2",
        "op": "min",
        "args": [
          "q1",
          "a2"
        ]
      },
      {
        "name": "q3",
        "op": "*/",
        "args": [
          "q2",
          "1",
          "2"
        ]
      },
      {
        "name": "maxAdj1",
        "op": "*/",
        "args": [
          "q3",
          "h",
          "ss"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "maxAdj1"
        ]
      },
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "y3",
        "op": "*/",
        "args": [
          "h",
          "a2",
          "100000"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "y3",
          "y1",
          "0"
        ]
      },
      {
        "name": "dx1",
        "op": "cos",
        "args": [
          "wd2",
          "2700000"
        ]
      },
      {
        "name": "dy1",
        "op": "sin",
        "args": [
          "y1",
          "2700000"
        ]
      },
      {
        "name": "il",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dx1"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "y1",
          "0",
          "dy1"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "b",
          "dy1",
          "y1"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "y4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "0",
              "-5400000"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "cd4",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "y4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "0",
              "-5400000"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "cd4",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "cd2",
              "cd4"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "r",
      "b": "ib"
    }
  },
  "leftBracket": {
    "adjustments": {
      "adj": 8333
    },
    "guides": [
      {
        "name": "maxAdj",
        "op": "*/",
        "args": [
          "50000",
          "h",
          "ss"
        ]
      },
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "maxAdj"
        ]
      },
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "b",
          "0",
          "y1"
        ]
      },
      {
        "name": "dx1",
        "op": "cos",
        "args": [
          "w",
          "2700000"
        ]
      },
      {
        "name": "dy1",
        "op": "sin",
        "args": [
          "y1",
          "2700000"
        ]
      },
      {
        "name": "il",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dx1"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "y1",
          "0",
          "dy1"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "b",
          "dy1",
          "y1"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "y1",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "y1",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "y1",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "y1",
              "cd2",
              "cd4"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "r",
      "b": "ib"
    }
  },
  "leftCircularArrow": {
    "adjustments": {
      "adj1": 12500,
      "adj2": -1142319,
      "adj3": 1142319,
      "adj4": 10800000,
      "adj5": 12500
    },
    "guides": [
      {
        "name": "a5",
        "op": "pin",
        "args": [
          "0",
          "adj5",
          "25000"
        ]
      },
      {
        "name": "maxAdj1",
        "op": "*/",
        "args": [
          "a5",
          "2",
          "1"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "maxAdj1"
        ]
      },
      {
        "name": "enAng",
        "op": "pin",
        "args": [
          "1",
          "adj3",
          "21599999"
        ]
      },
      {
        "name": "stAng",
        "op": "pin",
        "args": [
          "0",
          "adj4",
          "21599999"
        ]
      },
      {
        "name": "th",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "thh",
        "op": "*/",
        "args": [
          "ss",
          "a5",
          "100000"
        ]
      },
      {
        "name": "th2",
        "op": "*/",
        "args": [
          "th",
          "1",
          "2"
        ]
      },
      {
        "name": "rw1",
        "op": "+-",
        "args": [
          "wd2",
          "th2",
          "thh"
        ]
      },
      {
        "name": "rh1",
        "op": "+-",
        "args": [
          "hd2",
          "th2",
          "thh"
        ]
      },
      {
        "name": "rw2",
        "op": "+-",
        "args": [
          "rw1",
          "0",
          "th"
        ]
      },
      {
        "name": "rh2",
        "op": "+-",
        "args": [
          "rh1",
          "0",
          "th"
        ]
      },
      {
        "name": "rw3",
        "op": "+-",
        "args": [
          "rw2",
          "th2",
          "0"
        ]
      },
      {
        "name": "rh3",
        "op": "+-",
        "args": [
          "rh2",
          "th2",
          "0"
        ]
      },
      {
        "name": "wtH",
        "op": "sin",
        "args": [
          "rw3",
          "enAng"
        ]
      },
      {
        "name": "htH",
        "op": "cos",
        "args": [
          "rh3",
          "enAng"
        ]
      },
      {
        "name": "dxH",
        "op": "cat2",
        "args": [
          "rw3",
          "htH",
          "wtH"
        ]
      },
      {
        "name": "dyH",
        "op": "sat2",
        "args": [
          "rh3",
          "htH",
          "wtH"
        ]
      },
      {
        "name": "xH",
        "op": "+-",
        "args": [
          "hc",
          "dxH",
          "0"
        ]
      },
      {
        "name": "yH",
        "op": "+-",
        "args": [
          "vc",
          "dyH",
          "0"
        ]
      },
      {
        "name": "rI",
        "op": "min",
        "args": [
          "rw2",
          "rh2"
        ]
      },
      {
        "name": "u1",
        "op": "*/",
        "args": [
          "dxH",
          "dxH",
          "1"
        ]
      },
      {
        "name": "u2",
        "op": "*/",
        "args": [
          "dyH",
          "dyH",
          "1"
        ]
      },
      {
        "name": "u3",
        "op": "*/",
        "args": [
          "rI",
          "rI",
          "1"
        ]
      },
      {
        "name": "u4",
        "op": "+-",
        "args": [
          "u1",
          "0",
          "u3"
        ]
      },
      {
        "name": "u5",
        "op": "+-",
        "args": [
          "u2",
          "0",
          "u3"
        ]
      },
      {
        "name": "u6",
        "op": "*/",
        "args": [
          "u4",
          "u5",
          "u1"
        ]
      },
      {
        "name": "u7",
        "op": "*/",
        "args": [
          "u6",
          "1",
          "u2"
        ]
      },
      {
        "name": "u8",
        "op": "+-",
        "args": [
          "1",
          "0",
          "u7"
        ]
      },
      {
        "name": "u9",
        "op": "sqrt",
        "args": [
          "u8"
        ]
      },
      {
        "name": "u10",
        "op": "*/",
        "args": [
          "u4",
          "1",
          "dxH"
        ]
      },
      {
        "name": "u11",
        "op": "*/",
        "args": [
          "u10",
          "1",
          "dyH"
        ]
      },
      {
        "name": "u12",
        "op": "+/",
        "args": [
          "1",
          "u9",
          "u11"
        ]
      },
      {
        "name": "u13",
        "op": "at2",
        "args": [
          "1",
          "u12"
        ]
      },
      {
        "name": "u14",
        "op": "+-",
        "args": [
          "u13",
          "21600000",
          "0"
        ]
      },
      {
        "name": "u15",
        "op": "?:",
        "args": [
          "u13",
          "u13",
          "u14"
        ]
      },
      {
        "name": "u16",
        "op": "+-",
        "args": [
          "u15",
          "0",
          "enAng"
        ]
      },
      {
        "name": "u17",
        "op": "+-",
        "args": [
          "u16",
          "21600000",
          "0"
        ]
      },
      {
        "name": "u18",
        "op": "?:",
        "args": [
          "u16",
          "u16",
          "u17"
        ]
      },
      {
        "name": "u19",
        "op": "+-",
        "args": [
          "u18",
          "0",
          "cd2"
        ]
      },
      {
        "name": "u20",
        "op": "+-",
        "args": [
          "u18",
          "0",
          "21600000"
        ]
      },
      {
        "name": "u21",
        "op": "?:",
        "args": [
          "u19",
          "u20",
          "u18"
        ]
      },
      {
        "name": "u22",
        "op": "abs",
        "args": [
          "u21"
        ]
      },
      {
        "name": "minAng",
        "op": "*/",
        "args": [
          "u22",
          "-1",
          "1"
        ]
      },
      {
        "name": "u23",
        "op": "abs",
        "args": [
          "adj2"
        ]
      },
      {
        "name": "a2",
        "op": "*/",
        "args": [
          "u23",
          "-1",
          "1"
        ]
      },
      {
        "name": "aAng",
        "op": "pin",
        "args": [
          "minAng",
          "a2",
          "0"
        ]
      },
      {
        "name": "ptAng",
        "op": "+-",
        "args": [
          "enAng",
          "aAng",
          "0"
        ]
      },
      {
        "name": "wtA",
        "op": "sin",
        "args": [
          "rw3",
          "ptAng"
        ]
      },
      {
        "name": "htA",
        "op": "cos",
        "args": [
          "rh3",
          "ptAng"
        ]
      },
      {
        "name": "dxA",
        "op": "cat2",
        "args": [
          "rw3",
          "htA",
          "wtA"
        ]
      },
      {
        "name": "dyA",
        "op": "sat2",
        "args": [
          "rh3",
          "htA",
          "wtA"
        ]
      },
      {
        "name": "xA",
        "op": "+-",
        "args": [
          "hc",
          "dxA",
          "0"
        ]
      },
      {
        "name": "yA",
        "op": "+-",
        "args": [
          "vc",
          "dyA",
          "0"
        ]
      },
      {
        "name": "wtE",
        "op": "sin",
        "args": [
          "rw1",
          "stAng"
        ]
      },
      {
        "name": "htE",
        "op": "cos",
        "args": [
          "rh1",
          "stAng"
        ]
      },
      {
        "name": "dxE",
        "op": "cat2",
        "args": [
          "rw1",
          "htE",
          "wtE"
        ]
      },
      {
        "name": "dyE",
        "op": "sat2",
        "args": [
          "rh1",
          "htE",
          "wtE"
        ]
      },
      {
        "name": "xE",
        "op": "+-",
        "args": [
          "hc",
          "dxE",
          "0"
        ]
      },
      {
        "name": "yE",
        "op": "+-",
        "args": [
          "vc",
          "dyE",
          "0"
        ]
      },
      {
        "name": "wtD",
        "op": "sin",
        "args": [
          "rw2",
          "stAng"
        ]
      },
      {
        "name": "htD",
        "op": "cos",
        "args": [
          "rh2",
          "stAng"
        ]
      },
      {
        "name": "dxD",
        "op": "cat2",
        "args": [
          "rw2",
          "htD",
          "wtD"
        ]
      },
      {
        "name": "dyD",
        "op": "sat2",
        "args": [
          "rh2",
          "htD",
          "wtD"
        ]
      },
      {
        "name": "xD",
        "op": "+-",
        "args": [
          "hc",
          "dxD",
          "0"
        ]
      },
      {
        "name": "yD",
        "op": "+-",
        "args": [
          "vc",
          "dyD",
          "0"
        ]
      },
      {
        "name": "dxG",
        "op": "cos",
        "args": [
          "thh",
          "ptAng"
        ]
      },
      {
        "name": "dyG",
        "op": "sin",
        "args": [
          "thh",
          "ptAng"
        ]
      },
      {
        "name": "xG",
        "op": "+-",
        "args": [
          "xH",
          "dxG",
          "0"
        ]
      },
      {
        "name": "yG",
        "op": "+-",
        "args": [
          "yH",
          "dyG",
          "0"
        ]
      },
      {
        "name": "dxB",
        "op": "cos",
        "args": [
          "thh",
          "ptAng"
        ]
      },
      {
        "name": "dyB",
        "op": "sin",
        "args": [
          "thh",
          "ptAng"
        ]
      },
      {
        "name": "xB",
        "op": "+-",
        "args": [
          "xH",
          "0",
          "dxB",
          "0"
        ]
      },
      {
        "name": "yB",
        "op": "+-",
        "args": [
          "yH",
          "0",
          "dyB",
          "0"
        ]
      },
      {
        "name": "sx1",
        "op": "+-",
        "args": [
          "xB",
          "0",
          "hc"
        ]
      },
      {
        "name": "sy1",
        "op": "+-",
        "args": [
          "yB",
          "0",
          "vc"
        ]
      },
      {
        "name": "sx2",
        "op": "+-",
        "args": [
          "xG",
          "0",
          "hc"
        ]
      },
      {
        "name": "sy2",
        "op": "+-",
        "args": [
          "yG",
          "0",
          "vc"
        ]
      },
      {
        "name": "rO",
        "op": "min",
        "args": [
          "rw1",
          "rh1"
        ]
      },
      {
        "name": "x1O",
        "op": "*/",
        "args": [
          "sx1",
          "rO",
          "rw1"
        ]
      },
      {
        "name": "y1O",
        "op": "*/",
        "args": [
          "sy1",
          "rO",
          "rh1"
        ]
      },
      {
        "name": "x2O",
        "op": "*/",
        "args": [
          "sx2",
          "rO",
          "rw1"
        ]
      },
      {
        "name": "y2O",
        "op": "*/",
        "args": [
          "sy2",
          "rO",
          "rh1"
        ]
      },
      {
        "name": "dxO",
        "op": "+-",
        "args": [
          "x2O",
          "0",
          "x1O"
        ]
      },
      {
        "name": "dyO",
        "op": "+-",
        "args": [
          "y2O",
          "0",
          "y1O"
        ]
      },
      {
        "name": "dO",
        "op": "mod",
        "args": [
          "dxO",
          "dyO",
          "0"
        ]
      },
      {
        "name": "q1",
        "op": "*/",
        "args": [
          "x1O",
          "y2O",
          "1"
        ]
      },
      {
        "name": "q2",
        "op": "*/",
        "args": [
          "x2O",
          "y1O",
          "1"
        ]
      },
      {
        "name": "DO",
        "op": "+-",
        "args": [
          "q1",
          "0",
          "q2"
        ]
      },
      {
        "name": "q3",
        "op": "*/",
        "args": [
          "rO",
          "rO",
          "1"
        ]
      },
      {
        "name": "q4",
        "op": "*/",
        "args": [
          "dO",
          "dO",
          "1"
        ]
      },
      {
        "name": "q5",
        "op": "*/",
        "args": [
          "q3",
          "q4",
          "1"
        ]
      },
      {
        "name": "q6",
        "op": "*/",
        "args": [
          "DO",
          "DO",
          "1"
        ]
      },
      {
        "name": "q7",
        "op": "+-",
        "args": [
          "q5",
          "0",
          "q6"
        ]
      },
      {
        "name": "q8",
        "op": "max",
        "args": [
          "q7",
          "0"
        ]
      },
      {
        "name": "sdelO",
        "op": "sqrt",
        "args": [
          "q8"
        ]
      },
      {
        "name": "ndyO",
        "op": "*/",
        "args": [
          "dyO",
          "-1",
          "1"
        ]
      },
      {
        "name": "sdyO",
        "op": "?:",
        "args": [
          "ndyO",
          "-1",
          "1"
        ]
      },
      {
        "name": "q9",
        "op": "*/",
        "args": [
          "sdyO",
          "dxO",
          "1"
        ]
      },
      {
        "name": "q10",
        "op": "*/",
        "args": [
          "q9",
          "sdelO",
          "1"
        ]
      },
      {
        "name": "q11",
        "op": "*/",
        "args": [
          "DO",
          "dyO",
          "1"
        ]
      },
      {
        "name": "dxF1",
        "op": "+/",
        "args": [
          "q11",
          "q10",
          "q4"
        ]
      },
      {
        "name": "q12",
        "op": "+-",
        "args": [
          "q11",
          "0",
          "q10"
        ]
      },
      {
        "name": "dxF2",
        "op": "*/",
        "args": [
          "q12",
          "1",
          "q4"
        ]
      },
      {
        "name": "adyO",
        "op": "abs",
        "args": [
          "dyO"
        ]
      },
      {
        "name": "q13",
        "op": "*/",
        "args": [
          "adyO",
          "sdelO",
          "1"
        ]
      },
      {
        "name": "q14",
        "op": "*/",
        "args": [
          "DO",
          "dxO",
          "-1"
        ]
      },
      {
        "name": "dyF1",
        "op": "+/",
        "args": [
          "q14",
          "q13",
          "q4"
        ]
      },
      {
        "name": "q15",
        "op": "+-",
        "args": [
          "q14",
          "0",
          "q13"
        ]
      },
      {
        "name": "dyF2",
        "op": "*/",
        "args": [
          "q15",
          "1",
          "q4"
        ]
      },
      {
        "name": "q16",
        "op": "+-",
        "args": [
          "x2O",
          "0",
          "dxF1"
        ]
      },
      {
        "name": "q17",
        "op": "+-",
        "args": [
          "x2O",
          "0",
          "dxF2"
        ]
      },
      {
        "name": "q18",
        "op": "+-",
        "args": [
          "y2O",
          "0",
          "dyF1"
        ]
      },
      {
        "name": "q19",
        "op": "+-",
        "args": [
          "y2O",
          "0",
          "dyF2"
        ]
      },
      {
        "name": "q20",
        "op": "mod",
        "args": [
          "q16",
          "q18",
          "0"
        ]
      },
      {
        "name": "q21",
        "op": "mod",
        "args": [
          "q17",
          "q19",
          "0"
        ]
      },
      {
        "name": "q22",
        "op": "+-",
        "args": [
          "q21",
          "0",
          "q20"
        ]
      },
      {
        "name": "dxF",
        "op": "?:",
        "args": [
          "q22",
          "dxF1",
          "dxF2"
        ]
      },
      {
        "name": "dyF",
        "op": "?:",
        "args": [
          "q22",
          "dyF1",
          "dyF2"
        ]
      },
      {
        "name": "sdxF",
        "op": "*/",
        "args": [
          "dxF",
          "rw1",
          "rO"
        ]
      },
      {
        "name": "sdyF",
        "op": "*/",
        "args": [
          "dyF",
          "rh1",
          "rO"
        ]
      },
      {
        "name": "xF",
        "op": "+-",
        "args": [
          "hc",
          "sdxF",
          "0"
        ]
      },
      {
        "name": "yF",
        "op": "+-",
        "args": [
          "vc",
          "sdyF",
          "0"
        ]
      },
      {
        "name": "x1I",
        "op": "*/",
        "args": [
          "sx1",
          "rI",
          "rw2"
        ]
      },
      {
        "name": "y1I",
        "op": "*/",
        "args": [
          "sy1",
          "rI",
          "rh2"
        ]
      },
      {
        "name": "x2I",
        "op": "*/",
        "args": [
          "sx2",
          "rI",
          "rw2"
        ]
      },
      {
        "name": "y2I",
        "op": "*/",
        "args": [
          "sy2",
          "rI",
          "rh2"
        ]
      },
      {
        "name": "dxI",
        "op": "+-",
        "args": [
          "x2I",
          "0",
          "x1I"
        ]
      },
      {
        "name": "dyI",
        "op": "+-",
        "args": [
          "y2I",
          "0",
          "y1I"
        ]
      },
      {
        "name": "dI",
        "op": "mod",
        "args": [
          "dxI",
          "dyI",
          "0"
        ]
      },
      {
        "name": "v1",
        "op": "*/",
        "args": [
          "x1I",
          "y2I",
          "1"
        ]
      },
      {
        "name": "v2",
        "op": "*/",
        "args": [
          "x2I",
          "y1I",
          "1"
        ]
      },
      {
        "name": "DI",
        "op": "+-",
        "args": [
          "v1",
          "0",
          "v2"
        ]
      },
      {
        "name": "v3",
        "op": "*/",
        "args": [
          "rI",
          "rI",
          "1"
        ]
      },
      {
        "name": "v4",
        "op": "*/",
        "args": [
          "dI",
          "dI",
          "1"
        ]
      },
      {
        "name": "v5",
        "op": "*/",
        "args": [
          "v3",
          "v4",
          "1"
        ]
      },
      {
        "name": "v6",
        "op": "*/",
        "args": [
          "DI",
          "DI",
          "1"
        ]
      },
      {
        "name": "v7",
        "op": "+-",
        "args": [
          "v5",
          "0",
          "v6"
        ]
      },
      {
        "name": "v8",
        "op": "max",
        "args": [
          "v7",
          "0"
        ]
      },
      {
        "name": "sdelI",
        "op": "sqrt",
        "args": [
          "v8"
        ]
      },
      {
        "name": "v9",
        "op": "*/",
        "args": [
          "sdyO",
          "dxI",
          "1"
        ]
      },
      {
        "name": "v10",
        "op": "*/",
        "args": [
          "v9",
          "sdelI",
          "1"
        ]
      },
      {
        "name": "v11",
        "op": "*/",
        "args": [
          "DI",
          "dyI",
          "1"
        ]
      },
      {
        "name": "dxC1",
        "op": "+/",
        "args": [
          "v11",
          "v10",
          "v4"
        ]
      },
      {
        "name": "v12",
        "op": "+-",
        "args": [
          "v11",
          "0",
          "v10"
        ]
      },
      {
        "name": "dxC2",
        "op": "*/",
        "args": [
          "v12",
          "1",
          "v4"
        ]
      },
      {
        "name": "adyI",
        "op": "abs",
        "args": [
          "dyI"
        ]
      },
      {
        "name": "v13",
        "op": "*/",
        "args": [
          "adyI",
          "sdelI",
          "1"
        ]
      },
      {
        "name": "v14",
        "op": "*/",
        "args": [
          "DI",
          "dxI",
          "-1"
        ]
      },
      {
        "name": "dyC1",
        "op": "+/",
        "args": [
          "v14",
          "v13",
          "v4"
        ]
      },
      {
        "name": "v15",
        "op": "+-",
        "args": [
          "v14",
          "0",
          "v13"
        ]
      },
      {
        "name": "dyC2",
        "op": "*/",
        "args": [
          "v15",
          "1",
          "v4"
        ]
      },
      {
        "name": "v16",
        "op": "+-",
        "args": [
          "x1I",
          "0",
          "dxC1"
        ]
      },
      {
        "name": "v17",
        "op": "+-",
        "args": [
          "x1I",
          "0",
          "dxC2"
        ]
      },
      {
        "name": "v18",
        "op": "+-",
        "args": [
          "y1I",
          "0",
          "dyC1"
        ]
      },
      {
        "name": "v19",
        "op": "+-",
        "args": [
          "y1I",
          "0",
          "dyC2"
        ]
      },
      {
        "name": "v20",
        "op": "mod",
        "args": [
          "v16",
          "v18",
          "0"
        ]
      },
      {
        "name": "v21",
        "op": "mod",
        "args": [
          "v17",
          "v19",
          "0"
        ]
      },
      {
        "name": "v22",
        "op": "+-",
        "args": [
          "v21",
          "0",
          "v20"
        ]
      },
      {
        "name": "dxC",
        "op": "?:",
        "args": [
          "v22",
          "dxC1",
          "dxC2"
        ]
      },
      {
        "name": "dyC",
        "op": "?:",
        "args": [
          "v22",
          "dyC1",
          "dyC2"
        ]
      },
      {
        "name": "sdxC",
        "op": "*/",
        "args": [
          "dxC",
          "rw2",
          "rI"
        ]
      },
      {
        "name": "sdyC",
        "op": "*/",
        "args": [
          "dyC",
          "rh2",
          "rI"
        ]
      },
      {
        "name": "xC",
        "op": "+-",
        "args": [
          "hc",
          "sdxC",
          "0"
        ]
      },
      {
        "name": "yC",
        "op": "+-",
        "args": [
          "vc",
          "sdyC",
          "0"
        ]
      },
      {
        "name": "ist0",
        "op": "at2",
        "args": [
          "sdxC",
          "sdyC"
        ]
      },
      {
        "name": "ist1",
        "op": "+-",
        "args": [
          "ist0",
          "21600000",
          "0"
        ]
      },
      {
        "name": "istAng0",
        "op": "?:",
        "args": [
          "ist0",
          "ist0",
          "ist1"
        ]
      },
      {
        "name": "isw1",
        "op": "+-",
        "args": [
          "stAng",
          "0",
          "istAng0"
        ]
      },
      {
        "name": "isw2",
        "op": "+-",
        "args": [
          "isw1",
          "21600000",
          "0"
        ]
      },
      {
        "name": "iswAng0",
        "op": "?:",
        "args": [
          "isw1",
          "isw1",
          "isw2"
        ]
      },
      {
        "name": "istAng",
        "op": "+-",
        "args": [
          "istAng0",
          "iswAng0",
          "0"
        ]
      },
      {
        "name": "iswAng",
        "op": "+-",
        "args": [
          "0",
          "0",
          "iswAng0"
        ]
      },
      {
        "name": "p1",
        "op": "+-",
        "args": [
          "xF",
          "0",
          "xC"
        ]
      },
      {
        "name": "p2",
        "op": "+-",
        "args": [
          "yF",
          "0",
          "yC"
        ]
      },
      {
        "name": "p3",
        "op": "mod",
        "args": [
          "p1",
          "p2",
          "0"
        ]
      },
      {
        "name": "p4",
        "op": "*/",
        "args": [
          "p3",
          "1",
          "2"
        ]
      },
      {
        "name": "p5",
        "op": "+-",
        "args": [
          "p4",
          "0",
          "thh"
        ]
      },
      {
        "name": "xGp",
        "op": "?:",
        "args": [
          "p5",
          "xF",
          "xG"
        ]
      },
      {
        "name": "yGp",
        "op": "?:",
        "args": [
          "p5",
          "yF",
          "yG"
        ]
      },
      {
        "name": "xBp",
        "op": "?:",
        "args": [
          "p5",
          "xC",
          "xB"
        ]
      },
      {
        "name": "yBp",
        "op": "?:",
        "args": [
          "p5",
          "yC",
          "yB"
        ]
      },
      {
        "name": "en0",
        "op": "at2",
        "args": [
          "sdxF",
          "sdyF"
        ]
      },
      {
        "name": "en1",
        "op": "+-",
        "args": [
          "en0",
          "21600000",
          "0"
        ]
      },
      {
        "name": "en2",
        "op": "?:",
        "args": [
          "en0",
          "en0",
          "en1"
        ]
      },
      {
        "name": "sw0",
        "op": "+-",
        "args": [
          "en2",
          "0",
          "stAng"
        ]
      },
      {
        "name": "sw1",
        "op": "+-",
        "args": [
          "sw0",
          "0",
          "21600000"
        ]
      },
      {
        "name": "swAng",
        "op": "?:",
        "args": [
          "sw0",
          "sw1",
          "sw0"
        ]
      },
      {
        "name": "stAng0",
        "op": "+-",
        "args": [
          "stAng",
          "swAng",
          "0"
        ]
      },
      {
        "name": "swAng0",
        "op": "+-",
        "args": [
          "0",
          "0",
          "swAng"
        ]
      },
      {
        "name": "wtI",
        "op": "sin",
        "args": [
          "rw3",
          "stAng"
        ]
      },
      {
        "name": "htI",
        "op": "cos",
        "args": [
          "rh3",
          "stAng"
        ]
      },
      {
        "name": "dxI",
        "op": "cat2",
        "args": [
          "rw3",
          "htI",
          "wtI"
        ]
      },
      {
        "name": "dyI",
        "op": "sat2",
        "args": [
          "rh3",
          "htI",
          "wtI"
        ]
      },
      {
        "name": "xI",
        "op": "+-",
        "args": [
          "hc",
          "dxI",
          "0"
        ]
      },
      {
        "name": "yI",
        "op": "+-",
        "args": [
          "vc",
          "dyI",
          "0"
        ]
      },
      {
        "name": "aI",
        "op": "+-",
        "args": [
          "stAng",
          "cd4",
          "0"
        ]
      },
      {
        "name": "aA",
        "op": "+-",
        "args": [
          "ptAng",
          "0",
          "cd4"
        ]
      },
      {
        "name": "aB",
        "op": "+-",
        "args": [
          "ptAng",
          "cd2",
          "0"
        ]
      },
      {
        "name": "idx",
        "op": "cos",
        "args": [
          "rw1",
          "2700000"
        ]
      },
      {
        "name": "idy",
        "op": "sin",
        "args": [
          "rh1",
          "2700000"
        ]
      },
      {
        "name": "il",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "idx"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "hc",
          "idx",
          "0"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "idy"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "vc",
          "idy",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "xE",
              "yE"
            ]
          },
          {
            "type": "L",
            "data": [
              "xD",
              "yD"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw2",
              "rh2",
              "istAng",
              "iswAng"
            ]
          },
          {
            "type": "L",
            "data": [
              "xBp",
              "yBp"
            ]
          },
          {
            "type": "L",
            "data": [
              "xA",
              "yA"
            ]
          },
          {
            "type": "L",
            "data": [
              "xGp",
              "yGp"
            ]
          },
          {
            "type": "L",
            "data": [
              "xF",
              "yF"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw1",
              "rh1",
              "stAng0",
              "swAng0"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "leftRightArrow": {
    "adjustments": {
      "adj1": 50000,
      "adj2": 50000
    },
    "guides": [
      {
        "name": "maxAdj2",
        "op": "*/",
        "args": [
          "50000",
          "w",
          "ss"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x2"
        ]
      },
      {
        "name": "dy",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "200000"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "dy",
          "0"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "y1",
          "x2",
          "hd2"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "x2",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "x3",
          "dx1",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x1",
      "t": "y1",
      "r": "x4",
      "b": "y2"
    }
  },
  "leftRightArrowCallout": {
    "adjustments": {
      "adj1": 25000,
      "adj2": 25000,
      "adj3": 25000,
      "adj4": 48123
    },
    "guides": [
      {
        "name": "maxAdj2",
        "op": "*/",
        "args": [
          "50000",
          "h",
          "ss"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "maxAdj1",
        "op": "*/",
        "args": [
          "a2",
          "2",
          "1"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "maxAdj1"
        ]
      },
      {
        "name": "maxAdj3",
        "op": "*/",
        "args": [
          "50000",
          "w",
          "ss"
        ]
      },
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "0",
          "adj3",
          "maxAdj3"
        ]
      },
      {
        "name": "q2",
        "op": "*/",
        "args": [
          "a3",
          "ss",
          "wd2"
        ]
      },
      {
        "name": "maxAdj4",
        "op": "+-",
        "args": [
          "100000",
          "0",
          "q2"
        ]
      },
      {
        "name": "a4",
        "op": "pin",
        "args": [
          "0",
          "adj4",
          "maxAdj4"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "200000"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy2"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "vc",
          "dy2",
          "0"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a3",
          "100000"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x1"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "w",
          "a4",
          "200000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x2",
      "t": "t",
      "r": "x3",
      "b": "b"
    }
  },
  "leftRightCircularArrow": {
    "adjustments": {
      "adj1": 12500,
      "adj2": 1142319,
      "adj3": 20457681,
      "adj4": 11942319,
      "adj5": 12500
    },
    "guides": [
      {
        "name": "a5",
        "op": "pin",
        "args": [
          "0",
          "adj5",
          "25000"
        ]
      },
      {
        "name": "maxAdj1",
        "op": "*/",
        "args": [
          "a5",
          "2",
          "1"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "maxAdj1"
        ]
      },
      {
        "name": "enAng",
        "op": "pin",
        "args": [
          "1",
          "adj3",
          "21599999"
        ]
      },
      {
        "name": "stAng",
        "op": "pin",
        "args": [
          "0",
          "adj4",
          "21599999"
        ]
      },
      {
        "name": "th",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "thh",
        "op": "*/",
        "args": [
          "ss",
          "a5",
          "100000"
        ]
      },
      {
        "name": "th2",
        "op": "*/",
        "args": [
          "th",
          "1",
          "2"
        ]
      },
      {
        "name": "rw1",
        "op": "+-",
        "args": [
          "wd2",
          "th2",
          "thh"
        ]
      },
      {
        "name": "rh1",
        "op": "+-",
        "args": [
          "hd2",
          "th2",
          "thh"
        ]
      },
      {
        "name": "rw2",
        "op": "+-",
        "args": [
          "rw1",
          "0",
          "th"
        ]
      },
      {
        "name": "rh2",
        "op": "+-",
        "args": [
          "rh1",
          "0",
          "th"
        ]
      },
      {
        "name": "rw3",
        "op": "+-",
        "args": [
          "rw2",
          "th2",
          "0"
        ]
      },
      {
        "name": "rh3",
        "op": "+-",
        "args": [
          "rh2",
          "th2",
          "0"
        ]
      },
      {
        "name": "wtH",
        "op": "sin",
        "args": [
          "rw3",
          "enAng"
        ]
      },
      {
        "name": "htH",
        "op": "cos",
        "args": [
          "rh3",
          "enAng"
        ]
      },
      {
        "name": "dxH",
        "op": "cat2",
        "args": [
          "rw3",
          "htH",
          "wtH"
        ]
      },
      {
        "name": "dyH",
        "op": "sat2",
        "args": [
          "rh3",
          "htH",
          "wtH"
        ]
      },
      {
        "name": "xH",
        "op": "+-",
        "args": [
          "hc",
          "dxH",
          "0"
        ]
      },
      {
        "name": "yH",
        "op": "+-",
        "args": [
          "vc",
          "dyH",
          "0"
        ]
      },
      {
        "name": "rI",
        "op": "min",
        "args": [
          "rw2",
          "rh2"
        ]
      },
      {
        "name": "u1",
        "op": "*/",
        "args": [
          "dxH",
          "dxH",
          "1"
        ]
      },
      {
        "name": "u2",
        "op": "*/",
        "args": [
          "dyH",
          "dyH",
          "1"
        ]
      },
      {
        "name": "u3",
        "op": "*/",
        "args": [
          "rI",
          "rI",
          "1"
        ]
      },
      {
        "name": "u4",
        "op": "+-",
        "args": [
          "u1",
          "0",
          "u3"
        ]
      },
      {
        "name": "u5",
        "op": "+-",
        "args": [
          "u2",
          "0",
          "u3"
        ]
      },
      {
        "name": "u6",
        "op": "*/",
        "args": [
          "u4",
          "u5",
          "u1"
        ]
      },
      {
        "name": "u7",
        "op": "*/",
        "args": [
          "u6",
          "1",
          "u2"
        ]
      },
      {
        "name": "u8",
        "op": "+-",
        "args": [
          "1",
          "0",
          "u7"
        ]
      },
      {
        "name": "u9",
        "op": "sqrt",
        "args": [
          "u8"
        ]
      },
      {
        "name": "u10",
        "op": "*/",
        "args": [
          "u4",
          "1",
          "dxH"
        ]
      },
      {
        "name": "u11",
        "op": "*/",
        "args": [
          "u10",
          "1",
          "dyH"
        ]
      },
      {
        "name": "u12",
        "op": "+/",
        "args": [
          "1",
          "u9",
          "u11"
        ]
      },
      {
        "name": "u13",
        "op": "at2",
        "args": [
          "1",
          "u12"
        ]
      },
      {
        "name": "u14",
        "op": "+-",
        "args": [
          "u13",
          "21600000",
          "0"
        ]
      },
      {
        "name": "u15",
        "op": "?:",
        "args": [
          "u13",
          "u13",
          "u14"
        ]
      },
      {
        "name": "u16",
        "op": "+-",
        "args": [
          "u15",
          "0",
          "enAng"
        ]
      },
      {
        "name": "u17",
        "op": "+-",
        "args": [
          "u16",
          "21600000",
          "0"
        ]
      },
      {
        "name": "u18",
        "op": "?:",
        "args": [
          "u16",
          "u16",
          "u17"
        ]
      },
      {
        "name": "u19",
        "op": "+-",
        "args": [
          "u18",
          "0",
          "cd2"
        ]
      },
      {
        "name": "u20",
        "op": "+-",
        "args": [
          "u18",
          "0",
          "21600000"
        ]
      },
      {
        "name": "u21",
        "op": "?:",
        "args": [
          "u19",
          "u20",
          "u18"
        ]
      },
      {
        "name": "maxAng",
        "op": "abs",
        "args": [
          "u21"
        ]
      },
      {
        "name": "aAng",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAng"
        ]
      },
      {
        "name": "ptAng",
        "op": "+-",
        "args": [
          "enAng",
          "aAng",
          "0"
        ]
      },
      {
        "name": "wtA",
        "op": "sin",
        "args": [
          "rw3",
          "ptAng"
        ]
      },
      {
        "name": "htA",
        "op": "cos",
        "args": [
          "rh3",
          "ptAng"
        ]
      },
      {
        "name": "dxA",
        "op": "cat2",
        "args": [
          "rw3",
          "htA",
          "wtA"
        ]
      },
      {
        "name": "dyA",
        "op": "sat2",
        "args": [
          "rh3",
          "htA",
          "wtA"
        ]
      },
      {
        "name": "xA",
        "op": "+-",
        "args": [
          "hc",
          "dxA",
          "0"
        ]
      },
      {
        "name": "yA",
        "op": "+-",
        "args": [
          "vc",
          "dyA",
          "0"
        ]
      },
      {
        "name": "dxG",
        "op": "cos",
        "args": [
          "thh",
          "ptAng"
        ]
      },
      {
        "name": "dyG",
        "op": "sin",
        "args": [
          "thh",
          "ptAng"
        ]
      },
      {
        "name": "xG",
        "op": "+-",
        "args": [
          "xH",
          "dxG",
          "0"
        ]
      },
      {
        "name": "yG",
        "op": "+-",
        "args": [
          "yH",
          "dyG",
          "0"
        ]
      },
      {
        "name": "dxB",
        "op": "cos",
        "args": [
          "thh",
          "ptAng"
        ]
      },
      {
        "name": "dyB",
        "op": "sin",
        "args": [
          "thh",
          "ptAng"
        ]
      },
      {
        "name": "xB",
        "op": "+-",
        "args": [
          "xH",
          "0",
          "dxB",
          "0"
        ]
      },
      {
        "name": "yB",
        "op": "+-",
        "args": [
          "yH",
          "0",
          "dyB",
          "0"
        ]
      },
      {
        "name": "sx1",
        "op": "+-",
        "args": [
          "xB",
          "0",
          "hc"
        ]
      },
      {
        "name": "sy1",
        "op": "+-",
        "args": [
          "yB",
          "0",
          "vc"
        ]
      },
      {
        "name": "sx2",
        "op": "+-",
        "args": [
          "xG",
          "0",
          "hc"
        ]
      },
      {
        "name": "sy2",
        "op": "+-",
        "args": [
          "yG",
          "0",
          "vc"
        ]
      },
      {
        "name": "rO",
        "op": "min",
        "args": [
          "rw1",
          "rh1"
        ]
      },
      {
        "name": "x1O",
        "op": "*/",
        "args": [
          "sx1",
          "rO",
          "rw1"
        ]
      },
      {
        "name": "y1O",
        "op": "*/",
        "args": [
          "sy1",
          "rO",
          "rh1"
        ]
      },
      {
        "name": "x2O",
        "op": "*/",
        "args": [
          "sx2",
          "rO",
          "rw1"
        ]
      },
      {
        "name": "y2O",
        "op": "*/",
        "args": [
          "sy2",
          "rO",
          "rh1"
        ]
      },
      {
        "name": "dxO",
        "op": "+-",
        "args": [
          "x2O",
          "0",
          "x1O"
        ]
      },
      {
        "name": "dyO",
        "op": "+-",
        "args": [
          "y2O",
          "0",
          "y1O"
        ]
      },
      {
        "name": "dO",
        "op": "mod",
        "args": [
          "dxO",
          "dyO",
          "0"
        ]
      },
      {
        "name": "q1",
        "op": "*/",
        "args": [
          "x1O",
          "y2O",
          "1"
        ]
      },
      {
        "name": "q2",
        "op": "*/",
        "args": [
          "x2O",
          "y1O",
          "1"
        ]
      },
      {
        "name": "DO",
        "op": "+-",
        "args": [
          "q1",
          "0",
          "q2"
        ]
      },
      {
        "name": "q3",
        "op": "*/",
        "args": [
          "rO",
          "rO",
          "1"
        ]
      },
      {
        "name": "q4",
        "op": "*/",
        "args": [
          "dO",
          "dO",
          "1"
        ]
      },
      {
        "name": "q5",
        "op": "*/",
        "args": [
          "q3",
          "q4",
          "1"
        ]
      },
      {
        "name": "q6",
        "op": "*/",
        "args": [
          "DO",
          "DO",
          "1"
        ]
      },
      {
        "name": "q7",
        "op": "+-",
        "args": [
          "q5",
          "0",
          "q6"
        ]
      },
      {
        "name": "q8",
        "op": "max",
        "args": [
          "q7",
          "0"
        ]
      },
      {
        "name": "sdelO",
        "op": "sqrt",
        "args": [
          "q8"
        ]
      },
      {
        "name": "ndyO",
        "op": "*/",
        "args": [
          "dyO",
          "-1",
          "1"
        ]
      },
      {
        "name": "sdyO",
        "op": "?:",
        "args": [
          "ndyO",
          "-1",
          "1"
        ]
      },
      {
        "name": "q9",
        "op": "*/",
        "args": [
          "sdyO",
          "dxO",
          "1"
        ]
      },
      {
        "name": "q10",
        "op": "*/",
        "args": [
          "q9",
          "sdelO",
          "1"
        ]
      },
      {
        "name": "q11",
        "op": "*/",
        "args": [
          "DO",
          "dyO",
          "1"
        ]
      },
      {
        "name": "dxF1",
        "op": "+/",
        "args": [
          "q11",
          "q10",
          "q4"
        ]
      },
      {
        "name": "q12",
        "op": "+-",
        "args": [
          "q11",
          "0",
          "q10"
        ]
      },
      {
        "name": "dxF2",
        "op": "*/",
        "args": [
          "q12",
          "1",
          "q4"
        ]
      },
      {
        "name": "adyO",
        "op": "abs",
        "args": [
          "dyO"
        ]
      },
      {
        "name": "q13",
        "op": "*/",
        "args": [
          "adyO",
          "sdelO",
          "1"
        ]
      },
      {
        "name": "q14",
        "op": "*/",
        "args": [
          "DO",
          "dxO",
          "-1"
        ]
      },
      {
        "name": "dyF1",
        "op": "+/",
        "args": [
          "q14",
          "q13",
          "q4"
        ]
      },
      {
        "name": "q15",
        "op": "+-",
        "args": [
          "q14",
          "0",
          "q13"
        ]
      },
      {
        "name": "dyF2",
        "op": "*/",
        "args": [
          "q15",
          "1",
          "q4"
        ]
      },
      {
        "name": "q16",
        "op": "+-",
        "args": [
          "x2O",
          "0",
          "dxF1"
        ]
      },
      {
        "name": "q17",
        "op": "+-",
        "args": [
          "x2O",
          "0",
          "dxF2"
        ]
      },
      {
        "name": "q18",
        "op": "+-",
        "args": [
          "y2O",
          "0",
          "dyF1"
        ]
      },
      {
        "name": "q19",
        "op": "+-",
        "args": [
          "y2O",
          "0",
          "dyF2"
        ]
      },
      {
        "name": "q20",
        "op": "mod",
        "args": [
          "q16",
          "q18",
          "0"
        ]
      },
      {
        "name": "q21",
        "op": "mod",
        "args": [
          "q17",
          "q19",
          "0"
        ]
      },
      {
        "name": "q22",
        "op": "+-",
        "args": [
          "q21",
          "0",
          "q20"
        ]
      },
      {
        "name": "dxF",
        "op": "?:",
        "args": [
          "q22",
          "dxF1",
          "dxF2"
        ]
      },
      {
        "name": "dyF",
        "op": "?:",
        "args": [
          "q22",
          "dyF1",
          "dyF2"
        ]
      },
      {
        "name": "sdxF",
        "op": "*/",
        "args": [
          "dxF",
          "rw1",
          "rO"
        ]
      },
      {
        "name": "sdyF",
        "op": "*/",
        "args": [
          "dyF",
          "rh1",
          "rO"
        ]
      },
      {
        "name": "xF",
        "op": "+-",
        "args": [
          "hc",
          "sdxF",
          "0"
        ]
      },
      {
        "name": "yF",
        "op": "+-",
        "args": [
          "vc",
          "sdyF",
          "0"
        ]
      },
      {
        "name": "x1I",
        "op": "*/",
        "args": [
          "sx1",
          "rI",
          "rw2"
        ]
      },
      {
        "name": "y1I",
        "op": "*/",
        "args": [
          "sy1",
          "rI",
          "rh2"
        ]
      },
      {
        "name": "x2I",
        "op": "*/",
        "args": [
          "sx2",
          "rI",
          "rw2"
        ]
      },
      {
        "name": "y2I",
        "op": "*/",
        "args": [
          "sy2",
          "rI",
          "rh2"
        ]
      },
      {
        "name": "dxI",
        "op": "+-",
        "args": [
          "x2I",
          "0",
          "x1I"
        ]
      },
      {
        "name": "dyI",
        "op": "+-",
        "args": [
          "y2I",
          "0",
          "y1I"
        ]
      },
      {
        "name": "dI",
        "op": "mod",
        "args": [
          "dxI",
          "dyI",
          "0"
        ]
      },
      {
        "name": "v1",
        "op": "*/",
        "args": [
          "x1I",
          "y2I",
          "1"
        ]
      },
      {
        "name": "v2",
        "op": "*/",
        "args": [
          "x2I",
          "y1I",
          "1"
        ]
      },
      {
        "name": "DI",
        "op": "+-",
        "args": [
          "v1",
          "0",
          "v2"
        ]
      },
      {
        "name": "v3",
        "op": "*/",
        "args": [
          "rI",
          "rI",
          "1"
        ]
      },
      {
        "name": "v4",
        "op": "*/",
        "args": [
          "dI",
          "dI",
          "1"
        ]
      },
      {
        "name": "v5",
        "op": "*/",
        "args": [
          "v3",
          "v4",
          "1"
        ]
      },
      {
        "name": "v6",
        "op": "*/",
        "args": [
          "DI",
          "DI",
          "1"
        ]
      },
      {
        "name": "v7",
        "op": "+-",
        "args": [
          "v5",
          "0",
          "v6"
        ]
      },
      {
        "name": "v8",
        "op": "max",
        "args": [
          "v7",
          "0"
        ]
      },
      {
        "name": "sdelI",
        "op": "sqrt",
        "args": [
          "v8"
        ]
      },
      {
        "name": "v9",
        "op": "*/",
        "args": [
          "sdyO",
          "dxI",
          "1"
        ]
      },
      {
        "name": "v10",
        "op": "*/",
        "args": [
          "v9",
          "sdelI",
          "1"
        ]
      },
      {
        "name": "v11",
        "op": "*/",
        "args": [
          "DI",
          "dyI",
          "1"
        ]
      },
      {
        "name": "dxC1",
        "op": "+/",
        "args": [
          "v11",
          "v10",
          "v4"
        ]
      },
      {
        "name": "v12",
        "op": "+-",
        "args": [
          "v11",
          "0",
          "v10"
        ]
      },
      {
        "name": "dxC2",
        "op": "*/",
        "args": [
          "v12",
          "1",
          "v4"
        ]
      },
      {
        "name": "adyI",
        "op": "abs",
        "args": [
          "dyI"
        ]
      },
      {
        "name": "v13",
        "op": "*/",
        "args": [
          "adyI",
          "sdelI",
          "1"
        ]
      },
      {
        "name": "v14",
        "op": "*/",
        "args": [
          "DI",
          "dxI",
          "-1"
        ]
      },
      {
        "name": "dyC1",
        "op": "+/",
        "args": [
          "v14",
          "v13",
          "v4"
        ]
      },
      {
        "name": "v15",
        "op": "+-",
        "args": [
          "v14",
          "0",
          "v13"
        ]
      },
      {
        "name": "dyC2",
        "op": "*/",
        "args": [
          "v15",
          "1",
          "v4"
        ]
      },
      {
        "name": "v16",
        "op": "+-",
        "args": [
          "x1I",
          "0",
          "dxC1"
        ]
      },
      {
        "name": "v17",
        "op": "+-",
        "args": [
          "x1I",
          "0",
          "dxC2"
        ]
      },
      {
        "name": "v18",
        "op": "+-",
        "args": [
          "y1I",
          "0",
          "dyC1"
        ]
      },
      {
        "name": "v19",
        "op": "+-",
        "args": [
          "y1I",
          "0",
          "dyC2"
        ]
      },
      {
        "name": "v20",
        "op": "mod",
        "args": [
          "v16",
          "v18",
          "0"
        ]
      },
      {
        "name": "v21",
        "op": "mod",
        "args": [
          "v17",
          "v19",
          "0"
        ]
      },
      {
        "name": "v22",
        "op": "+-",
        "args": [
          "v21",
          "0",
          "v20"
        ]
      },
      {
        "name": "dxC",
        "op": "?:",
        "args": [
          "v22",
          "dxC1",
          "dxC2"
        ]
      },
      {
        "name": "dyC",
        "op": "?:",
        "args": [
          "v22",
          "dyC1",
          "dyC2"
        ]
      },
      {
        "name": "sdxC",
        "op": "*/",
        "args": [
          "dxC",
          "rw2",
          "rI"
        ]
      },
      {
        "name": "sdyC",
        "op": "*/",
        "args": [
          "dyC",
          "rh2",
          "rI"
        ]
      },
      {
        "name": "xC",
        "op": "+-",
        "args": [
          "hc",
          "sdxC",
          "0"
        ]
      },
      {
        "name": "yC",
        "op": "+-",
        "args": [
          "vc",
          "sdyC",
          "0"
        ]
      },
      {
        "name": "wtI",
        "op": "sin",
        "args": [
          "rw3",
          "stAng"
        ]
      },
      {
        "name": "htI",
        "op": "cos",
        "args": [
          "rh3",
          "stAng"
        ]
      },
      {
        "name": "dxI",
        "op": "cat2",
        "args": [
          "rw3",
          "htI",
          "wtI"
        ]
      },
      {
        "name": "dyI",
        "op": "sat2",
        "args": [
          "rh3",
          "htI",
          "wtI"
        ]
      },
      {
        "name": "xI",
        "op": "+-",
        "args": [
          "hc",
          "dxI",
          "0"
        ]
      },
      {
        "name": "yI",
        "op": "+-",
        "args": [
          "vc",
          "dyI",
          "0"
        ]
      },
      {
        "name": "lptAng",
        "op": "+-",
        "args": [
          "stAng",
          "0",
          "aAng"
        ]
      },
      {
        "name": "wtL",
        "op": "sin",
        "args": [
          "rw3",
          "lptAng"
        ]
      },
      {
        "name": "htL",
        "op": "cos",
        "args": [
          "rh3",
          "lptAng"
        ]
      },
      {
        "name": "dxL",
        "op": "cat2",
        "args": [
          "rw3",
          "htL",
          "wtL"
        ]
      },
      {
        "name": "dyL",
        "op": "sat2",
        "args": [
          "rh3",
          "htL",
          "wtL"
        ]
      },
      {
        "name": "xL",
        "op": "+-",
        "args": [
          "hc",
          "dxL",
          "0"
        ]
      },
      {
        "name": "yL",
        "op": "+-",
        "args": [
          "vc",
          "dyL",
          "0"
        ]
      },
      {
        "name": "dxK",
        "op": "cos",
        "args": [
          "thh",
          "lptAng"
        ]
      },
      {
        "name": "dyK",
        "op": "sin",
        "args": [
          "thh",
          "lptAng"
        ]
      },
      {
        "name": "xK",
        "op": "+-",
        "args": [
          "xI",
          "dxK",
          "0"
        ]
      },
      {
        "name": "yK",
        "op": "+-",
        "args": [
          "yI",
          "dyK",
          "0"
        ]
      },
      {
        "name": "dxJ",
        "op": "cos",
        "args": [
          "thh",
          "lptAng"
        ]
      },
      {
        "name": "dyJ",
        "op": "sin",
        "args": [
          "thh",
          "lptAng"
        ]
      },
      {
        "name": "xJ",
        "op": "+-",
        "args": [
          "xI",
          "0",
          "dxJ",
          "0"
        ]
      },
      {
        "name": "yJ",
        "op": "+-",
        "args": [
          "yI",
          "0",
          "dyJ",
          "0"
        ]
      },
      {
        "name": "p1",
        "op": "+-",
        "args": [
          "xF",
          "0",
          "xC"
        ]
      },
      {
        "name": "p2",
        "op": "+-",
        "args": [
          "yF",
          "0",
          "yC"
        ]
      },
      {
        "name": "p3",
        "op": "mod",
        "args": [
          "p1",
          "p2",
          "0"
        ]
      },
      {
        "name": "p4",
        "op": "*/",
        "args": [
          "p3",
          "1",
          "2"
        ]
      },
      {
        "name": "p5",
        "op": "+-",
        "args": [
          "p4",
          "0",
          "thh"
        ]
      },
      {
        "name": "xGp",
        "op": "?:",
        "args": [
          "p5",
          "xF",
          "xG"
        ]
      },
      {
        "name": "yGp",
        "op": "?:",
        "args": [
          "p5",
          "yF",
          "yG"
        ]
      },
      {
        "name": "xBp",
        "op": "?:",
        "args": [
          "p5",
          "xC",
          "xB"
        ]
      },
      {
        "name": "yBp",
        "op": "?:",
        "args": [
          "p5",
          "yC",
          "yB"
        ]
      },
      {
        "name": "en0",
        "op": "at2",
        "args": [
          "sdxF",
          "sdyF"
        ]
      },
      {
        "name": "en1",
        "op": "+-",
        "args": [
          "en0",
          "21600000",
          "0"
        ]
      },
      {
        "name": "en2",
        "op": "?:",
        "args": [
          "en0",
          "en0",
          "en1"
        ]
      },
      {
        "name": "od0",
        "op": "+-",
        "args": [
          "en2",
          "0",
          "enAng"
        ]
      },
      {
        "name": "od1",
        "op": "+-",
        "args": [
          "od0",
          "21600000",
          "0"
        ]
      },
      {
        "name": "od2",
        "op": "?:",
        "args": [
          "od0",
          "od0",
          "od1"
        ]
      },
      {
        "name": "st0",
        "op": "+-",
        "args": [
          "stAng",
          "0",
          "od2"
        ]
      },
      {
        "name": "st1",
        "op": "+-",
        "args": [
          "st0",
          "21600000",
          "0"
        ]
      },
      {
        "name": "st2",
        "op": "?:",
        "args": [
          "st0",
          "st0",
          "st1"
        ]
      },
      {
        "name": "sw0",
        "op": "+-",
        "args": [
          "en2",
          "0",
          "st2"
        ]
      },
      {
        "name": "sw1",
        "op": "+-",
        "args": [
          "sw0",
          "21600000",
          "0"
        ]
      },
      {
        "name": "swAng",
        "op": "?:",
        "args": [
          "sw0",
          "sw0",
          "sw1"
        ]
      },
      {
        "name": "ist0",
        "op": "at2",
        "args": [
          "sdxC",
          "sdyC"
        ]
      },
      {
        "name": "ist1",
        "op": "+-",
        "args": [
          "ist0",
          "21600000",
          "0"
        ]
      },
      {
        "name": "istAng",
        "op": "?:",
        "args": [
          "ist0",
          "ist0",
          "ist1"
        ]
      },
      {
        "name": "id0",
        "op": "+-",
        "args": [
          "istAng",
          "0",
          "enAng"
        ]
      },
      {
        "name": "id1",
        "op": "+-",
        "args": [
          "id0",
          "0",
          "21600000"
        ]
      },
      {
        "name": "id2",
        "op": "?:",
        "args": [
          "id0",
          "id1",
          "id0"
        ]
      },
      {
        "name": "ien0",
        "op": "+-",
        "args": [
          "stAng",
          "0",
          "id2"
        ]
      },
      {
        "name": "ien1",
        "op": "+-",
        "args": [
          "ien0",
          "0",
          "21600000"
        ]
      },
      {
        "name": "ien2",
        "op": "?:",
        "args": [
          "ien1",
          "ien1",
          "ien0"
        ]
      },
      {
        "name": "isw1",
        "op": "+-",
        "args": [
          "ien2",
          "0",
          "istAng"
        ]
      },
      {
        "name": "isw2",
        "op": "+-",
        "args": [
          "isw1",
          "0",
          "21600000"
        ]
      },
      {
        "name": "iswAng",
        "op": "?:",
        "args": [
          "isw1",
          "isw2",
          "isw1"
        ]
      },
      {
        "name": "wtE",
        "op": "sin",
        "args": [
          "rw1",
          "st2"
        ]
      },
      {
        "name": "htE",
        "op": "cos",
        "args": [
          "rh1",
          "st2"
        ]
      },
      {
        "name": "dxE",
        "op": "cat2",
        "args": [
          "rw1",
          "htE",
          "wtE"
        ]
      },
      {
        "name": "dyE",
        "op": "sat2",
        "args": [
          "rh1",
          "htE",
          "wtE"
        ]
      },
      {
        "name": "xE",
        "op": "+-",
        "args": [
          "hc",
          "dxE",
          "0"
        ]
      },
      {
        "name": "yE",
        "op": "+-",
        "args": [
          "vc",
          "dyE",
          "0"
        ]
      },
      {
        "name": "wtD",
        "op": "sin",
        "args": [
          "rw2",
          "ien2"
        ]
      },
      {
        "name": "htD",
        "op": "cos",
        "args": [
          "rh2",
          "ien2"
        ]
      },
      {
        "name": "dxD",
        "op": "cat2",
        "args": [
          "rw2",
          "htD",
          "wtD"
        ]
      },
      {
        "name": "dyD",
        "op": "sat2",
        "args": [
          "rh2",
          "htD",
          "wtD"
        ]
      },
      {
        "name": "xD",
        "op": "+-",
        "args": [
          "hc",
          "dxD",
          "0"
        ]
      },
      {
        "name": "yD",
        "op": "+-",
        "args": [
          "vc",
          "dyD",
          "0"
        ]
      },
      {
        "name": "xKp",
        "op": "?:",
        "args": [
          "p5",
          "xE",
          "xK"
        ]
      },
      {
        "name": "yKp",
        "op": "?:",
        "args": [
          "p5",
          "yE",
          "yK"
        ]
      },
      {
        "name": "xJp",
        "op": "?:",
        "args": [
          "p5",
          "xD",
          "xJ"
        ]
      },
      {
        "name": "yJp",
        "op": "?:",
        "args": [
          "p5",
          "yD",
          "yJ"
        ]
      },
      {
        "name": "aL",
        "op": "+-",
        "args": [
          "lptAng",
          "0",
          "cd4"
        ]
      },
      {
        "name": "aA",
        "op": "+-",
        "args": [
          "ptAng",
          "cd4",
          "0"
        ]
      },
      {
        "name": "aB",
        "op": "+-",
        "args": [
          "ptAng",
          "cd2",
          "0"
        ]
      },
      {
        "name": "aJ",
        "op": "+-",
        "args": [
          "lptAng",
          "cd2",
          "0"
        ]
      },
      {
        "name": "idx",
        "op": "cos",
        "args": [
          "rw1",
          "2700000"
        ]
      },
      {
        "name": "idy",
        "op": "sin",
        "args": [
          "rh1",
          "2700000"
        ]
      },
      {
        "name": "il",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "idx"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "hc",
          "idx",
          "0"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "idy"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "vc",
          "idy",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "xL",
              "yL"
            ]
          },
          {
            "type": "L",
            "data": [
              "xKp",
              "yKp"
            ]
          },
          {
            "type": "L",
            "data": [
              "xE",
              "yE"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw1",
              "rh1",
              "st2",
              "swAng"
            ]
          },
          {
            "type": "L",
            "data": [
              "xGp",
              "yGp"
            ]
          },
          {
            "type": "L",
            "data": [
              "xA",
              "yA"
            ]
          },
          {
            "type": "L",
            "data": [
              "xBp",
              "yBp"
            ]
          },
          {
            "type": "L",
            "data": [
              "xC",
              "yC"
            ]
          },
          {
            "type": "A",
            "data": [
              "rw2",
              "rh2",
              "istAng",
              "iswAng"
            ]
          },
          {
            "type": "L",
            "data": [
              "xJp",
              "yJp"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "leftRightRibbon": {
    "adjustments": {
      "adj1": 50000,
      "adj2": 50000,
      "adj3": 16667
    },
    "guides": [
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "0",
          "adj3",
          "33333"
        ]
      },
      {
        "name": "maxAdj1",
        "op": "+-",
        "args": [
          "100000",
          "0",
          "a3"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "maxAdj1"
        ]
      },
      {
        "name": "w1",
        "op": "+-",
        "args": [
          "wd2",
          "0",
          "wd32"
        ]
      },
      {
        "name": "maxAdj2",
        "op": "*/",
        "args": [
          "100000",
          "w1",
          "ss"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x1"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "200000"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "h",
          "a3",
          "-200000"
        ]
      },
      {
        "name": "ly1",
        "op": "+-",
        "args": [
          "vc",
          "dy2",
          "dy1"
        ]
      },
      {
        "name": "ry4",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "dy2"
        ]
      },
      {
        "name": "ly2",
        "op": "+-",
        "args": [
          "ly1",
          "dy1",
          "0"
        ]
      },
      {
        "name": "ry3",
        "op": "+-",
        "args": [
          "b",
          "0",
          "ly2"
        ]
      },
      {
        "name": "ly4",
        "op": "*/",
        "args": [
          "ly2",
          "2",
          "1"
        ]
      },
      {
        "name": "ry1",
        "op": "+-",
        "args": [
          "b",
          "0",
          "ly4"
        ]
      },
      {
        "name": "ly3",
        "op": "+-",
        "args": [
          "ly4",
          "0",
          "ly1"
        ]
      },
      {
        "name": "ry2",
        "op": "+-",
        "args": [
          "b",
          "0",
          "ly3"
        ]
      },
      {
        "name": "hR",
        "op": "*/",
        "args": [
          "a3",
          "ss",
          "400000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "wd32"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "hc",
          "wd32",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "ly1",
          "hR",
          "0"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "ry2",
          "0",
          "hR"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "ly2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "ly1"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "ly1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "3cd4",
              "cd2"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "3cd4",
              "-10800000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "ry2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "ry1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "ry3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "ry4"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "ry4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "ly3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "ly3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "ly4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darkenLess",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "x3",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "0",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "3cd4",
              "-10800000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "ry2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "ly2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "ly1"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "ly1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "3cd4",
              "cd2"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "3cd4",
              "-10800000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "ry2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "ry1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "ry3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "ry4"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "ry4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "ly3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "ly3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "ly4"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "x3",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "ry2"
            ]
          },
          {
            "type": "M",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "ly3"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "x1",
      "t": "ly1",
      "r": "x4",
      "b": "ry4"
    }
  },
  "leftRightUpArrow": {
    "adjustments": {
      "adj1": 25000,
      "adj2": 25000,
      "adj3": 25000
    },
    "guides": [
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "50000"
        ]
      },
      {
        "name": "maxAdj1",
        "op": "*/",
        "args": [
          "a2",
          "2",
          "1"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "maxAdj1"
        ]
      },
      {
        "name": "q1",
        "op": "+-",
        "args": [
          "100000",
          "0",
          "maxAdj1"
        ]
      },
      {
        "name": "maxAdj3",
        "op": "*/",
        "args": [
          "q1",
          "1",
          "2"
        ]
      },
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "0",
          "adj3",
          "maxAdj3"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a3",
          "100000"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x5",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "dx3",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "200000"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx3"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "hc",
          "dx3",
          "0"
        ]
      },
      {
        "name": "x6",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x1"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "50000"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "b",
          "0",
          "dy2"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "b",
          "0",
          "dx2"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "y4",
          "0",
          "dx3"
        ]
      },
      {
        "name": "y5",
        "op": "+-",
        "args": [
          "y4",
          "dx3",
          "0"
        ]
      },
      {
        "name": "il",
        "op": "*/",
        "args": [
          "dx3",
          "x1",
          "dx2"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "r",
          "0",
          "il"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y5"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y5"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "y3",
      "r": "ir",
      "b": "y5"
    }
  },
  "leftUpArrow": {
    "adjustments": {
      "adj1": 25000,
      "adj2": 25000,
      "adj3": 25000
    },
    "guides": [
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "50000"
        ]
      },
      {
        "name": "maxAdj1",
        "op": "*/",
        "args": [
          "a2",
          "2",
          "1"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "maxAdj1"
        ]
      },
      {
        "name": "maxAdj3",
        "op": "+-",
        "args": [
          "100000",
          "0",
          "maxAdj1"
        ]
      },
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "0",
          "adj3",
          "maxAdj3"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a3",
          "100000"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "50000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dx2"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "b",
          "0",
          "dx2"
        ]
      },
      {
        "name": "dx4",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dx4"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "b",
          "0",
          "dx4"
        ]
      },
      {
        "name": "dx3",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "200000"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "x4",
          "0",
          "dx3"
        ]
      },
      {
        "name": "x5",
        "op": "+-",
        "args": [
          "x4",
          "dx3",
          "0"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "y4",
          "0",
          "dx3"
        ]
      },
      {
        "name": "y5",
        "op": "+-",
        "args": [
          "y4",
          "dx3",
          "0"
        ]
      },
      {
        "name": "il",
        "op": "*/",
        "args": [
          "dx3",
          "x1",
          "dx4"
        ]
      },
      {
        "name": "cx1",
        "op": "+/",
        "args": [
          "x1",
          "x5",
          "2"
        ]
      },
      {
        "name": "cy1",
        "op": "+/",
        "args": [
          "x1",
          "y5",
          "2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y5"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y5"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "y3",
      "r": "x4",
      "b": "y5"
    }
  },
  "lightningBolt": {
    "adjustments": {},
    "guides": [
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "w",
          "5022",
          "21600"
        ]
      },
      {
        "name": "x3",
        "op": "*/",
        "args": [
          "w",
          "8472",
          "21600"
        ]
      },
      {
        "name": "x4",
        "op": "*/",
        "args": [
          "w",
          "8757",
          "21600"
        ]
      },
      {
        "name": "x5",
        "op": "*/",
        "args": [
          "w",
          "10012",
          "21600"
        ]
      },
      {
        "name": "x8",
        "op": "*/",
        "args": [
          "w",
          "12860",
          "21600"
        ]
      },
      {
        "name": "x9",
        "op": "*/",
        "args": [
          "w",
          "13917",
          "21600"
        ]
      },
      {
        "name": "x11",
        "op": "*/",
        "args": [
          "w",
          "16577",
          "21600"
        ]
      },
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "h",
          "3890",
          "21600"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "6080",
          "21600"
        ]
      },
      {
        "name": "y4",
        "op": "*/",
        "args": [
          "h",
          "7437",
          "21600"
        ]
      },
      {
        "name": "y6",
        "op": "*/",
        "args": [
          "h",
          "9705",
          "21600"
        ]
      },
      {
        "name": "y7",
        "op": "*/",
        "args": [
          "h",
          "12007",
          "21600"
        ]
      },
      {
        "name": "y10",
        "op": "*/",
        "args": [
          "h",
          "14277",
          "21600"
        ]
      },
      {
        "name": "y11",
        "op": "*/",
        "args": [
          "h",
          "14915",
          "21600"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "8472",
              "0"
            ]
          },
          {
            "type": "L",
            "data": [
              "12860",
              "6080"
            ]
          },
          {
            "type": "L",
            "data": [
              "11050",
              "6797"
            ]
          },
          {
            "type": "L",
            "data": [
              "16577",
              "12007"
            ]
          },
          {
            "type": "L",
            "data": [
              "14767",
              "12877"
            ]
          },
          {
            "type": "L",
            "data": [
              "21600",
              "21600"
            ]
          },
          {
            "type": "L",
            "data": [
              "10012",
              "14915"
            ]
          },
          {
            "type": "L",
            "data": [
              "12222",
              "13987"
            ]
          },
          {
            "type": "L",
            "data": [
              "5022",
              "9705"
            ]
          },
          {
            "type": "L",
            "data": [
              "7602",
              "8382"
            ]
          },
          {
            "type": "L",
            "data": [
              "0",
              "3890"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x4",
      "t": "y4",
      "r": "x9",
      "b": "y10"
    }
  },
  "line": {
    "adjustments": {},
    "guides": [],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          }
        ]
      }
    ]
  },
  "lineInv": {
    "adjustments": {},
    "guides": [],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          }
        ]
      }
    ]
  },
  "mathDivide": {
    "adjustments": {
      "adj1": 23520,
      "adj2": 5880,
      "adj3": 11760
    },
    "guides": [
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "1000",
          "adj1",
          "36745"
        ]
      },
      {
        "name": "ma1",
        "op": "+-",
        "args": [
          "0",
          "0",
          "a1"
        ]
      },
      {
        "name": "ma3h",
        "op": "+/",
        "args": [
          "73490",
          "ma1",
          "4"
        ]
      },
      {
        "name": "ma3w",
        "op": "*/",
        "args": [
          "36745",
          "w",
          "h"
        ]
      },
      {
        "name": "maxAdj3",
        "op": "min",
        "args": [
          "ma3h",
          "ma3w"
        ]
      },
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "1000",
          "adj3",
          "maxAdj3"
        ]
      },
      {
        "name": "m4a3",
        "op": "*/",
        "args": [
          "-4",
          "a3",
          "1"
        ]
      },
      {
        "name": "maxAdj2",
        "op": "+-",
        "args": [
          "73490",
          "m4a3",
          "a1"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "200000"
        ]
      },
      {
        "name": "yg",
        "op": "*/",
        "args": [
          "h",
          "a2",
          "100000"
        ]
      },
      {
        "name": "rad",
        "op": "*/",
        "args": [
          "h",
          "a3",
          "100000"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "w",
          "73490",
          "200000"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "a",
        "op": "+-",
        "args": [
          "yg",
          "rad",
          "0"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "y3",
          "0",
          "a"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "y2",
          "0",
          "rad"
        ]
      },
      {
        "name": "y5",
        "op": "+-",
        "args": [
          "b",
          "0",
          "y1"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "rad"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "hc",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "rad",
              "rad",
              "3cd4",
              "21600000"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "hc",
              "y5"
            ]
          },
          {
            "type": "A",
            "data": [
              "rad",
              "rad",
              "cd4",
              "21600000"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "x1",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x1",
      "t": "y3",
      "r": "x3",
      "b": "y4"
    }
  },
  "mathEqual": {
    "adjustments": {
      "adj1": 23520,
      "adj2": 11760
    },
    "guides": [
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "36745"
        ]
      },
      {
        "name": "2a1",
        "op": "*/",
        "args": [
          "a1",
          "2",
          "1"
        ]
      },
      {
        "name": "mAdj2",
        "op": "+-",
        "args": [
          "100000",
          "0",
          "2a1"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "mAdj2"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "100000"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "h",
          "a2",
          "200000"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "w",
          "73490",
          "200000"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy2"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "vc",
          "dy2",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "y2",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "y3",
          "dy1",
          "0"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "yC1",
        "op": "+/",
        "args": [
          "y1",
          "y2",
          "2"
        ]
      },
      {
        "name": "yC2",
        "op": "+/",
        "args": [
          "y3",
          "y4",
          "2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "x1",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x1",
      "t": "y1",
      "r": "x2",
      "b": "y4"
    }
  },
  "mathMinus": {
    "adjustments": {
      "adj1": 23520
    },
    "guides": [
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "200000"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "w",
          "73490",
          "200000"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x1",
      "t": "y1",
      "r": "x2",
      "b": "y2"
    }
  },
  "mathMultiply": {
    "adjustments": {
      "adj1": 23520
    },
    "guides": [
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "51965"
        ]
      },
      {
        "name": "th",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "a",
        "op": "at2",
        "args": [
          "w",
          "h"
        ]
      },
      {
        "name": "sa",
        "op": "sin",
        "args": [
          "1",
          "a"
        ]
      },
      {
        "name": "ca",
        "op": "cos",
        "args": [
          "1",
          "a"
        ]
      },
      {
        "name": "ta",
        "op": "tan",
        "args": [
          "1",
          "a"
        ]
      },
      {
        "name": "dl",
        "op": "mod",
        "args": [
          "w",
          "h",
          "0"
        ]
      },
      {
        "name": "rw",
        "op": "*/",
        "args": [
          "dl",
          "51965",
          "100000"
        ]
      },
      {
        "name": "lM",
        "op": "+-",
        "args": [
          "dl",
          "0",
          "rw"
        ]
      },
      {
        "name": "xM",
        "op": "*/",
        "args": [
          "ca",
          "lM",
          "2"
        ]
      },
      {
        "name": "yM",
        "op": "*/",
        "args": [
          "sa",
          "lM",
          "2"
        ]
      },
      {
        "name": "dxAM",
        "op": "*/",
        "args": [
          "sa",
          "th",
          "2"
        ]
      },
      {
        "name": "dyAM",
        "op": "*/",
        "args": [
          "ca",
          "th",
          "2"
        ]
      },
      {
        "name": "xA",
        "op": "+-",
        "args": [
          "xM",
          "0",
          "dxAM"
        ]
      },
      {
        "name": "yA",
        "op": "+-",
        "args": [
          "yM",
          "dyAM",
          "0"
        ]
      },
      {
        "name": "xB",
        "op": "+-",
        "args": [
          "xM",
          "dxAM",
          "0"
        ]
      },
      {
        "name": "yB",
        "op": "+-",
        "args": [
          "yM",
          "0",
          "dyAM"
        ]
      },
      {
        "name": "xBC",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "xB"
        ]
      },
      {
        "name": "yBC",
        "op": "*/",
        "args": [
          "xBC",
          "ta",
          "1"
        ]
      },
      {
        "name": "yC",
        "op": "+-",
        "args": [
          "yBC",
          "yB",
          "0"
        ]
      },
      {
        "name": "xD",
        "op": "+-",
        "args": [
          "r",
          "0",
          "xB"
        ]
      },
      {
        "name": "xE",
        "op": "+-",
        "args": [
          "r",
          "0",
          "xA"
        ]
      },
      {
        "name": "yFE",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "yA"
        ]
      },
      {
        "name": "xFE",
        "op": "*/",
        "args": [
          "yFE",
          "1",
          "ta"
        ]
      },
      {
        "name": "xF",
        "op": "+-",
        "args": [
          "xE",
          "0",
          "xFE"
        ]
      },
      {
        "name": "xL",
        "op": "+-",
        "args": [
          "xA",
          "xFE",
          "0"
        ]
      },
      {
        "name": "yG",
        "op": "+-",
        "args": [
          "b",
          "0",
          "yA"
        ]
      },
      {
        "name": "yH",
        "op": "+-",
        "args": [
          "b",
          "0",
          "yB"
        ]
      },
      {
        "name": "yI",
        "op": "+-",
        "args": [
          "b",
          "0",
          "yC"
        ]
      },
      {
        "name": "xC2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "xM"
        ]
      },
      {
        "name": "yC3",
        "op": "+-",
        "args": [
          "b",
          "0",
          "yM"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "xA",
              "yA"
            ]
          },
          {
            "type": "L",
            "data": [
              "xB",
              "yB"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "yC"
            ]
          },
          {
            "type": "L",
            "data": [
              "xD",
              "yB"
            ]
          },
          {
            "type": "L",
            "data": [
              "xE",
              "yA"
            ]
          },
          {
            "type": "L",
            "data": [
              "xF",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "xE",
              "yG"
            ]
          },
          {
            "type": "L",
            "data": [
              "xD",
              "yH"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "yI"
            ]
          },
          {
            "type": "L",
            "data": [
              "xB",
              "yH"
            ]
          },
          {
            "type": "L",
            "data": [
              "xA",
              "yG"
            ]
          },
          {
            "type": "L",
            "data": [
              "xL",
              "vc"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "xA",
      "t": "yB",
      "r": "xE",
      "b": "yH"
    }
  },
  "mathNotEqual": {
    "adjustments": {
      "adj1": 23520,
      "adj2": 6600000,
      "adj3": 11760
    },
    "guides": [
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "50000"
        ]
      },
      {
        "name": "crAng",
        "op": "pin",
        "args": [
          "4200000",
          "adj2",
          "6600000"
        ]
      },
      {
        "name": "2a1",
        "op": "*/",
        "args": [
          "a1",
          "2",
          "1"
        ]
      },
      {
        "name": "maxAdj3",
        "op": "+-",
        "args": [
          "100000",
          "0",
          "2a1"
        ]
      },
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "0",
          "adj3",
          "maxAdj3"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "100000"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "h",
          "a3",
          "200000"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "w",
          "73490",
          "200000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x8",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy2"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "vc",
          "dy2",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "y2",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "y3",
          "dy1",
          "0"
        ]
      },
      {
        "name": "cadj2",
        "op": "+-",
        "args": [
          "crAng",
          "0",
          "cd4"
        ]
      },
      {
        "name": "xadj2",
        "op": "tan",
        "args": [
          "hd2",
          "cadj2"
        ]
      },
      {
        "name": "len",
        "op": "mod",
        "args": [
          "xadj2",
          "hd2",
          "0"
        ]
      },
      {
        "name": "bhw",
        "op": "*/",
        "args": [
          "len",
          "dy1",
          "hd2"
        ]
      },
      {
        "name": "bhw2",
        "op": "*/",
        "args": [
          "bhw",
          "1",
          "2"
        ]
      },
      {
        "name": "x7",
        "op": "+-",
        "args": [
          "hc",
          "xadj2",
          "bhw2"
        ]
      },
      {
        "name": "dx67",
        "op": "*/",
        "args": [
          "xadj2",
          "y1",
          "hd2"
        ]
      },
      {
        "name": "x6",
        "op": "+-",
        "args": [
          "x7",
          "0",
          "dx67"
        ]
      },
      {
        "name": "dx57",
        "op": "*/",
        "args": [
          "xadj2",
          "y2",
          "hd2"
        ]
      },
      {
        "name": "x5",
        "op": "+-",
        "args": [
          "x7",
          "0",
          "dx57"
        ]
      },
      {
        "name": "dx47",
        "op": "*/",
        "args": [
          "xadj2",
          "y3",
          "hd2"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "x7",
          "0",
          "dx47"
        ]
      },
      {
        "name": "dx37",
        "op": "*/",
        "args": [
          "xadj2",
          "y4",
          "hd2"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "x7",
          "0",
          "dx37"
        ]
      },
      {
        "name": "dx27",
        "op": "*/",
        "args": [
          "xadj2",
          "2",
          "1"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "x7",
          "0",
          "dx27"
        ]
      },
      {
        "name": "rx7",
        "op": "+-",
        "args": [
          "x7",
          "bhw",
          "0"
        ]
      },
      {
        "name": "rx6",
        "op": "+-",
        "args": [
          "x6",
          "bhw",
          "0"
        ]
      },
      {
        "name": "rx5",
        "op": "+-",
        "args": [
          "x5",
          "bhw",
          "0"
        ]
      },
      {
        "name": "rx4",
        "op": "+-",
        "args": [
          "x4",
          "bhw",
          "0"
        ]
      },
      {
        "name": "rx3",
        "op": "+-",
        "args": [
          "x3",
          "bhw",
          "0"
        ]
      },
      {
        "name": "rx2",
        "op": "+-",
        "args": [
          "x2",
          "bhw",
          "0"
        ]
      },
      {
        "name": "dx7",
        "op": "*/",
        "args": [
          "dy1",
          "hd2",
          "len"
        ]
      },
      {
        "name": "rxt",
        "op": "+-",
        "args": [
          "x7",
          "dx7",
          "0"
        ]
      },
      {
        "name": "lxt",
        "op": "+-",
        "args": [
          "rx7",
          "0",
          "dx7"
        ]
      },
      {
        "name": "rx",
        "op": "?:",
        "args": [
          "cadj2",
          "rxt",
          "rx7"
        ]
      },
      {
        "name": "lx",
        "op": "?:",
        "args": [
          "cadj2",
          "x7",
          "lxt"
        ]
      },
      {
        "name": "dy3",
        "op": "*/",
        "args": [
          "dy1",
          "xadj2",
          "len"
        ]
      },
      {
        "name": "dy4",
        "op": "+-",
        "args": [
          "0",
          "0",
          "dy3"
        ]
      },
      {
        "name": "ry",
        "op": "?:",
        "args": [
          "cadj2",
          "dy3",
          "t"
        ]
      },
      {
        "name": "ly",
        "op": "?:",
        "args": [
          "cadj2",
          "t",
          "dy4"
        ]
      },
      {
        "name": "dlx",
        "op": "+-",
        "args": [
          "w",
          "0",
          "rx"
        ]
      },
      {
        "name": "drx",
        "op": "+-",
        "args": [
          "w",
          "0",
          "lx"
        ]
      },
      {
        "name": "dly",
        "op": "+-",
        "args": [
          "h",
          "0",
          "ry"
        ]
      },
      {
        "name": "dry",
        "op": "+-",
        "args": [
          "h",
          "0",
          "ly"
        ]
      },
      {
        "name": "xC1",
        "op": "+/",
        "args": [
          "rx",
          "lx",
          "2"
        ]
      },
      {
        "name": "xC2",
        "op": "+/",
        "args": [
          "drx",
          "dlx",
          "2"
        ]
      },
      {
        "name": "yC1",
        "op": "+/",
        "args": [
          "ry",
          "ly",
          "2"
        ]
      },
      {
        "name": "yC2",
        "op": "+/",
        "args": [
          "y1",
          "y2",
          "2"
        ]
      },
      {
        "name": "yC3",
        "op": "+/",
        "args": [
          "y3",
          "y4",
          "2"
        ]
      },
      {
        "name": "yC4",
        "op": "+/",
        "args": [
          "dry",
          "dly",
          "2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "lx",
              "ly"
            ]
          },
          {
            "type": "L",
            "data": [
              "rx",
              "ry"
            ]
          },
          {
            "type": "L",
            "data": [
              "rx6",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "rx5",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "rx4",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "rx3",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "drx",
              "dry"
            ]
          },
          {
            "type": "L",
            "data": [
              "dlx",
              "dly"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x1",
      "t": "y1",
      "r": "x8",
      "b": "y4"
    }
  },
  "mathPlus": {
    "adjustments": {
      "adj1": 23520
    },
    "guides": [
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "73490"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "w",
          "73490",
          "200000"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "h",
          "73490",
          "200000"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "200000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "vc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y3"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x1",
      "t": "y2",
      "r": "x4",
      "b": "y3"
    }
  },
  "moon": {
    "adjustments": {
      "adj": 50000
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "87500"
        ]
      },
      {
        "name": "g0",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "g0w",
        "op": "*/",
        "args": [
          "g0",
          "w",
          "ss"
        ]
      },
      {
        "name": "g1",
        "op": "+-",
        "args": [
          "ss",
          "0",
          "g0"
        ]
      },
      {
        "name": "g2",
        "op": "*/",
        "args": [
          "g0",
          "g0",
          "g1"
        ]
      },
      {
        "name": "g3",
        "op": "*/",
        "args": [
          "ss",
          "ss",
          "g1"
        ]
      },
      {
        "name": "g4",
        "op": "*/",
        "args": [
          "g3",
          "2",
          "1"
        ]
      },
      {
        "name": "g5",
        "op": "+-",
        "args": [
          "g4",
          "0",
          "g2"
        ]
      },
      {
        "name": "g6",
        "op": "+-",
        "args": [
          "g5",
          "0",
          "g0"
        ]
      },
      {
        "name": "g6w",
        "op": "*/",
        "args": [
          "g6",
          "w",
          "ss"
        ]
      },
      {
        "name": "g7",
        "op": "*/",
        "args": [
          "g5",
          "1",
          "2"
        ]
      },
      {
        "name": "g8",
        "op": "+-",
        "args": [
          "g7",
          "0",
          "g0"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "g8",
          "hd2",
          "ss"
        ]
      },
      {
        "name": "g10h",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "g11h",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "g12",
        "op": "*/",
        "args": [
          "g0",
          "9598",
          "32768"
        ]
      },
      {
        "name": "g12w",
        "op": "*/",
        "args": [
          "g12",
          "w",
          "ss"
        ]
      },
      {
        "name": "g13",
        "op": "+-",
        "args": [
          "ss",
          "0",
          "g12"
        ]
      },
      {
        "name": "q1",
        "op": "*/",
        "args": [
          "ss",
          "ss",
          "1"
        ]
      },
      {
        "name": "q2",
        "op": "*/",
        "args": [
          "g13",
          "g13",
          "1"
        ]
      },
      {
        "name": "q3",
        "op": "+-",
        "args": [
          "q1",
          "0",
          "q2"
        ]
      },
      {
        "name": "q4",
        "op": "sqrt",
        "args": [
          "q3"
        ]
      },
      {
        "name": "dy4",
        "op": "*/",
        "args": [
          "q4",
          "hd2",
          "ss"
        ]
      },
      {
        "name": "g15h",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy4"
        ]
      },
      {
        "name": "g16h",
        "op": "+-",
        "args": [
          "vc",
          "dy4",
          "0"
        ]
      },
      {
        "name": "g17w",
        "op": "+-",
        "args": [
          "g6w",
          "0",
          "g0w"
        ]
      },
      {
        "name": "g18w",
        "op": "*/",
        "args": [
          "g17w",
          "1",
          "2"
        ]
      },
      {
        "name": "dx2p",
        "op": "+-",
        "args": [
          "g0w",
          "g18w",
          "w"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "dx2p",
          "-1",
          "1"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "hd2",
          "-1",
          "1"
        ]
      },
      {
        "name": "stAng1",
        "op": "at2",
        "args": [
          "dx2",
          "dy2"
        ]
      },
      {
        "name": "enAngp1",
        "op": "at2",
        "args": [
          "dx2",
          "hd2"
        ]
      },
      {
        "name": "enAng1",
        "op": "+-",
        "args": [
          "enAngp1",
          "0",
          "21600000"
        ]
      },
      {
        "name": "swAng1",
        "op": "+-",
        "args": [
          "enAng1",
          "0",
          "stAng1"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "hd2",
              "cd4",
              "cd2"
            ]
          },
          {
            "type": "A",
            "data": [
              "g18w",
              "dy1",
              "stAng1",
              "swAng1"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "g12w",
      "t": "g15h",
      "r": "g0w",
      "b": "g16h"
    }
  },
  "nonIsoscelesTrapezoid": {
    "adjustments": {
      "adj1": 25000,
      "adj2": 25000
    },
    "guides": [
      {
        "name": "maxAdj",
        "op": "*/",
        "args": [
          "50000",
          "w",
          "ss"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "maxAdj"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "200000"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "dx3",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dx3"
        ]
      },
      {
        "name": "x4",
        "op": "+/",
        "args": [
          "r",
          "x3",
          "2"
        ]
      },
      {
        "name": "il",
        "op": "*/",
        "args": [
          "wd3",
          "a1",
          "maxAdj"
        ]
      },
      {
        "name": "adjm",
        "op": "max",
        "args": [
          "a1",
          "a2"
        ]
      },
      {
        "name": "it",
        "op": "*/",
        "args": [
          "hd3",
          "adjm",
          "maxAdj"
        ]
      },
      {
        "name": "irt",
        "op": "*/",
        "args": [
          "wd3",
          "a2",
          "maxAdj"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "r",
          "0",
          "irt"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "b"
    }
  },
  "noSmoking": {
    "adjustments": {
      "adj": 18750
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "50000"
        ]
      },
      {
        "name": "dr",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "iwd2",
        "op": "+-",
        "args": [
          "wd2",
          "0",
          "dr"
        ]
      },
      {
        "name": "ihd2",
        "op": "+-",
        "args": [
          "hd2",
          "0",
          "dr"
        ]
      },
      {
        "name": "ang",
        "op": "at2",
        "args": [
          "w",
          "h"
        ]
      },
      {
        "name": "ct",
        "op": "cos",
        "args": [
          "ihd2",
          "ang"
        ]
      },
      {
        "name": "st",
        "op": "sin",
        "args": [
          "iwd2",
          "ang"
        ]
      },
      {
        "name": "m",
        "op": "mod",
        "args": [
          "ct",
          "st",
          "0"
        ]
      },
      {
        "name": "n",
        "op": "*/",
        "args": [
          "iwd2",
          "ihd2",
          "m"
        ]
      },
      {
        "name": "drd2",
        "op": "*/",
        "args": [
          "dr",
          "1",
          "2"
        ]
      },
      {
        "name": "dang",
        "op": "at2",
        "args": [
          "n",
          "drd2"
        ]
      },
      {
        "name": "2dang",
        "op": "*/",
        "args": [
          "dang",
          "2",
          "1"
        ]
      },
      {
        "name": "swAng",
        "op": "+-",
        "args": [
          "-10800000",
          "2dang",
          "0"
        ]
      },
      {
        "name": "t3",
        "op": "at2",
        "args": [
          "w",
          "h"
        ]
      },
      {
        "name": "stAng1",
        "op": "+-",
        "args": [
          "t3",
          "0",
          "dang"
        ]
      },
      {
        "name": "stAng2",
        "op": "+-",
        "args": [
          "stAng1",
          "0",
          "cd2"
        ]
      },
      {
        "name": "ct1",
        "op": "cos",
        "args": [
          "ihd2",
          "stAng1"
        ]
      },
      {
        "name": "st1",
        "op": "sin",
        "args": [
          "iwd2",
          "stAng1"
        ]
      },
      {
        "name": "m1",
        "op": "mod",
        "args": [
          "ct1",
          "st1",
          "0"
        ]
      },
      {
        "name": "n1",
        "op": "*/",
        "args": [
          "iwd2",
          "ihd2",
          "m1"
        ]
      },
      {
        "name": "dx1",
        "op": "cos",
        "args": [
          "n1",
          "stAng1"
        ]
      },
      {
        "name": "dy1",
        "op": "sin",
        "args": [
          "n1",
          "stAng1"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "idx",
        "op": "cos",
        "args": [
          "wd2",
          "2700000"
        ]
      },
      {
        "name": "idy",
        "op": "sin",
        "args": [
          "hd2",
          "2700000"
        ]
      },
      {
        "name": "il",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "idx"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "hc",
          "idx",
          "0"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "idy"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "vc",
          "idy",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "0",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "iwd2",
              "ihd2",
              "stAng1",
              "swAng"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "A",
            "data": [
              "iwd2",
              "ihd2",
              "stAng2",
              "swAng"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "notchedRightArrow": {
    "adjustments": {
      "adj1": 50000,
      "adj2": 50000
    },
    "guides": [
      {
        "name": "maxAdj2",
        "op": "*/",
        "args": [
          "100000",
          "w",
          "ss"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dx2"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "200000"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "dy1",
          "dx2",
          "hd2"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x1"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "vc"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x1",
      "t": "y1",
      "r": "x3",
      "b": "y2"
    }
  },
  "octagon": {
    "adjustments": {
      "adj": 29289
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "50000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "b",
          "0",
          "x1"
        ]
      },
      {
        "name": "il",
        "op": "*/",
        "args": [
          "x1",
          "1",
          "2"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "r",
          "0",
          "il"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "b",
          "0",
          "il"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "il",
      "r": "ir",
      "b": "ib"
    }
  },
  "parallelogram": {
    "adjustments": {
      "adj": 25000
    },
    "guides": [
      {
        "name": "maxAdj",
        "op": "*/",
        "args": [
          "100000",
          "w",
          "ss"
        ]
      },
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "maxAdj"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "200000"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "x6",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x1"
        ]
      },
      {
        "name": "x5",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x2"
        ]
      },
      {
        "name": "x3",
        "op": "*/",
        "args": [
          "x5",
          "1",
          "2"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x3"
        ]
      },
      {
        "name": "il",
        "op": "*/",
        "args": [
          "wd2",
          "a",
          "maxAdj"
        ]
      },
      {
        "name": "q1",
        "op": "*/",
        "args": [
          "5",
          "a",
          "maxAdj"
        ]
      },
      {
        "name": "q2",
        "op": "+/",
        "args": [
          "1",
          "q1",
          "12"
        ]
      },
      {
        "name": "il",
        "op": "*/",
        "args": [
          "q2",
          "w",
          "1"
        ]
      },
      {
        "name": "it",
        "op": "*/",
        "args": [
          "q2",
          "h",
          "1"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "r",
          "0",
          "il"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "b",
          "0",
          "it"
        ]
      },
      {
        "name": "q3",
        "op": "*/",
        "args": [
          "h",
          "hc",
          "x2"
        ]
      },
      {
        "name": "y1",
        "op": "pin",
        "args": [
          "0",
          "q3",
          "h"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "b",
          "0",
          "y1"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "pentagon": {
    "adjustments": {
      "hf": 105146,
      "vf": 110557
    },
    "guides": [
      {
        "name": "swd2",
        "op": "*/",
        "args": [
          "wd2",
          "hf",
          "100000"
        ]
      },
      {
        "name": "shd2",
        "op": "*/",
        "args": [
          "hd2",
          "vf",
          "100000"
        ]
      },
      {
        "name": "svc",
        "op": "*/",
        "args": [
          "vc",
          "vf",
          "100000"
        ]
      },
      {
        "name": "dx1",
        "op": "cos",
        "args": [
          "swd2",
          "1080000"
        ]
      },
      {
        "name": "dx2",
        "op": "cos",
        "args": [
          "swd2",
          "18360000"
        ]
      },
      {
        "name": "dy1",
        "op": "sin",
        "args": [
          "shd2",
          "1080000"
        ]
      },
      {
        "name": "dy2",
        "op": "sin",
        "args": [
          "shd2",
          "18360000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "svc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "svc",
          "0",
          "dy2"
        ]
      },
      {
        "name": "it",
        "op": "*/",
        "args": [
          "y1",
          "dx2",
          "dx1"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x2",
      "t": "it",
      "r": "x3",
      "b": "y2"
    }
  },
  "pie": {
    "adjustments": {
      "adj1": 0,
      "adj2": 16200000
    },
    "guides": [
      {
        "name": "stAng",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "21599999"
        ]
      },
      {
        "name": "enAng",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "21599999"
        ]
      },
      {
        "name": "sw1",
        "op": "+-",
        "args": [
          "enAng",
          "0",
          "stAng"
        ]
      },
      {
        "name": "sw2",
        "op": "+-",
        "args": [
          "sw1",
          "21600000",
          "0"
        ]
      },
      {
        "name": "swAng",
        "op": "?:",
        "args": [
          "sw1",
          "sw1",
          "sw2"
        ]
      },
      {
        "name": "wt1",
        "op": "sin",
        "args": [
          "wd2",
          "stAng"
        ]
      },
      {
        "name": "ht1",
        "op": "cos",
        "args": [
          "hd2",
          "stAng"
        ]
      },
      {
        "name": "dx1",
        "op": "cat2",
        "args": [
          "wd2",
          "ht1",
          "wt1"
        ]
      },
      {
        "name": "dy1",
        "op": "sat2",
        "args": [
          "hd2",
          "ht1",
          "wt1"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "wt2",
        "op": "sin",
        "args": [
          "wd2",
          "enAng"
        ]
      },
      {
        "name": "ht2",
        "op": "cos",
        "args": [
          "hd2",
          "enAng"
        ]
      },
      {
        "name": "dx2",
        "op": "cat2",
        "args": [
          "wd2",
          "ht2",
          "wt2"
        ]
      },
      {
        "name": "dy2",
        "op": "sat2",
        "args": [
          "hd2",
          "ht2",
          "wt2"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "dy2",
          "0"
        ]
      },
      {
        "name": "idx",
        "op": "cos",
        "args": [
          "wd2",
          "2700000"
        ]
      },
      {
        "name": "idy",
        "op": "sin",
        "args": [
          "hd2",
          "2700000"
        ]
      },
      {
        "name": "il",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "idx"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "hc",
          "idx",
          "0"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "idy"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "vc",
          "idy",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "stAng",
              "swAng"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "vc"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "ir",
      "r": "it",
      "b": "ib"
    }
  },
  "pieWedge": {
    "adjustments": {},
    "guides": [
      {
        "name": "g1",
        "op": "cos",
        "args": [
          "w",
          "13500000"
        ]
      },
      {
        "name": "g2",
        "op": "sin",
        "args": [
          "h",
          "13500000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "r",
          "g1",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "b",
          "g2",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "h",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x1",
      "t": "y1",
      "r": "r",
      "b": "b"
    }
  },
  "plaque": {
    "adjustments": {
      "adj": 16667
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "50000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "b",
          "0",
          "x1"
        ]
      },
      {
        "name": "il",
        "op": "*/",
        "args": [
          "x1",
          "70711",
          "100000"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "r",
          "0",
          "il"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "b",
          "0",
          "il"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "x1"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "cd4",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "cd2",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y2"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "3cd4",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "0",
              "-5400000"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "il",
      "r": "ir",
      "b": "ib"
    }
  },
  "plaqueTabs": {
    "adjustments": {},
    "guides": [
      {
        "name": "md",
        "op": "mod",
        "args": [
          "w",
          "h",
          "0"
        ]
      },
      {
        "name": "dx",
        "op": "*/",
        "args": [
          "1",
          "md",
          "20"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "0",
          "b",
          "dx"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "0",
          "r",
          "dx"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "dx",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "dx",
              "dx",
              "0",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "dx",
              "dx",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "dx"
            ]
          },
          {
            "type": "A",
            "data": [
              "dx",
              "dx",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "dx",
              "dx",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "dx",
      "t": "dx",
      "r": "x1",
      "b": "y1"
    }
  },
  "plus": {
    "adjustments": {
      "adj": 25000
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "50000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "b",
          "0",
          "x1"
        ]
      },
      {
        "name": "d",
        "op": "+-",
        "args": [
          "w",
          "0",
          "h"
        ]
      },
      {
        "name": "il",
        "op": "?:",
        "args": [
          "d",
          "l",
          "x1"
        ]
      },
      {
        "name": "ir",
        "op": "?:",
        "args": [
          "d",
          "r",
          "x2"
        ]
      },
      {
        "name": "it",
        "op": "?:",
        "args": [
          "d",
          "x1",
          "t"
        ]
      },
      {
        "name": "ib",
        "op": "?:",
        "args": [
          "d",
          "y2",
          "b"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "quadArrow": {
    "adjustments": {
      "adj1": 22500,
      "adj2": 22500,
      "adj3": 22500
    },
    "guides": [
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "50000"
        ]
      },
      {
        "name": "maxAdj1",
        "op": "*/",
        "args": [
          "a2",
          "2",
          "1"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "maxAdj1"
        ]
      },
      {
        "name": "q1",
        "op": "+-",
        "args": [
          "100000",
          "0",
          "maxAdj1"
        ]
      },
      {
        "name": "maxAdj3",
        "op": "*/",
        "args": [
          "q1",
          "1",
          "2"
        ]
      },
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "0",
          "adj3",
          "maxAdj3"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a3",
          "100000"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x5",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "dx3",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "200000"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx3"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "hc",
          "dx3",
          "0"
        ]
      },
      {
        "name": "x6",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "y5",
        "op": "+-",
        "args": [
          "vc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dx3"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "vc",
          "dx3",
          "0"
        ]
      },
      {
        "name": "y6",
        "op": "+-",
        "args": [
          "b",
          "0",
          "x1"
        ]
      },
      {
        "name": "il",
        "op": "*/",
        "args": [
          "dx3",
          "x1",
          "dx2"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "r",
          "0",
          "il"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "x1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y5"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y5"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "y3",
      "r": "ir",
      "b": "y4"
    }
  },
  "quadArrowCallout": {
    "adjustments": {
      "adj1": 18515,
      "adj2": 18515,
      "adj3": 18515,
      "adj4": 48123
    },
    "guides": [
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "50000"
        ]
      },
      {
        "name": "maxAdj1",
        "op": "*/",
        "args": [
          "a2",
          "2",
          "1"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "maxAdj1"
        ]
      },
      {
        "name": "maxAdj3",
        "op": "+-",
        "args": [
          "50000",
          "0",
          "a2"
        ]
      },
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "0",
          "adj3",
          "maxAdj3"
        ]
      },
      {
        "name": "q2",
        "op": "*/",
        "args": [
          "a3",
          "2",
          "1"
        ]
      },
      {
        "name": "maxAdj4",
        "op": "+-",
        "args": [
          "100000",
          "0",
          "q2"
        ]
      },
      {
        "name": "a4",
        "op": "pin",
        "args": [
          "a1",
          "adj4",
          "maxAdj4"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "dx3",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "200000"
        ]
      },
      {
        "name": "ah",
        "op": "*/",
        "args": [
          "ss",
          "a3",
          "100000"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "w",
          "a4",
          "200000"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "h",
          "a4",
          "200000"
        ]
      },
      {
        "name": "x8",
        "op": "+-",
        "args": [
          "r",
          "0",
          "ah"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x7",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x6",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx3"
        ]
      },
      {
        "name": "x5",
        "op": "+-",
        "args": [
          "hc",
          "dx3",
          "0"
        ]
      },
      {
        "name": "y8",
        "op": "+-",
        "args": [
          "b",
          "0",
          "ah"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y7",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "y6",
        "op": "+-",
        "args": [
          "vc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dx3"
        ]
      },
      {
        "name": "y5",
        "op": "+-",
        "args": [
          "vc",
          "dx3",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "ah",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "ah",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "ah"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "ah"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "ah"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "ah"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x7",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x7",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y5"
            ]
          },
          {
            "type": "L",
            "data": [
              "x7",
              "y5"
            ]
          },
          {
            "type": "L",
            "data": [
              "x7",
              "y7"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y7"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y8"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y8"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y8"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y8"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y7"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y7"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y5"
            ]
          },
          {
            "type": "L",
            "data": [
              "ah",
              "y5"
            ]
          },
          {
            "type": "L",
            "data": [
              "ah",
              "y6"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x2",
      "t": "y2",
      "r": "x7",
      "b": "y7"
    }
  },
  "rect": {
    "adjustments": {},
    "guides": [],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "ribbon": {
    "adjustments": {
      "adj1": 16667,
      "adj2": 50000
    },
    "guides": [
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "33333"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "25000",
          "adj2",
          "75000"
        ]
      },
      {
        "name": "x10",
        "op": "+-",
        "args": [
          "r",
          "0",
          "wd8"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "w",
          "a2",
          "200000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x9",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "x2",
          "wd32",
          "0"
        ]
      },
      {
        "name": "x8",
        "op": "+-",
        "args": [
          "x9",
          "0",
          "wd32"
        ]
      },
      {
        "name": "x5",
        "op": "+-",
        "args": [
          "x2",
          "wd8",
          "0"
        ]
      },
      {
        "name": "x6",
        "op": "+-",
        "args": [
          "x9",
          "0",
          "wd8"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "x5",
          "0",
          "wd32"
        ]
      },
      {
        "name": "x7",
        "op": "+-",
        "args": [
          "x6",
          "wd32",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "200000"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "100000"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "b",
          "0",
          "y2"
        ]
      },
      {
        "name": "y3",
        "op": "*/",
        "args": [
          "y4",
          "1",
          "2"
        ]
      },
      {
        "name": "hR",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "400000"
        ]
      },
      {
        "name": "y5",
        "op": "+-",
        "args": [
          "b",
          "0",
          "hR"
        ]
      },
      {
        "name": "y6",
        "op": "+-",
        "args": [
          "y2",
          "0",
          "hR"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "3cd4",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "3cd4",
              "-10800000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y2"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "cd4",
              "-10800000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x7",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "cd4",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x10",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x9",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x9",
              "y5"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "0",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "wd8",
              "y3"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darkenLess",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "x5",
              "hR"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "0",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "3cd4",
              "-10800000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "x6",
              "hR"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "cd2",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "3cd4",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "3cd4",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "3cd4",
              "-10800000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y2"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "cd4",
              "-10800000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x7",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "cd4",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x10",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x9",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x9",
              "y5"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "0",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "wd8",
              "y3"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "x5",
              "hR"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y2"
            ]
          },
          {
            "type": "M",
            "data": [
              "x6",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "hR"
            ]
          },
          {
            "type": "M",
            "data": [
              "x2",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y6"
            ]
          },
          {
            "type": "M",
            "data": [
              "x9",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "x9",
              "y4"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "x2",
      "t": "y2",
      "r": "x9",
      "b": "b"
    }
  },
  "ribbon2": {
    "adjustments": {
      "adj1": 16667,
      "adj2": 50000
    },
    "guides": [
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "33333"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "25000",
          "adj2",
          "75000"
        ]
      },
      {
        "name": "x10",
        "op": "+-",
        "args": [
          "r",
          "0",
          "wd8"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "w",
          "a2",
          "200000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x9",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "x2",
          "wd32",
          "0"
        ]
      },
      {
        "name": "x8",
        "op": "+-",
        "args": [
          "x9",
          "0",
          "wd32"
        ]
      },
      {
        "name": "x5",
        "op": "+-",
        "args": [
          "x2",
          "wd8",
          "0"
        ]
      },
      {
        "name": "x6",
        "op": "+-",
        "args": [
          "x9",
          "0",
          "wd8"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "x5",
          "0",
          "wd32"
        ]
      },
      {
        "name": "x7",
        "op": "+-",
        "args": [
          "x6",
          "wd32",
          "0"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "200000"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "b",
          "0",
          "dy1"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "100000"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "b",
          "0",
          "dy2"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "t",
          "dy2",
          "0"
        ]
      },
      {
        "name": "y3",
        "op": "+/",
        "args": [
          "y4",
          "b",
          "2"
        ]
      },
      {
        "name": "hR",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "400000"
        ]
      },
      {
        "name": "y6",
        "op": "+-",
        "args": [
          "b",
          "0",
          "hR"
        ]
      },
      {
        "name": "y7",
        "op": "+-",
        "args": [
          "y1",
          "0",
          "hR"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "cd4",
              "-10800000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "cd4",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y2"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "3cd4",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x7",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "3cd4",
              "-10800000"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x10",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x9",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x9",
              "hR"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "0",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "3cd4",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "wd8",
              "y3"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darkenLess",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "x5",
              "y6"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "0",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "cd4",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "x6",
              "y6"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "cd4",
              "-10800000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "wd8",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "hR"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x9",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x9",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x10",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x7",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "cd4",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "cd4",
              "-10800000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y2"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "3cd4",
              "-10800000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd32",
              "hR",
              "3cd4",
              "cd2"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "x5",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y6"
            ]
          },
          {
            "type": "M",
            "data": [
              "x6",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y2"
            ]
          },
          {
            "type": "M",
            "data": [
              "x2",
              "y7"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y4"
            ]
          },
          {
            "type": "M",
            "data": [
              "x9",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x9",
              "y7"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "x2",
      "t": "t",
      "r": "x9",
      "b": "y2"
    }
  },
  "rightArrow": {
    "adjustments": {
      "adj1": 50000,
      "adj2": 50000
    },
    "guides": [
      {
        "name": "maxAdj2",
        "op": "*/",
        "args": [
          "100000",
          "w",
          "ss"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dx1"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "200000"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "y1",
          "dx1",
          "hd2"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "x1",
          "dx2",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "y1",
      "r": "x2",
      "b": "y2"
    }
  },
  "rightArrowCallout": {
    "adjustments": {
      "adj1": 25000,
      "adj2": 25000,
      "adj3": 25000,
      "adj4": 64977
    },
    "guides": [
      {
        "name": "maxAdj2",
        "op": "*/",
        "args": [
          "50000",
          "h",
          "ss"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "maxAdj1",
        "op": "*/",
        "args": [
          "a2",
          "2",
          "1"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "maxAdj1"
        ]
      },
      {
        "name": "maxAdj3",
        "op": "*/",
        "args": [
          "100000",
          "w",
          "ss"
        ]
      },
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "0",
          "adj3",
          "maxAdj3"
        ]
      },
      {
        "name": "q2",
        "op": "*/",
        "args": [
          "a3",
          "ss",
          "w"
        ]
      },
      {
        "name": "maxAdj4",
        "op": "+-",
        "args": [
          "100000",
          "0",
          "q2"
        ]
      },
      {
        "name": "a4",
        "op": "pin",
        "args": [
          "0",
          "adj4",
          "maxAdj4"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "200000"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy2"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "vc",
          "dy2",
          "0"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "dx3",
        "op": "*/",
        "args": [
          "ss",
          "a3",
          "100000"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dx3"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "a4",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "x2",
          "1",
          "2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "x2",
      "b": "b"
    }
  },
  "rightBrace": {
    "adjustments": {
      "adj1": 8333,
      "adj2": 50000
    },
    "guides": [
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "100000"
        ]
      },
      {
        "name": "q1",
        "op": "+-",
        "args": [
          "100000",
          "0",
          "a2"
        ]
      },
      {
        "name": "q2",
        "op": "min",
        "args": [
          "q1",
          "a2"
        ]
      },
      {
        "name": "q3",
        "op": "*/",
        "args": [
          "q2",
          "1",
          "2"
        ]
      },
      {
        "name": "maxAdj1",
        "op": "*/",
        "args": [
          "q3",
          "h",
          "ss"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "maxAdj1"
        ]
      },
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "y3",
        "op": "*/",
        "args": [
          "h",
          "a2",
          "100000"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "y3",
          "0",
          "y1"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "b",
          "0",
          "y1"
        ]
      },
      {
        "name": "dx1",
        "op": "cos",
        "args": [
          "wd2",
          "2700000"
        ]
      },
      {
        "name": "dy1",
        "op": "sin",
        "args": [
          "y1",
          "2700000"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "l",
          "dx1",
          "0"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "y1",
          "0",
          "dy1"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "b",
          "dy1",
          "y1"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "y2"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "cd2",
              "-5400000"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "3cd4",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "y4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "0",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "y2"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "cd2",
              "-5400000"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "3cd4",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "y4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "y1",
              "0",
              "cd4"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "rightBracket": {
    "adjustments": {
      "adj": 8333
    },
    "guides": [
      {
        "name": "maxAdj",
        "op": "*/",
        "args": [
          "50000",
          "h",
          "ss"
        ]
      },
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "maxAdj"
        ]
      },
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "b",
          "0",
          "y1"
        ]
      },
      {
        "name": "dx1",
        "op": "cos",
        "args": [
          "w",
          "2700000"
        ]
      },
      {
        "name": "dy1",
        "op": "sin",
        "args": [
          "y1",
          "2700000"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "l",
          "dx1",
          "0"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "y1",
          "0",
          "dy1"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "b",
          "dy1",
          "y1"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "y1",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y2"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "y1",
              "0",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "y1",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y2"
            ]
          },
          {
            "type": "A",
            "data": [
              "w",
              "y1",
              "0",
              "cd4"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "round1Rect": {
    "adjustments": {
      "adj": 16667
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "50000"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dx1"
        ]
      },
      {
        "name": "idx",
        "op": "*/",
        "args": [
          "dx1",
          "29289",
          "100000"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "r",
          "0",
          "idx"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "dx1",
              "dx1",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "ir",
      "b": "b"
    }
  },
  "round2DiagRect": {
    "adjustments": {
      "adj1": 16667,
      "adj2": 0
    },
    "guides": [
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "50000"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "50000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "b",
          "0",
          "x1"
        ]
      },
      {
        "name": "a",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "a"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "b",
          "0",
          "a"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "x1",
          "29289",
          "100000"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "a",
          "29289",
          "100000"
        ]
      },
      {
        "name": "d",
        "op": "+-",
        "args": [
          "dx1",
          "0",
          "dx2"
        ]
      },
      {
        "name": "dx",
        "op": "?:",
        "args": [
          "d",
          "dx1",
          "dx2"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dx"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "b",
          "0",
          "dx"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "a",
              "a",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "0",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "a",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "a",
              "a",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "x1"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "dx",
      "t": "dx",
      "r": "ir",
      "b": "ib"
    }
  },
  "round2SameRect": {
    "adjustments": {
      "adj1": 16667,
      "adj2": 0
    },
    "guides": [
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "50000"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "50000"
        ]
      },
      {
        "name": "tx1",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "tx2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "tx1"
        ]
      },
      {
        "name": "bx1",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "bx2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "bx1"
        ]
      },
      {
        "name": "by1",
        "op": "+-",
        "args": [
          "b",
          "0",
          "bx1"
        ]
      },
      {
        "name": "d",
        "op": "+-",
        "args": [
          "tx1",
          "0",
          "bx1"
        ]
      },
      {
        "name": "tdx",
        "op": "*/",
        "args": [
          "tx1",
          "29289",
          "100000"
        ]
      },
      {
        "name": "bdx",
        "op": "*/",
        "args": [
          "bx1",
          "29289",
          "100000"
        ]
      },
      {
        "name": "il",
        "op": "?:",
        "args": [
          "d",
          "tdx",
          "bdx"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "r",
          "0",
          "il"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "b",
          "0",
          "bdx"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "tx1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "tx2",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "tx1",
              "tx1",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "by1"
            ]
          },
          {
            "type": "A",
            "data": [
              "bx1",
              "bx1",
              "0",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "bx1",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "bx1",
              "bx1",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "tx1"
            ]
          },
          {
            "type": "A",
            "data": [
              "tx1",
              "tx1",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "tdx",
      "r": "ir",
      "b": "ib"
    }
  },
  "roundRect": {
    "adjustments": {
      "adj": 16667
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "50000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "b",
          "0",
          "x1"
        ]
      },
      {
        "name": "il",
        "op": "*/",
        "args": [
          "x1",
          "29289",
          "100000"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "r",
          "0",
          "il"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "b",
          "0",
          "il"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "x1"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y2"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "0",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "il",
      "r": "ir",
      "b": "ib"
    }
  },
  "rtTriangle": {
    "adjustments": {},
    "guides": [
      {
        "name": "it",
        "op": "*/",
        "args": [
          "h",
          "7",
          "12"
        ]
      },
      {
        "name": "ir",
        "op": "*/",
        "args": [
          "w",
          "7",
          "12"
        ]
      },
      {
        "name": "ib",
        "op": "*/",
        "args": [
          "h",
          "11",
          "12"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "wd12",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "smileyFace": {
    "adjustments": {
      "adj": 4653
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "-4653",
          "adj",
          "4653"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "w",
          "4969",
          "21699"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "6215",
          "21600"
        ]
      },
      {
        "name": "x3",
        "op": "*/",
        "args": [
          "w",
          "13135",
          "21600"
        ]
      },
      {
        "name": "x4",
        "op": "*/",
        "args": [
          "w",
          "16640",
          "21600"
        ]
      },
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "h",
          "7570",
          "21600"
        ]
      },
      {
        "name": "y3",
        "op": "*/",
        "args": [
          "h",
          "16515",
          "21600"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "h",
          "a",
          "100000"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "y3",
          "0",
          "dy2"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "y3",
          "dy2",
          "0"
        ]
      },
      {
        "name": "dy3",
        "op": "*/",
        "args": [
          "h",
          "a",
          "50000"
        ]
      },
      {
        "name": "y5",
        "op": "+-",
        "args": [
          "y4",
          "dy3",
          "0"
        ]
      },
      {
        "name": "idx",
        "op": "cos",
        "args": [
          "wd2",
          "2700000"
        ]
      },
      {
        "name": "idy",
        "op": "sin",
        "args": [
          "hd2",
          "2700000"
        ]
      },
      {
        "name": "il",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "idx"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "hc",
          "idx",
          "0"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "idy"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "vc",
          "idy",
          "0"
        ]
      },
      {
        "name": "wR",
        "op": "*/",
        "args": [
          "w",
          "1125",
          "21600"
        ]
      },
      {
        "name": "hR",
        "op": "*/",
        "args": [
          "h",
          "1125",
          "21600"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "cd2",
              "21600000"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darkenLess",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wR",
              "hR",
              "cd2",
              "21600000"
            ]
          },
          {
            "type": "M",
            "data": [
              "x3",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wR",
              "hR",
              "cd2",
              "21600000"
            ]
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "Q",
            "data": [
              "hc",
              "y5",
              "x4",
              "y2"
            ]
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "cd2",
              "21600000"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "snip1Rect": {
    "adjustments": {
      "adj": 16667
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "50000"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dx1"
        ]
      },
      {
        "name": "it",
        "op": "*/",
        "args": [
          "dx1",
          "1",
          "2"
        ]
      },
      {
        "name": "ir",
        "op": "+/",
        "args": [
          "x1",
          "r",
          "2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "dx1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "it",
      "r": "ir",
      "b": "b"
    }
  },
  "snip2DiagRect": {
    "adjustments": {
      "adj1": 0,
      "adj2": 16667
    },
    "guides": [
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "50000"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "50000"
        ]
      },
      {
        "name": "lx1",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "lx2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "lx1"
        ]
      },
      {
        "name": "ly1",
        "op": "+-",
        "args": [
          "b",
          "0",
          "lx1"
        ]
      },
      {
        "name": "rx1",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "rx2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "rx1"
        ]
      },
      {
        "name": "ry1",
        "op": "+-",
        "args": [
          "b",
          "0",
          "rx1"
        ]
      },
      {
        "name": "d",
        "op": "+-",
        "args": [
          "lx1",
          "0",
          "rx1"
        ]
      },
      {
        "name": "dx",
        "op": "?:",
        "args": [
          "d",
          "lx1",
          "rx1"
        ]
      },
      {
        "name": "il",
        "op": "*/",
        "args": [
          "dx",
          "1",
          "2"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "r",
          "0",
          "il"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "b",
          "0",
          "il"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "lx1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "rx2",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "rx1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "ly1"
            ]
          },
          {
            "type": "L",
            "data": [
              "lx2",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "rx1",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "ry1"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "lx1"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "il",
      "r": "ir",
      "b": "ib"
    }
  },
  "snip2SameRect": {
    "adjustments": {
      "adj1": 16667,
      "adj2": 0
    },
    "guides": [
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "50000"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "50000"
        ]
      },
      {
        "name": "tx1",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "tx2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "tx1"
        ]
      },
      {
        "name": "bx1",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "bx2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "bx1"
        ]
      },
      {
        "name": "by1",
        "op": "+-",
        "args": [
          "b",
          "0",
          "bx1"
        ]
      },
      {
        "name": "d",
        "op": "+-",
        "args": [
          "tx1",
          "0",
          "bx1"
        ]
      },
      {
        "name": "dx",
        "op": "?:",
        "args": [
          "d",
          "tx1",
          "bx1"
        ]
      },
      {
        "name": "il",
        "op": "*/",
        "args": [
          "dx",
          "1",
          "2"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "r",
          "0",
          "il"
        ]
      },
      {
        "name": "it",
        "op": "*/",
        "args": [
          "tx1",
          "1",
          "2"
        ]
      },
      {
        "name": "ib",
        "op": "+/",
        "args": [
          "by1",
          "b",
          "2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "tx1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "tx2",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "tx1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "by1"
            ]
          },
          {
            "type": "L",
            "data": [
              "bx2",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "bx1",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "by1"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "tx1"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "snipRoundRect": {
    "adjustments": {
      "adj1": 16667,
      "adj2": 16667
    },
    "guides": [
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "50000"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "50000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dx2"
        ]
      },
      {
        "name": "il",
        "op": "*/",
        "args": [
          "x1",
          "29289",
          "100000"
        ]
      },
      {
        "name": "ir",
        "op": "+/",
        "args": [
          "x2",
          "r",
          "2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "dx2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "x1"
            ]
          },
          {
            "type": "A",
            "data": [
              "x1",
              "x1",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "il",
      "r": "ir",
      "b": "b"
    }
  },
  "squareTabs": {
    "adjustments": {},
    "guides": [
      {
        "name": "md",
        "op": "mod",
        "args": [
          "w",
          "h",
          "0"
        ]
      },
      {
        "name": "dx",
        "op": "*/",
        "args": [
          "1",
          "md",
          "20"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "0",
          "b",
          "dx"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "0",
          "r",
          "dx"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "dx",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "dx",
              "dx"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "dx"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "dx",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "dx",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "dx"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "dx"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "dx",
      "t": "dx",
      "r": "x1",
      "b": "y1"
    }
  },
  "star10": {
    "adjustments": {
      "adj": 42533,
      "hf": 105146
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "50000"
        ]
      },
      {
        "name": "swd2",
        "op": "*/",
        "args": [
          "wd2",
          "hf",
          "100000"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "swd2",
          "95106",
          "100000"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "swd2",
          "58779",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "hd2",
          "80902",
          "100000"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "hd2",
          "30902",
          "100000"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy2"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "vc",
          "dy2",
          "0"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "iwd2",
        "op": "*/",
        "args": [
          "swd2",
          "a",
          "50000"
        ]
      },
      {
        "name": "ihd2",
        "op": "*/",
        "args": [
          "hd2",
          "a",
          "50000"
        ]
      },
      {
        "name": "sdx1",
        "op": "*/",
        "args": [
          "iwd2",
          "80902",
          "100000"
        ]
      },
      {
        "name": "sdx2",
        "op": "*/",
        "args": [
          "iwd2",
          "30902",
          "100000"
        ]
      },
      {
        "name": "sdy1",
        "op": "*/",
        "args": [
          "ihd2",
          "95106",
          "100000"
        ]
      },
      {
        "name": "sdy2",
        "op": "*/",
        "args": [
          "ihd2",
          "58779",
          "100000"
        ]
      },
      {
        "name": "sx1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "iwd2"
        ]
      },
      {
        "name": "sx2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx1"
        ]
      },
      {
        "name": "sx3",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx2"
        ]
      },
      {
        "name": "sx4",
        "op": "+-",
        "args": [
          "hc",
          "sdx2",
          "0"
        ]
      },
      {
        "name": "sx5",
        "op": "+-",
        "args": [
          "hc",
          "sdx1",
          "0"
        ]
      },
      {
        "name": "sx6",
        "op": "+-",
        "args": [
          "hc",
          "iwd2",
          "0"
        ]
      },
      {
        "name": "sy1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy1"
        ]
      },
      {
        "name": "sy2",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy2"
        ]
      },
      {
        "name": "sy3",
        "op": "+-",
        "args": [
          "vc",
          "sdy2",
          "0"
        ]
      },
      {
        "name": "sy4",
        "op": "+-",
        "args": [
          "vc",
          "sdy1",
          "0"
        ]
      },
      {
        "name": "yAdj",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "ihd2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx2",
              "sy2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx3",
              "sy1"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx4",
              "sy1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx5",
              "sy2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx6",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx5",
              "sy3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx4",
              "sy4"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx3",
              "sy4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx2",
              "sy3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx1",
              "vc"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "sx2",
      "t": "sy2",
      "r": "sx5",
      "b": "sy3"
    }
  },
  "star12": {
    "adjustments": {
      "adj": 37500
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "50000"
        ]
      },
      {
        "name": "dx1",
        "op": "cos",
        "args": [
          "wd2",
          "1800000"
        ]
      },
      {
        "name": "dy1",
        "op": "sin",
        "args": [
          "hd2",
          "3600000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x3",
        "op": "*/",
        "args": [
          "w",
          "3",
          "4"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y3",
        "op": "*/",
        "args": [
          "h",
          "3",
          "4"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "iwd2",
        "op": "*/",
        "args": [
          "wd2",
          "a",
          "50000"
        ]
      },
      {
        "name": "ihd2",
        "op": "*/",
        "args": [
          "hd2",
          "a",
          "50000"
        ]
      },
      {
        "name": "sdx1",
        "op": "cos",
        "args": [
          "iwd2",
          "900000"
        ]
      },
      {
        "name": "sdx2",
        "op": "cos",
        "args": [
          "iwd2",
          "2700000"
        ]
      },
      {
        "name": "sdx3",
        "op": "cos",
        "args": [
          "iwd2",
          "4500000"
        ]
      },
      {
        "name": "sdy1",
        "op": "sin",
        "args": [
          "ihd2",
          "4500000"
        ]
      },
      {
        "name": "sdy2",
        "op": "sin",
        "args": [
          "ihd2",
          "2700000"
        ]
      },
      {
        "name": "sdy3",
        "op": "sin",
        "args": [
          "ihd2",
          "900000"
        ]
      },
      {
        "name": "sx1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx1"
        ]
      },
      {
        "name": "sx2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx2"
        ]
      },
      {
        "name": "sx3",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx3"
        ]
      },
      {
        "name": "sx4",
        "op": "+-",
        "args": [
          "hc",
          "sdx3",
          "0"
        ]
      },
      {
        "name": "sx5",
        "op": "+-",
        "args": [
          "hc",
          "sdx2",
          "0"
        ]
      },
      {
        "name": "sx6",
        "op": "+-",
        "args": [
          "hc",
          "sdx1",
          "0"
        ]
      },
      {
        "name": "sy1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy1"
        ]
      },
      {
        "name": "sy2",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy2"
        ]
      },
      {
        "name": "sy3",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy3"
        ]
      },
      {
        "name": "sy4",
        "op": "+-",
        "args": [
          "vc",
          "sdy3",
          "0"
        ]
      },
      {
        "name": "sy5",
        "op": "+-",
        "args": [
          "vc",
          "sdy2",
          "0"
        ]
      },
      {
        "name": "sy6",
        "op": "+-",
        "args": [
          "vc",
          "sdy1",
          "0"
        ]
      },
      {
        "name": "yAdj",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "ihd2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx1",
              "sy3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "hd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx2",
              "sy2"
            ]
          },
          {
            "type": "L",
            "data": [
              "wd4",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx3",
              "sy1"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx4",
              "sy1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx5",
              "sy2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "hd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx6",
              "sy3"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx6",
              "sy4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx5",
              "sy5"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx4",
              "sy6"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx3",
              "sy6"
            ]
          },
          {
            "type": "L",
            "data": [
              "wd4",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx2",
              "sy5"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx1",
              "sy4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "sx2",
      "t": "sy2",
      "r": "sx5",
      "b": "sy5"
    }
  },
  "star16": {
    "adjustments": {
      "adj": 37500
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "50000"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "wd2",
          "92388",
          "100000"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "wd2",
          "70711",
          "100000"
        ]
      },
      {
        "name": "dx3",
        "op": "*/",
        "args": [
          "wd2",
          "38268",
          "100000"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "hd2",
          "92388",
          "100000"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "hd2",
          "70711",
          "100000"
        ]
      },
      {
        "name": "dy3",
        "op": "*/",
        "args": [
          "hd2",
          "38268",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx3"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "hc",
          "dx3",
          "0"
        ]
      },
      {
        "name": "x5",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "x6",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy2"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy3"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "vc",
          "dy3",
          "0"
        ]
      },
      {
        "name": "y5",
        "op": "+-",
        "args": [
          "vc",
          "dy2",
          "0"
        ]
      },
      {
        "name": "y6",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "iwd2",
        "op": "*/",
        "args": [
          "wd2",
          "a",
          "50000"
        ]
      },
      {
        "name": "ihd2",
        "op": "*/",
        "args": [
          "hd2",
          "a",
          "50000"
        ]
      },
      {
        "name": "sdx1",
        "op": "*/",
        "args": [
          "iwd2",
          "98079",
          "100000"
        ]
      },
      {
        "name": "sdx2",
        "op": "*/",
        "args": [
          "iwd2",
          "83147",
          "100000"
        ]
      },
      {
        "name": "sdx3",
        "op": "*/",
        "args": [
          "iwd2",
          "55557",
          "100000"
        ]
      },
      {
        "name": "sdx4",
        "op": "*/",
        "args": [
          "iwd2",
          "19509",
          "100000"
        ]
      },
      {
        "name": "sdy1",
        "op": "*/",
        "args": [
          "ihd2",
          "98079",
          "100000"
        ]
      },
      {
        "name": "sdy2",
        "op": "*/",
        "args": [
          "ihd2",
          "83147",
          "100000"
        ]
      },
      {
        "name": "sdy3",
        "op": "*/",
        "args": [
          "ihd2",
          "55557",
          "100000"
        ]
      },
      {
        "name": "sdy4",
        "op": "*/",
        "args": [
          "ihd2",
          "19509",
          "100000"
        ]
      },
      {
        "name": "sx1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx1"
        ]
      },
      {
        "name": "sx2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx2"
        ]
      },
      {
        "name": "sx3",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx3"
        ]
      },
      {
        "name": "sx4",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx4"
        ]
      },
      {
        "name": "sx5",
        "op": "+-",
        "args": [
          "hc",
          "sdx4",
          "0"
        ]
      },
      {
        "name": "sx6",
        "op": "+-",
        "args": [
          "hc",
          "sdx3",
          "0"
        ]
      },
      {
        "name": "sx7",
        "op": "+-",
        "args": [
          "hc",
          "sdx2",
          "0"
        ]
      },
      {
        "name": "sx8",
        "op": "+-",
        "args": [
          "hc",
          "sdx1",
          "0"
        ]
      },
      {
        "name": "sy1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy1"
        ]
      },
      {
        "name": "sy2",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy2"
        ]
      },
      {
        "name": "sy3",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy3"
        ]
      },
      {
        "name": "sy4",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy4"
        ]
      },
      {
        "name": "sy5",
        "op": "+-",
        "args": [
          "vc",
          "sdy4",
          "0"
        ]
      },
      {
        "name": "sy6",
        "op": "+-",
        "args": [
          "vc",
          "sdy3",
          "0"
        ]
      },
      {
        "name": "sy7",
        "op": "+-",
        "args": [
          "vc",
          "sdy2",
          "0"
        ]
      },
      {
        "name": "sy8",
        "op": "+-",
        "args": [
          "vc",
          "sdy1",
          "0"
        ]
      },
      {
        "name": "idx",
        "op": "cos",
        "args": [
          "iwd2",
          "2700000"
        ]
      },
      {
        "name": "idy",
        "op": "sin",
        "args": [
          "ihd2",
          "2700000"
        ]
      },
      {
        "name": "il",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "idx"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "idy"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "hc",
          "idx",
          "0"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "vc",
          "idy",
          "0"
        ]
      },
      {
        "name": "yAdj",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "ihd2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx1",
              "sy4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx2",
              "sy3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx3",
              "sy2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx4",
              "sy1"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx5",
              "sy1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx6",
              "sy2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx7",
              "sy3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx8",
              "sy4"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx8",
              "sy5"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx7",
              "sy6"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y5"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx6",
              "sy7"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx5",
              "sy8"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx4",
              "sy8"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx3",
              "sy7"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y5"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx2",
              "sy6"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx1",
              "sy5"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "star24": {
    "adjustments": {
      "adj": 37500
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "50000"
        ]
      },
      {
        "name": "dx1",
        "op": "cos",
        "args": [
          "wd2",
          "900000"
        ]
      },
      {
        "name": "dx2",
        "op": "cos",
        "args": [
          "wd2",
          "1800000"
        ]
      },
      {
        "name": "dx3",
        "op": "cos",
        "args": [
          "wd2",
          "2700000"
        ]
      },
      {
        "name": "dx4",
        "op": "val",
        "args": [
          "wd4"
        ]
      },
      {
        "name": "dx5",
        "op": "cos",
        "args": [
          "wd2",
          "4500000"
        ]
      },
      {
        "name": "dy1",
        "op": "sin",
        "args": [
          "hd2",
          "4500000"
        ]
      },
      {
        "name": "dy2",
        "op": "sin",
        "args": [
          "hd2",
          "3600000"
        ]
      },
      {
        "name": "dy3",
        "op": "sin",
        "args": [
          "hd2",
          "2700000"
        ]
      },
      {
        "name": "dy4",
        "op": "val",
        "args": [
          "hd4"
        ]
      },
      {
        "name": "dy5",
        "op": "sin",
        "args": [
          "hd2",
          "900000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx3"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx4"
        ]
      },
      {
        "name": "x5",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx5"
        ]
      },
      {
        "name": "x6",
        "op": "+-",
        "args": [
          "hc",
          "dx5",
          "0"
        ]
      },
      {
        "name": "x7",
        "op": "+-",
        "args": [
          "hc",
          "dx4",
          "0"
        ]
      },
      {
        "name": "x8",
        "op": "+-",
        "args": [
          "hc",
          "dx3",
          "0"
        ]
      },
      {
        "name": "x9",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "x10",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy2"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy3"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy4"
        ]
      },
      {
        "name": "y5",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy5"
        ]
      },
      {
        "name": "y6",
        "op": "+-",
        "args": [
          "vc",
          "dy5",
          "0"
        ]
      },
      {
        "name": "y7",
        "op": "+-",
        "args": [
          "vc",
          "dy4",
          "0"
        ]
      },
      {
        "name": "y8",
        "op": "+-",
        "args": [
          "vc",
          "dy3",
          "0"
        ]
      },
      {
        "name": "y9",
        "op": "+-",
        "args": [
          "vc",
          "dy2",
          "0"
        ]
      },
      {
        "name": "y10",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "iwd2",
        "op": "*/",
        "args": [
          "wd2",
          "a",
          "50000"
        ]
      },
      {
        "name": "ihd2",
        "op": "*/",
        "args": [
          "hd2",
          "a",
          "50000"
        ]
      },
      {
        "name": "sdx1",
        "op": "*/",
        "args": [
          "iwd2",
          "99144",
          "100000"
        ]
      },
      {
        "name": "sdx2",
        "op": "*/",
        "args": [
          "iwd2",
          "92388",
          "100000"
        ]
      },
      {
        "name": "sdx3",
        "op": "*/",
        "args": [
          "iwd2",
          "79335",
          "100000"
        ]
      },
      {
        "name": "sdx4",
        "op": "*/",
        "args": [
          "iwd2",
          "60876",
          "100000"
        ]
      },
      {
        "name": "sdx5",
        "op": "*/",
        "args": [
          "iwd2",
          "38268",
          "100000"
        ]
      },
      {
        "name": "sdx6",
        "op": "*/",
        "args": [
          "iwd2",
          "13053",
          "100000"
        ]
      },
      {
        "name": "sdy1",
        "op": "*/",
        "args": [
          "ihd2",
          "99144",
          "100000"
        ]
      },
      {
        "name": "sdy2",
        "op": "*/",
        "args": [
          "ihd2",
          "92388",
          "100000"
        ]
      },
      {
        "name": "sdy3",
        "op": "*/",
        "args": [
          "ihd2",
          "79335",
          "100000"
        ]
      },
      {
        "name": "sdy4",
        "op": "*/",
        "args": [
          "ihd2",
          "60876",
          "100000"
        ]
      },
      {
        "name": "sdy5",
        "op": "*/",
        "args": [
          "ihd2",
          "38268",
          "100000"
        ]
      },
      {
        "name": "sdy6",
        "op": "*/",
        "args": [
          "ihd2",
          "13053",
          "100000"
        ]
      },
      {
        "name": "sx1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx1"
        ]
      },
      {
        "name": "sx2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx2"
        ]
      },
      {
        "name": "sx3",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx3"
        ]
      },
      {
        "name": "sx4",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx4"
        ]
      },
      {
        "name": "sx5",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx5"
        ]
      },
      {
        "name": "sx6",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx6"
        ]
      },
      {
        "name": "sx7",
        "op": "+-",
        "args": [
          "hc",
          "sdx6",
          "0"
        ]
      },
      {
        "name": "sx8",
        "op": "+-",
        "args": [
          "hc",
          "sdx5",
          "0"
        ]
      },
      {
        "name": "sx9",
        "op": "+-",
        "args": [
          "hc",
          "sdx4",
          "0"
        ]
      },
      {
        "name": "sx10",
        "op": "+-",
        "args": [
          "hc",
          "sdx3",
          "0"
        ]
      },
      {
        "name": "sx11",
        "op": "+-",
        "args": [
          "hc",
          "sdx2",
          "0"
        ]
      },
      {
        "name": "sx12",
        "op": "+-",
        "args": [
          "hc",
          "sdx1",
          "0"
        ]
      },
      {
        "name": "sy1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy1"
        ]
      },
      {
        "name": "sy2",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy2"
        ]
      },
      {
        "name": "sy3",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy3"
        ]
      },
      {
        "name": "sy4",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy4"
        ]
      },
      {
        "name": "sy5",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy5"
        ]
      },
      {
        "name": "sy6",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy6"
        ]
      },
      {
        "name": "sy7",
        "op": "+-",
        "args": [
          "vc",
          "sdy6",
          "0"
        ]
      },
      {
        "name": "sy8",
        "op": "+-",
        "args": [
          "vc",
          "sdy5",
          "0"
        ]
      },
      {
        "name": "sy9",
        "op": "+-",
        "args": [
          "vc",
          "sdy4",
          "0"
        ]
      },
      {
        "name": "sy10",
        "op": "+-",
        "args": [
          "vc",
          "sdy3",
          "0"
        ]
      },
      {
        "name": "sy11",
        "op": "+-",
        "args": [
          "vc",
          "sdy2",
          "0"
        ]
      },
      {
        "name": "sy12",
        "op": "+-",
        "args": [
          "vc",
          "sdy1",
          "0"
        ]
      },
      {
        "name": "idx",
        "op": "cos",
        "args": [
          "iwd2",
          "2700000"
        ]
      },
      {
        "name": "idy",
        "op": "sin",
        "args": [
          "ihd2",
          "2700000"
        ]
      },
      {
        "name": "il",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "idx"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "idy"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "hc",
          "idx",
          "0"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "vc",
          "idy",
          "0"
        ]
      },
      {
        "name": "yAdj",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "ihd2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx1",
              "sy6"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y5"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx2",
              "sy5"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx3",
              "sy4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx4",
              "sy3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx5",
              "sy2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx6",
              "sy1"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx7",
              "sy1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx8",
              "sy2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x7",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx9",
              "sy3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx10",
              "sy4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x9",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx11",
              "sy5"
            ]
          },
          {
            "type": "L",
            "data": [
              "x10",
              "y5"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx12",
              "sy6"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx12",
              "sy7"
            ]
          },
          {
            "type": "L",
            "data": [
              "x10",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx11",
              "sy8"
            ]
          },
          {
            "type": "L",
            "data": [
              "x9",
              "y7"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx10",
              "sy9"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y8"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx9",
              "sy10"
            ]
          },
          {
            "type": "L",
            "data": [
              "x7",
              "y9"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx8",
              "sy11"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y10"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx7",
              "sy12"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx6",
              "sy12"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y10"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx5",
              "sy11"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y9"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx4",
              "sy10"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y8"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx3",
              "sy9"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y7"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx2",
              "sy8"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx1",
              "sy7"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "star32": {
    "adjustments": {
      "adj": 37500
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "50000"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "wd2",
          "98079",
          "100000"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "wd2",
          "92388",
          "100000"
        ]
      },
      {
        "name": "dx3",
        "op": "*/",
        "args": [
          "wd2",
          "83147",
          "100000"
        ]
      },
      {
        "name": "dx4",
        "op": "cos",
        "args": [
          "wd2",
          "2700000"
        ]
      },
      {
        "name": "dx5",
        "op": "*/",
        "args": [
          "wd2",
          "55557",
          "100000"
        ]
      },
      {
        "name": "dx6",
        "op": "*/",
        "args": [
          "wd2",
          "38268",
          "100000"
        ]
      },
      {
        "name": "dx7",
        "op": "*/",
        "args": [
          "wd2",
          "19509",
          "100000"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "hd2",
          "98079",
          "100000"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "hd2",
          "92388",
          "100000"
        ]
      },
      {
        "name": "dy3",
        "op": "*/",
        "args": [
          "hd2",
          "83147",
          "100000"
        ]
      },
      {
        "name": "dy4",
        "op": "sin",
        "args": [
          "hd2",
          "2700000"
        ]
      },
      {
        "name": "dy5",
        "op": "*/",
        "args": [
          "hd2",
          "55557",
          "100000"
        ]
      },
      {
        "name": "dy6",
        "op": "*/",
        "args": [
          "hd2",
          "38268",
          "100000"
        ]
      },
      {
        "name": "dy7",
        "op": "*/",
        "args": [
          "hd2",
          "19509",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx3"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx4"
        ]
      },
      {
        "name": "x5",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx5"
        ]
      },
      {
        "name": "x6",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx6"
        ]
      },
      {
        "name": "x7",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx7"
        ]
      },
      {
        "name": "x8",
        "op": "+-",
        "args": [
          "hc",
          "dx7",
          "0"
        ]
      },
      {
        "name": "x9",
        "op": "+-",
        "args": [
          "hc",
          "dx6",
          "0"
        ]
      },
      {
        "name": "x10",
        "op": "+-",
        "args": [
          "hc",
          "dx5",
          "0"
        ]
      },
      {
        "name": "x11",
        "op": "+-",
        "args": [
          "hc",
          "dx4",
          "0"
        ]
      },
      {
        "name": "x12",
        "op": "+-",
        "args": [
          "hc",
          "dx3",
          "0"
        ]
      },
      {
        "name": "x13",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "x14",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy2"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy3"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy4"
        ]
      },
      {
        "name": "y5",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy5"
        ]
      },
      {
        "name": "y6",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy6"
        ]
      },
      {
        "name": "y7",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy7"
        ]
      },
      {
        "name": "y8",
        "op": "+-",
        "args": [
          "vc",
          "dy7",
          "0"
        ]
      },
      {
        "name": "y9",
        "op": "+-",
        "args": [
          "vc",
          "dy6",
          "0"
        ]
      },
      {
        "name": "y10",
        "op": "+-",
        "args": [
          "vc",
          "dy5",
          "0"
        ]
      },
      {
        "name": "y11",
        "op": "+-",
        "args": [
          "vc",
          "dy4",
          "0"
        ]
      },
      {
        "name": "y12",
        "op": "+-",
        "args": [
          "vc",
          "dy3",
          "0"
        ]
      },
      {
        "name": "y13",
        "op": "+-",
        "args": [
          "vc",
          "dy2",
          "0"
        ]
      },
      {
        "name": "y14",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "iwd2",
        "op": "*/",
        "args": [
          "wd2",
          "a",
          "50000"
        ]
      },
      {
        "name": "ihd2",
        "op": "*/",
        "args": [
          "hd2",
          "a",
          "50000"
        ]
      },
      {
        "name": "sdx1",
        "op": "*/",
        "args": [
          "iwd2",
          "99518",
          "100000"
        ]
      },
      {
        "name": "sdx2",
        "op": "*/",
        "args": [
          "iwd2",
          "95694",
          "100000"
        ]
      },
      {
        "name": "sdx3",
        "op": "*/",
        "args": [
          "iwd2",
          "88192",
          "100000"
        ]
      },
      {
        "name": "sdx4",
        "op": "*/",
        "args": [
          "iwd2",
          "77301",
          "100000"
        ]
      },
      {
        "name": "sdx5",
        "op": "*/",
        "args": [
          "iwd2",
          "63439",
          "100000"
        ]
      },
      {
        "name": "sdx6",
        "op": "*/",
        "args": [
          "iwd2",
          "47140",
          "100000"
        ]
      },
      {
        "name": "sdx7",
        "op": "*/",
        "args": [
          "iwd2",
          "29028",
          "100000"
        ]
      },
      {
        "name": "sdx8",
        "op": "*/",
        "args": [
          "iwd2",
          "9802",
          "100000"
        ]
      },
      {
        "name": "sdy1",
        "op": "*/",
        "args": [
          "ihd2",
          "99518",
          "100000"
        ]
      },
      {
        "name": "sdy2",
        "op": "*/",
        "args": [
          "ihd2",
          "95694",
          "100000"
        ]
      },
      {
        "name": "sdy3",
        "op": "*/",
        "args": [
          "ihd2",
          "88192",
          "100000"
        ]
      },
      {
        "name": "sdy4",
        "op": "*/",
        "args": [
          "ihd2",
          "77301",
          "100000"
        ]
      },
      {
        "name": "sdy5",
        "op": "*/",
        "args": [
          "ihd2",
          "63439",
          "100000"
        ]
      },
      {
        "name": "sdy6",
        "op": "*/",
        "args": [
          "ihd2",
          "47140",
          "100000"
        ]
      },
      {
        "name": "sdy7",
        "op": "*/",
        "args": [
          "ihd2",
          "29028",
          "100000"
        ]
      },
      {
        "name": "sdy8",
        "op": "*/",
        "args": [
          "ihd2",
          "9802",
          "100000"
        ]
      },
      {
        "name": "sx1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx1"
        ]
      },
      {
        "name": "sx2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx2"
        ]
      },
      {
        "name": "sx3",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx3"
        ]
      },
      {
        "name": "sx4",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx4"
        ]
      },
      {
        "name": "sx5",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx5"
        ]
      },
      {
        "name": "sx6",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx6"
        ]
      },
      {
        "name": "sx7",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx7"
        ]
      },
      {
        "name": "sx8",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx8"
        ]
      },
      {
        "name": "sx9",
        "op": "+-",
        "args": [
          "hc",
          "sdx8",
          "0"
        ]
      },
      {
        "name": "sx10",
        "op": "+-",
        "args": [
          "hc",
          "sdx7",
          "0"
        ]
      },
      {
        "name": "sx11",
        "op": "+-",
        "args": [
          "hc",
          "sdx6",
          "0"
        ]
      },
      {
        "name": "sx12",
        "op": "+-",
        "args": [
          "hc",
          "sdx5",
          "0"
        ]
      },
      {
        "name": "sx13",
        "op": "+-",
        "args": [
          "hc",
          "sdx4",
          "0"
        ]
      },
      {
        "name": "sx14",
        "op": "+-",
        "args": [
          "hc",
          "sdx3",
          "0"
        ]
      },
      {
        "name": "sx15",
        "op": "+-",
        "args": [
          "hc",
          "sdx2",
          "0"
        ]
      },
      {
        "name": "sx16",
        "op": "+-",
        "args": [
          "hc",
          "sdx1",
          "0"
        ]
      },
      {
        "name": "sy1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy1"
        ]
      },
      {
        "name": "sy2",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy2"
        ]
      },
      {
        "name": "sy3",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy3"
        ]
      },
      {
        "name": "sy4",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy4"
        ]
      },
      {
        "name": "sy5",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy5"
        ]
      },
      {
        "name": "sy6",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy6"
        ]
      },
      {
        "name": "sy7",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy7"
        ]
      },
      {
        "name": "sy8",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy8"
        ]
      },
      {
        "name": "sy9",
        "op": "+-",
        "args": [
          "vc",
          "sdy8",
          "0"
        ]
      },
      {
        "name": "sy10",
        "op": "+-",
        "args": [
          "vc",
          "sdy7",
          "0"
        ]
      },
      {
        "name": "sy11",
        "op": "+-",
        "args": [
          "vc",
          "sdy6",
          "0"
        ]
      },
      {
        "name": "sy12",
        "op": "+-",
        "args": [
          "vc",
          "sdy5",
          "0"
        ]
      },
      {
        "name": "sy13",
        "op": "+-",
        "args": [
          "vc",
          "sdy4",
          "0"
        ]
      },
      {
        "name": "sy14",
        "op": "+-",
        "args": [
          "vc",
          "sdy3",
          "0"
        ]
      },
      {
        "name": "sy15",
        "op": "+-",
        "args": [
          "vc",
          "sdy2",
          "0"
        ]
      },
      {
        "name": "sy16",
        "op": "+-",
        "args": [
          "vc",
          "sdy1",
          "0"
        ]
      },
      {
        "name": "idx",
        "op": "cos",
        "args": [
          "iwd2",
          "2700000"
        ]
      },
      {
        "name": "idy",
        "op": "sin",
        "args": [
          "ihd2",
          "2700000"
        ]
      },
      {
        "name": "il",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "idx"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "idy"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "hc",
          "idx",
          "0"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "vc",
          "idy",
          "0"
        ]
      },
      {
        "name": "yAdj",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "ihd2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx1",
              "sy8"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y7"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx2",
              "sy7"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx3",
              "sy6"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y5"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx4",
              "sy5"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx5",
              "sy4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx6",
              "sy3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx7",
              "sy2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x7",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx8",
              "sy1"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx9",
              "sy1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx10",
              "sy2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x9",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx11",
              "sy3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x10",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx12",
              "sy4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x11",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx13",
              "sy5"
            ]
          },
          {
            "type": "L",
            "data": [
              "x12",
              "y5"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx14",
              "sy6"
            ]
          },
          {
            "type": "L",
            "data": [
              "x13",
              "y6"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx15",
              "sy7"
            ]
          },
          {
            "type": "L",
            "data": [
              "x14",
              "y7"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx16",
              "sy8"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx16",
              "sy9"
            ]
          },
          {
            "type": "L",
            "data": [
              "x14",
              "y8"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx15",
              "sy10"
            ]
          },
          {
            "type": "L",
            "data": [
              "x13",
              "y9"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx14",
              "sy11"
            ]
          },
          {
            "type": "L",
            "data": [
              "x12",
              "y10"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx13",
              "sy12"
            ]
          },
          {
            "type": "L",
            "data": [
              "x11",
              "y11"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx12",
              "sy13"
            ]
          },
          {
            "type": "L",
            "data": [
              "x10",
              "y12"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx11",
              "sy14"
            ]
          },
          {
            "type": "L",
            "data": [
              "x9",
              "y13"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx10",
              "sy15"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y14"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx9",
              "sy16"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx8",
              "sy16"
            ]
          },
          {
            "type": "L",
            "data": [
              "x7",
              "y14"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx7",
              "sy15"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y13"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx6",
              "sy14"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y12"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx5",
              "sy13"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y11"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx4",
              "sy12"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y10"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx3",
              "sy11"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y9"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx2",
              "sy10"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y8"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx1",
              "sy9"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "star4": {
    "adjustments": {
      "adj": 12500
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "50000"
        ]
      },
      {
        "name": "iwd2",
        "op": "*/",
        "args": [
          "wd2",
          "a",
          "50000"
        ]
      },
      {
        "name": "ihd2",
        "op": "*/",
        "args": [
          "hd2",
          "a",
          "50000"
        ]
      },
      {
        "name": "sdx",
        "op": "cos",
        "args": [
          "iwd2",
          "2700000"
        ]
      },
      {
        "name": "sdy",
        "op": "sin",
        "args": [
          "ihd2",
          "2700000"
        ]
      },
      {
        "name": "sx1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx"
        ]
      },
      {
        "name": "sx2",
        "op": "+-",
        "args": [
          "hc",
          "sdx",
          "0"
        ]
      },
      {
        "name": "sy1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy"
        ]
      },
      {
        "name": "sy2",
        "op": "+-",
        "args": [
          "vc",
          "sdy",
          "0"
        ]
      },
      {
        "name": "yAdj",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "ihd2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx1",
              "sy1"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx2",
              "sy1"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx2",
              "sy2"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx1",
              "sy2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "sx1",
      "t": "sy1",
      "r": "sx2",
      "b": "sy2"
    }
  },
  "star5": {
    "adjustments": {
      "adj": 19098,
      "hf": 105146,
      "vf": 110557
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "50000"
        ]
      },
      {
        "name": "swd2",
        "op": "*/",
        "args": [
          "wd2",
          "hf",
          "100000"
        ]
      },
      {
        "name": "shd2",
        "op": "*/",
        "args": [
          "hd2",
          "vf",
          "100000"
        ]
      },
      {
        "name": "svc",
        "op": "*/",
        "args": [
          "vc",
          "vf",
          "100000"
        ]
      },
      {
        "name": "dx1",
        "op": "cos",
        "args": [
          "swd2",
          "1080000"
        ]
      },
      {
        "name": "dx2",
        "op": "cos",
        "args": [
          "swd2",
          "18360000"
        ]
      },
      {
        "name": "dy1",
        "op": "sin",
        "args": [
          "shd2",
          "1080000"
        ]
      },
      {
        "name": "dy2",
        "op": "sin",
        "args": [
          "shd2",
          "18360000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "svc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "svc",
          "0",
          "dy2"
        ]
      },
      {
        "name": "iwd2",
        "op": "*/",
        "args": [
          "swd2",
          "a",
          "50000"
        ]
      },
      {
        "name": "ihd2",
        "op": "*/",
        "args": [
          "shd2",
          "a",
          "50000"
        ]
      },
      {
        "name": "sdx1",
        "op": "cos",
        "args": [
          "iwd2",
          "20520000"
        ]
      },
      {
        "name": "sdx2",
        "op": "cos",
        "args": [
          "iwd2",
          "3240000"
        ]
      },
      {
        "name": "sdy1",
        "op": "sin",
        "args": [
          "ihd2",
          "3240000"
        ]
      },
      {
        "name": "sdy2",
        "op": "sin",
        "args": [
          "ihd2",
          "20520000"
        ]
      },
      {
        "name": "sx1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx1"
        ]
      },
      {
        "name": "sx2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx2"
        ]
      },
      {
        "name": "sx3",
        "op": "+-",
        "args": [
          "hc",
          "sdx2",
          "0"
        ]
      },
      {
        "name": "sx4",
        "op": "+-",
        "args": [
          "hc",
          "sdx1",
          "0"
        ]
      },
      {
        "name": "sy1",
        "op": "+-",
        "args": [
          "svc",
          "0",
          "sdy1"
        ]
      },
      {
        "name": "sy2",
        "op": "+-",
        "args": [
          "svc",
          "0",
          "sdy2"
        ]
      },
      {
        "name": "sy3",
        "op": "+-",
        "args": [
          "svc",
          "ihd2",
          "0"
        ]
      },
      {
        "name": "yAdj",
        "op": "+-",
        "args": [
          "svc",
          "0",
          "ihd2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx2",
              "sy1"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx3",
              "sy1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx4",
              "sy2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "sy3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx1",
              "sy2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "sx1",
      "t": "sy1",
      "r": "sx4",
      "b": "sy3"
    }
  },
  "star6": {
    "adjustments": {
      "adj": 28868,
      "hf": 115470
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "50000"
        ]
      },
      {
        "name": "swd2",
        "op": "*/",
        "args": [
          "wd2",
          "hf",
          "100000"
        ]
      },
      {
        "name": "dx1",
        "op": "cos",
        "args": [
          "swd2",
          "1800000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "hd4",
          "0"
        ]
      },
      {
        "name": "iwd2",
        "op": "*/",
        "args": [
          "swd2",
          "a",
          "50000"
        ]
      },
      {
        "name": "ihd2",
        "op": "*/",
        "args": [
          "hd2",
          "a",
          "50000"
        ]
      },
      {
        "name": "sdx2",
        "op": "*/",
        "args": [
          "iwd2",
          "1",
          "2"
        ]
      },
      {
        "name": "sx1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "iwd2"
        ]
      },
      {
        "name": "sx2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx2"
        ]
      },
      {
        "name": "sx3",
        "op": "+-",
        "args": [
          "hc",
          "sdx2",
          "0"
        ]
      },
      {
        "name": "sx4",
        "op": "+-",
        "args": [
          "hc",
          "iwd2",
          "0"
        ]
      },
      {
        "name": "sdy1",
        "op": "sin",
        "args": [
          "ihd2",
          "3600000"
        ]
      },
      {
        "name": "sy1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy1"
        ]
      },
      {
        "name": "sy2",
        "op": "+-",
        "args": [
          "vc",
          "sdy1",
          "0"
        ]
      },
      {
        "name": "yAdj",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "ihd2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "hd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx2",
              "sy1"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx3",
              "sy1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "hd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx4",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx3",
              "sy2"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx2",
              "sy2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx1",
              "vc"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "sx1",
      "t": "sy1",
      "r": "sx4",
      "b": "sy2"
    }
  },
  "star7": {
    "adjustments": {
      "adj": 34601,
      "hf": 102572,
      "vf": 105210
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "50000"
        ]
      },
      {
        "name": "swd2",
        "op": "*/",
        "args": [
          "wd2",
          "hf",
          "100000"
        ]
      },
      {
        "name": "shd2",
        "op": "*/",
        "args": [
          "hd2",
          "vf",
          "100000"
        ]
      },
      {
        "name": "svc",
        "op": "*/",
        "args": [
          "vc",
          "vf",
          "100000"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "swd2",
          "97493",
          "100000"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "swd2",
          "78183",
          "100000"
        ]
      },
      {
        "name": "dx3",
        "op": "*/",
        "args": [
          "swd2",
          "43388",
          "100000"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "shd2",
          "62349",
          "100000"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "shd2",
          "22252",
          "100000"
        ]
      },
      {
        "name": "dy3",
        "op": "*/",
        "args": [
          "shd2",
          "90097",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx3"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "hc",
          "dx3",
          "0"
        ]
      },
      {
        "name": "x5",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "x6",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "svc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "svc",
          "dy2",
          "0"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "svc",
          "dy3",
          "0"
        ]
      },
      {
        "name": "iwd2",
        "op": "*/",
        "args": [
          "swd2",
          "a",
          "50000"
        ]
      },
      {
        "name": "ihd2",
        "op": "*/",
        "args": [
          "shd2",
          "a",
          "50000"
        ]
      },
      {
        "name": "sdx1",
        "op": "*/",
        "args": [
          "iwd2",
          "97493",
          "100000"
        ]
      },
      {
        "name": "sdx2",
        "op": "*/",
        "args": [
          "iwd2",
          "78183",
          "100000"
        ]
      },
      {
        "name": "sdx3",
        "op": "*/",
        "args": [
          "iwd2",
          "43388",
          "100000"
        ]
      },
      {
        "name": "sx1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx1"
        ]
      },
      {
        "name": "sx2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx2"
        ]
      },
      {
        "name": "sx3",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx3"
        ]
      },
      {
        "name": "sx4",
        "op": "+-",
        "args": [
          "hc",
          "sdx3",
          "0"
        ]
      },
      {
        "name": "sx5",
        "op": "+-",
        "args": [
          "hc",
          "sdx2",
          "0"
        ]
      },
      {
        "name": "sx6",
        "op": "+-",
        "args": [
          "hc",
          "sdx1",
          "0"
        ]
      },
      {
        "name": "sdy1",
        "op": "*/",
        "args": [
          "ihd2",
          "90097",
          "100000"
        ]
      },
      {
        "name": "sdy2",
        "op": "*/",
        "args": [
          "ihd2",
          "22252",
          "100000"
        ]
      },
      {
        "name": "sdy3",
        "op": "*/",
        "args": [
          "ihd2",
          "62349",
          "100000"
        ]
      },
      {
        "name": "sy1",
        "op": "+-",
        "args": [
          "svc",
          "0",
          "sdy1"
        ]
      },
      {
        "name": "sy2",
        "op": "+-",
        "args": [
          "svc",
          "0",
          "sdy2"
        ]
      },
      {
        "name": "sy3",
        "op": "+-",
        "args": [
          "svc",
          "sdy3",
          "0"
        ]
      },
      {
        "name": "sy4",
        "op": "+-",
        "args": [
          "svc",
          "ihd2",
          "0"
        ]
      },
      {
        "name": "yAdj",
        "op": "+-",
        "args": [
          "svc",
          "0",
          "ihd2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx1",
              "sy2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx3",
              "sy1"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx4",
              "sy1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx6",
              "sy2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx5",
              "sy3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "sy4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx2",
              "sy3"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "sx2",
      "t": "sy1",
      "r": "sx5",
      "b": "sy3"
    }
  },
  "star8": {
    "adjustments": {
      "adj": 37500
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "50000"
        ]
      },
      {
        "name": "dx1",
        "op": "cos",
        "args": [
          "wd2",
          "2700000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "dy1",
        "op": "sin",
        "args": [
          "hd2",
          "2700000"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "iwd2",
        "op": "*/",
        "args": [
          "wd2",
          "a",
          "50000"
        ]
      },
      {
        "name": "ihd2",
        "op": "*/",
        "args": [
          "hd2",
          "a",
          "50000"
        ]
      },
      {
        "name": "sdx1",
        "op": "*/",
        "args": [
          "iwd2",
          "92388",
          "100000"
        ]
      },
      {
        "name": "sdx2",
        "op": "*/",
        "args": [
          "iwd2",
          "38268",
          "100000"
        ]
      },
      {
        "name": "sdy1",
        "op": "*/",
        "args": [
          "ihd2",
          "92388",
          "100000"
        ]
      },
      {
        "name": "sdy2",
        "op": "*/",
        "args": [
          "ihd2",
          "38268",
          "100000"
        ]
      },
      {
        "name": "sx1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx1"
        ]
      },
      {
        "name": "sx2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "sdx2"
        ]
      },
      {
        "name": "sx3",
        "op": "+-",
        "args": [
          "hc",
          "sdx2",
          "0"
        ]
      },
      {
        "name": "sx4",
        "op": "+-",
        "args": [
          "hc",
          "sdx1",
          "0"
        ]
      },
      {
        "name": "sy1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy1"
        ]
      },
      {
        "name": "sy2",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "sdy2"
        ]
      },
      {
        "name": "sy3",
        "op": "+-",
        "args": [
          "vc",
          "sdy2",
          "0"
        ]
      },
      {
        "name": "sy4",
        "op": "+-",
        "args": [
          "vc",
          "sdy1",
          "0"
        ]
      },
      {
        "name": "yAdj",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "ihd2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx1",
              "sy2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx2",
              "sy1"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx3",
              "sy1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx4",
              "sy2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx4",
              "sy3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx3",
              "sy4"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx2",
              "sy4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "sx1",
              "sy3"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "sx1",
      "t": "sy1",
      "r": "sx4",
      "b": "sy4"
    }
  },
  "straightConnector1": {
    "adjustments": {},
    "guides": [],
    "paths": [
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "stripedRightArrow": {
    "adjustments": {
      "adj1": 50000,
      "adj2": 50000
    },
    "guides": [
      {
        "name": "maxAdj2",
        "op": "*/",
        "args": [
          "84375",
          "w",
          "ss"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "x4",
        "op": "*/",
        "args": [
          "ss",
          "5",
          "32"
        ]
      },
      {
        "name": "dx5",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "x5",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dx5"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "200000"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "dx6",
        "op": "*/",
        "args": [
          "dy1",
          "dx5",
          "hd2"
        ]
      },
      {
        "name": "x6",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dx6"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "ssd32",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "ssd32",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "ssd16",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "ssd8",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "ssd8",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "ssd16",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x5",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x4",
      "t": "y1",
      "r": "x6",
      "b": "y2"
    }
  },
  "sun": {
    "adjustments": {
      "adj": 25000
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "12500",
          "adj",
          "46875"
        ]
      },
      {
        "name": "g0",
        "op": "+-",
        "args": [
          "50000",
          "0",
          "a"
        ]
      },
      {
        "name": "g1",
        "op": "*/",
        "args": [
          "g0",
          "30274",
          "32768"
        ]
      },
      {
        "name": "g2",
        "op": "*/",
        "args": [
          "g0",
          "12540",
          "32768"
        ]
      },
      {
        "name": "g3",
        "op": "+-",
        "args": [
          "g1",
          "50000",
          "0"
        ]
      },
      {
        "name": "g4",
        "op": "+-",
        "args": [
          "g2",
          "50000",
          "0"
        ]
      },
      {
        "name": "g5",
        "op": "+-",
        "args": [
          "50000",
          "0",
          "g1"
        ]
      },
      {
        "name": "g6",
        "op": "+-",
        "args": [
          "50000",
          "0",
          "g2"
        ]
      },
      {
        "name": "g7",
        "op": "*/",
        "args": [
          "g0",
          "23170",
          "32768"
        ]
      },
      {
        "name": "g8",
        "op": "+-",
        "args": [
          "50000",
          "g7",
          "0"
        ]
      },
      {
        "name": "g9",
        "op": "+-",
        "args": [
          "50000",
          "0",
          "g7"
        ]
      },
      {
        "name": "g10",
        "op": "*/",
        "args": [
          "g5",
          "3",
          "4"
        ]
      },
      {
        "name": "g11",
        "op": "*/",
        "args": [
          "g6",
          "3",
          "4"
        ]
      },
      {
        "name": "g12",
        "op": "+-",
        "args": [
          "g10",
          "3662",
          "0"
        ]
      },
      {
        "name": "g13",
        "op": "+-",
        "args": [
          "g11",
          "3662",
          "0"
        ]
      },
      {
        "name": "g14",
        "op": "+-",
        "args": [
          "g11",
          "12500",
          "0"
        ]
      },
      {
        "name": "g15",
        "op": "+-",
        "args": [
          "100000",
          "0",
          "g10"
        ]
      },
      {
        "name": "g16",
        "op": "+-",
        "args": [
          "100000",
          "0",
          "g12"
        ]
      },
      {
        "name": "g17",
        "op": "+-",
        "args": [
          "100000",
          "0",
          "g13"
        ]
      },
      {
        "name": "g18",
        "op": "+-",
        "args": [
          "100000",
          "0",
          "g14"
        ]
      },
      {
        "name": "ox1",
        "op": "*/",
        "args": [
          "w",
          "18436",
          "21600"
        ]
      },
      {
        "name": "oy1",
        "op": "*/",
        "args": [
          "h",
          "3163",
          "21600"
        ]
      },
      {
        "name": "ox2",
        "op": "*/",
        "args": [
          "w",
          "3163",
          "21600"
        ]
      },
      {
        "name": "oy2",
        "op": "*/",
        "args": [
          "h",
          "18436",
          "21600"
        ]
      },
      {
        "name": "x8",
        "op": "*/",
        "args": [
          "w",
          "g8",
          "100000"
        ]
      },
      {
        "name": "x9",
        "op": "*/",
        "args": [
          "w",
          "g9",
          "100000"
        ]
      },
      {
        "name": "x10",
        "op": "*/",
        "args": [
          "w",
          "g10",
          "100000"
        ]
      },
      {
        "name": "x12",
        "op": "*/",
        "args": [
          "w",
          "g12",
          "100000"
        ]
      },
      {
        "name": "x13",
        "op": "*/",
        "args": [
          "w",
          "g13",
          "100000"
        ]
      },
      {
        "name": "x14",
        "op": "*/",
        "args": [
          "w",
          "g14",
          "100000"
        ]
      },
      {
        "name": "x15",
        "op": "*/",
        "args": [
          "w",
          "g15",
          "100000"
        ]
      },
      {
        "name": "x16",
        "op": "*/",
        "args": [
          "w",
          "g16",
          "100000"
        ]
      },
      {
        "name": "x17",
        "op": "*/",
        "args": [
          "w",
          "g17",
          "100000"
        ]
      },
      {
        "name": "x18",
        "op": "*/",
        "args": [
          "w",
          "g18",
          "100000"
        ]
      },
      {
        "name": "x19",
        "op": "*/",
        "args": [
          "w",
          "a",
          "100000"
        ]
      },
      {
        "name": "wR",
        "op": "*/",
        "args": [
          "w",
          "g0",
          "100000"
        ]
      },
      {
        "name": "hR",
        "op": "*/",
        "args": [
          "h",
          "g0",
          "100000"
        ]
      },
      {
        "name": "y8",
        "op": "*/",
        "args": [
          "h",
          "g8",
          "100000"
        ]
      },
      {
        "name": "y9",
        "op": "*/",
        "args": [
          "h",
          "g9",
          "100000"
        ]
      },
      {
        "name": "y10",
        "op": "*/",
        "args": [
          "h",
          "g10",
          "100000"
        ]
      },
      {
        "name": "y12",
        "op": "*/",
        "args": [
          "h",
          "g12",
          "100000"
        ]
      },
      {
        "name": "y13",
        "op": "*/",
        "args": [
          "h",
          "g13",
          "100000"
        ]
      },
      {
        "name": "y14",
        "op": "*/",
        "args": [
          "h",
          "g14",
          "100000"
        ]
      },
      {
        "name": "y15",
        "op": "*/",
        "args": [
          "h",
          "g15",
          "100000"
        ]
      },
      {
        "name": "y16",
        "op": "*/",
        "args": [
          "h",
          "g16",
          "100000"
        ]
      },
      {
        "name": "y17",
        "op": "*/",
        "args": [
          "h",
          "g17",
          "100000"
        ]
      },
      {
        "name": "y18",
        "op": "*/",
        "args": [
          "h",
          "g18",
          "100000"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "r",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x15",
              "y18"
            ]
          },
          {
            "type": "L",
            "data": [
              "x15",
              "y14"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "ox1",
              "oy1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x16",
              "y13"
            ]
          },
          {
            "type": "L",
            "data": [
              "x17",
              "y12"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x18",
              "y10"
            ]
          },
          {
            "type": "L",
            "data": [
              "x14",
              "y10"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "ox2",
              "oy1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x13",
              "y12"
            ]
          },
          {
            "type": "L",
            "data": [
              "x12",
              "y13"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "L",
            "data": [
              "x10",
              "y14"
            ]
          },
          {
            "type": "L",
            "data": [
              "x10",
              "y18"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "ox2",
              "oy2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x12",
              "y17"
            ]
          },
          {
            "type": "L",
            "data": [
              "x13",
              "y16"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "hc",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x14",
              "y15"
            ]
          },
          {
            "type": "L",
            "data": [
              "x18",
              "y15"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "ox1",
              "oy2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x17",
              "y16"
            ]
          },
          {
            "type": "L",
            "data": [
              "x16",
              "y17"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "x19",
              "vc"
            ]
          },
          {
            "type": "A",
            "data": [
              "wR",
              "hR",
              "cd2",
              "21600000"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x9",
      "t": "y9",
      "r": "x8",
      "b": "y8"
    }
  },
  "swooshArrow": {
    "adjustments": {
      "adj1": 25000,
      "adj2": 16667
    },
    "guides": [
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "1",
          "adj1",
          "75000"
        ]
      },
      {
        "name": "maxAdj2",
        "op": "*/",
        "args": [
          "70000",
          "w",
          "ss"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "ad1",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "100000"
        ]
      },
      {
        "name": "ad2",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "xB",
        "op": "+-",
        "args": [
          "r",
          "0",
          "ad2"
        ]
      },
      {
        "name": "yB",
        "op": "+-",
        "args": [
          "t",
          "ssd8",
          "0"
        ]
      },
      {
        "name": "alfa",
        "op": "*/",
        "args": [
          "cd4",
          "1",
          "14"
        ]
      },
      {
        "name": "dx0",
        "op": "tan",
        "args": [
          "ssd8",
          "alfa"
        ]
      },
      {
        "name": "xC",
        "op": "+-",
        "args": [
          "xB",
          "0",
          "dx0"
        ]
      },
      {
        "name": "dx1",
        "op": "tan",
        "args": [
          "ad1",
          "alfa"
        ]
      },
      {
        "name": "yF",
        "op": "+-",
        "args": [
          "yB",
          "ad1",
          "0"
        ]
      },
      {
        "name": "xF",
        "op": "+-",
        "args": [
          "xB",
          "dx1",
          "0"
        ]
      },
      {
        "name": "xE",
        "op": "+-",
        "args": [
          "xF",
          "dx0",
          "0"
        ]
      },
      {
        "name": "yE",
        "op": "+-",
        "args": [
          "yF",
          "ssd8",
          "0"
        ]
      },
      {
        "name": "dy2",
        "op": "+-",
        "args": [
          "yE",
          "0",
          "t"
        ]
      },
      {
        "name": "dy22",
        "op": "*/",
        "args": [
          "dy2",
          "1",
          "2"
        ]
      },
      {
        "name": "dy3",
        "op": "*/",
        "args": [
          "h",
          "1",
          "20"
        ]
      },
      {
        "name": "yD",
        "op": "+-",
        "args": [
          "t",
          "dy22",
          "dy3"
        ]
      },
      {
        "name": "dy4",
        "op": "*/",
        "args": [
          "hd6",
          "1",
          "1"
        ]
      },
      {
        "name": "yP1",
        "op": "+-",
        "args": [
          "hd6",
          "dy4",
          "0"
        ]
      },
      {
        "name": "xP1",
        "op": "val",
        "args": [
          "wd6"
        ]
      },
      {
        "name": "dy5",
        "op": "*/",
        "args": [
          "hd6",
          "1",
          "2"
        ]
      },
      {
        "name": "yP2",
        "op": "+-",
        "args": [
          "yF",
          "dy5",
          "0"
        ]
      },
      {
        "name": "xP2",
        "op": "val",
        "args": [
          "wd4"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Q",
            "data": [
              "xP1",
              "yP1",
              "xB",
              "yB"
            ]
          },
          {
            "type": "L",
            "data": [
              "xC",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "yD"
            ]
          },
          {
            "type": "L",
            "data": [
              "xE",
              "yE"
            ]
          },
          {
            "type": "L",
            "data": [
              "xF",
              "yF"
            ]
          },
          {
            "type": "Q",
            "data": [
              "xP2",
              "yP2",
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "teardrop": {
    "adjustments": {
      "adj": 100000
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "200000"
        ]
      },
      {
        "name": "r2",
        "op": "sqrt",
        "args": [
          "2"
        ]
      },
      {
        "name": "tw",
        "op": "*/",
        "args": [
          "wd2",
          "r2",
          "1"
        ]
      },
      {
        "name": "th",
        "op": "*/",
        "args": [
          "hd2",
          "r2",
          "1"
        ]
      },
      {
        "name": "sw",
        "op": "*/",
        "args": [
          "tw",
          "a",
          "100000"
        ]
      },
      {
        "name": "sh",
        "op": "*/",
        "args": [
          "th",
          "a",
          "100000"
        ]
      },
      {
        "name": "dx1",
        "op": "cos",
        "args": [
          "sw",
          "2700000"
        ]
      },
      {
        "name": "dy1",
        "op": "sin",
        "args": [
          "sh",
          "2700000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy1"
        ]
      },
      {
        "name": "x2",
        "op": "+/",
        "args": [
          "hc",
          "x1",
          "2"
        ]
      },
      {
        "name": "y2",
        "op": "+/",
        "args": [
          "vc",
          "y1",
          "2"
        ]
      },
      {
        "name": "idx",
        "op": "cos",
        "args": [
          "wd2",
          "2700000"
        ]
      },
      {
        "name": "idy",
        "op": "sin",
        "args": [
          "hd2",
          "2700000"
        ]
      },
      {
        "name": "il",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "idx"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "hc",
          "idx",
          "0"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "idy"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "vc",
          "idy",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "vc"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "Q",
            "data": [
              "x2",
              "t",
              "x1",
              "y1"
            ]
          },
          {
            "type": "Q",
            "data": [
              "r",
              "y2",
              "r",
              "vc"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "0",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "trapezoid": {
    "adjustments": {
      "adj": 25000
    },
    "guides": [
      {
        "name": "maxAdj",
        "op": "*/",
        "args": [
          "50000",
          "w",
          "ss"
        ]
      },
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "maxAdj"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "200000"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x2"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x1"
        ]
      },
      {
        "name": "il",
        "op": "*/",
        "args": [
          "wd3",
          "a",
          "maxAdj"
        ]
      },
      {
        "name": "it",
        "op": "*/",
        "args": [
          "hd3",
          "a",
          "maxAdj"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "r",
          "0",
          "il"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "b"
    }
  },
  "triangle": {
    "adjustments": {
      "adj": 50000
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "100000"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "w",
          "a",
          "200000"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "a",
          "100000"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "x1",
          "wd2",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x1",
      "t": "vc",
      "r": "x3",
      "b": "b"
    }
  },
  "upArrow": {
    "adjustments": {
      "adj1": 50000,
      "adj2": 50000
    },
    "guides": [
      {
        "name": "maxAdj2",
        "op": "*/",
        "args": [
          "100000",
          "h",
          "ss"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "y1",
        "op": "val",
        "args": [
          "dy1"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "w",
          "a1",
          "200000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "x1",
          "dy1",
          "wd2"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "y1",
          "0",
          "dy2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x1",
      "t": "y2",
      "r": "x2",
      "b": "b"
    }
  },
  "upArrowCallout": {
    "adjustments": {
      "adj1": 25000,
      "adj2": 25000,
      "adj3": 25000,
      "adj4": 64977
    },
    "guides": [
      {
        "name": "maxAdj2",
        "op": "*/",
        "args": [
          "50000",
          "w",
          "ss"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "maxAdj1",
        "op": "*/",
        "args": [
          "a2",
          "2",
          "1"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "maxAdj1"
        ]
      },
      {
        "name": "maxAdj3",
        "op": "*/",
        "args": [
          "100000",
          "h",
          "ss"
        ]
      },
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "0",
          "adj3",
          "maxAdj3"
        ]
      },
      {
        "name": "q2",
        "op": "*/",
        "args": [
          "a3",
          "ss",
          "h"
        ]
      },
      {
        "name": "maxAdj4",
        "op": "+-",
        "args": [
          "100000",
          "0",
          "q2"
        ]
      },
      {
        "name": "a4",
        "op": "pin",
        "args": [
          "0",
          "adj4",
          "maxAdj4"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "200000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "ss",
          "a3",
          "100000"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "h",
          "a4",
          "100000"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "b",
          "0",
          "dy2"
        ]
      },
      {
        "name": "y3",
        "op": "+/",
        "args": [
          "y2",
          "b",
          "2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "y2",
      "r": "r",
      "b": "b"
    }
  },
  "upDownArrow": {
    "adjustments": {
      "adj1": 50000,
      "adj2": 50000
    },
    "guides": [
      {
        "name": "maxAdj2",
        "op": "*/",
        "args": [
          "50000",
          "h",
          "ss"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "b",
          "0",
          "y2"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "w",
          "a1",
          "200000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "dy1",
        "op": "*/",
        "args": [
          "x1",
          "y2",
          "wd2"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "y2",
          "0",
          "dy1"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "y3",
          "dy1",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "x1",
      "t": "y1",
      "r": "x2",
      "b": "y4"
    }
  },
  "upDownArrowCallout": {
    "adjustments": {
      "adj1": 25000,
      "adj2": 25000,
      "adj3": 25000,
      "adj4": 48123
    },
    "guides": [
      {
        "name": "maxAdj2",
        "op": "*/",
        "args": [
          "50000",
          "w",
          "ss"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "maxAdj2"
        ]
      },
      {
        "name": "maxAdj1",
        "op": "*/",
        "args": [
          "a2",
          "2",
          "1"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "maxAdj1"
        ]
      },
      {
        "name": "maxAdj3",
        "op": "*/",
        "args": [
          "50000",
          "h",
          "ss"
        ]
      },
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "0",
          "adj3",
          "maxAdj3"
        ]
      },
      {
        "name": "q2",
        "op": "*/",
        "args": [
          "a3",
          "ss",
          "hd2"
        ]
      },
      {
        "name": "maxAdj4",
        "op": "+-",
        "args": [
          "100000",
          "0",
          "q2"
        ]
      },
      {
        "name": "a4",
        "op": "pin",
        "args": [
          "0",
          "adj4",
          "maxAdj4"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "dx2",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "200000"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx2"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "ss",
          "a3",
          "100000"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "b",
          "0",
          "y1"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "h",
          "a4",
          "200000"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "dy2"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "vc",
          "dy2",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "hc",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y3"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "y2",
      "r": "r",
      "b": "y3"
    }
  },
  "uturnArrow": {
    "adjustments": {
      "adj1": 25000,
      "adj2": 25000,
      "adj3": 25000,
      "adj4": 43750,
      "adj5": 75000
    },
    "guides": [
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "0",
          "adj2",
          "25000"
        ]
      },
      {
        "name": "maxAdj1",
        "op": "*/",
        "args": [
          "a2",
          "2",
          "1"
        ]
      },
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "maxAdj1"
        ]
      },
      {
        "name": "q2",
        "op": "*/",
        "args": [
          "a1",
          "ss",
          "h"
        ]
      },
      {
        "name": "q3",
        "op": "+-",
        "args": [
          "100000",
          "0",
          "q2"
        ]
      },
      {
        "name": "maxAdj3",
        "op": "*/",
        "args": [
          "q3",
          "h",
          "ss"
        ]
      },
      {
        "name": "a3",
        "op": "pin",
        "args": [
          "0",
          "adj3",
          "maxAdj3"
        ]
      },
      {
        "name": "q1",
        "op": "+-",
        "args": [
          "a3",
          "a1",
          "0"
        ]
      },
      {
        "name": "minAdj5",
        "op": "*/",
        "args": [
          "q1",
          "ss",
          "h"
        ]
      },
      {
        "name": "a5",
        "op": "pin",
        "args": [
          "minAdj5",
          "adj5",
          "100000"
        ]
      },
      {
        "name": "th",
        "op": "*/",
        "args": [
          "ss",
          "a1",
          "100000"
        ]
      },
      {
        "name": "aw2",
        "op": "*/",
        "args": [
          "ss",
          "a2",
          "100000"
        ]
      },
      {
        "name": "th2",
        "op": "*/",
        "args": [
          "th",
          "1",
          "2"
        ]
      },
      {
        "name": "dh2",
        "op": "+-",
        "args": [
          "aw2",
          "0",
          "th2"
        ]
      },
      {
        "name": "y5",
        "op": "*/",
        "args": [
          "h",
          "a5",
          "100000"
        ]
      },
      {
        "name": "ah",
        "op": "*/",
        "args": [
          "ss",
          "a3",
          "100000"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "y5",
          "0",
          "ah"
        ]
      },
      {
        "name": "x9",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dh2"
        ]
      },
      {
        "name": "bw",
        "op": "*/",
        "args": [
          "x9",
          "1",
          "2"
        ]
      },
      {
        "name": "bs",
        "op": "min",
        "args": [
          "bw",
          "y4"
        ]
      },
      {
        "name": "maxAdj4",
        "op": "*/",
        "args": [
          "bs",
          "100000",
          "ss"
        ]
      },
      {
        "name": "a4",
        "op": "pin",
        "args": [
          "0",
          "adj4",
          "maxAdj4"
        ]
      },
      {
        "name": "bd",
        "op": "*/",
        "args": [
          "ss",
          "a4",
          "100000"
        ]
      },
      {
        "name": "bd3",
        "op": "+-",
        "args": [
          "bd",
          "0",
          "th"
        ]
      },
      {
        "name": "bd2",
        "op": "max",
        "args": [
          "bd3",
          "0"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "th",
          "bd2",
          "0"
        ]
      },
      {
        "name": "x8",
        "op": "+-",
        "args": [
          "r",
          "0",
          "aw2"
        ]
      },
      {
        "name": "x6",
        "op": "+-",
        "args": [
          "x8",
          "0",
          "aw2"
        ]
      },
      {
        "name": "x7",
        "op": "+-",
        "args": [
          "x6",
          "dh2",
          "0"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "x9",
          "0",
          "bd"
        ]
      },
      {
        "name": "x5",
        "op": "+-",
        "args": [
          "x7",
          "0",
          "bd2"
        ]
      },
      {
        "name": "cx",
        "op": "+/",
        "args": [
          "th",
          "x7",
          "2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "bd"
            ]
          },
          {
            "type": "A",
            "data": [
              "bd",
              "bd",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "bd",
              "bd",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x9",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x8",
              "y5"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x7",
              "y4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x7",
              "x3"
            ]
          },
          {
            "type": "A",
            "data": [
              "bd2",
              "bd2",
              "0",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "th"
            ]
          },
          {
            "type": "A",
            "data": [
              "bd2",
              "bd2",
              "3cd4",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "th",
              "b"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "verticalScroll": {
    "adjustments": {
      "adj": 12500
    },
    "guides": [
      {
        "name": "a",
        "op": "pin",
        "args": [
          "0",
          "adj",
          "25000"
        ]
      },
      {
        "name": "ch",
        "op": "*/",
        "args": [
          "ss",
          "a",
          "100000"
        ]
      },
      {
        "name": "ch2",
        "op": "*/",
        "args": [
          "ch",
          "1",
          "2"
        ]
      },
      {
        "name": "ch4",
        "op": "*/",
        "args": [
          "ch",
          "1",
          "4"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "ch",
          "ch2",
          "0"
        ]
      },
      {
        "name": "x4",
        "op": "+-",
        "args": [
          "ch",
          "ch",
          "0"
        ]
      },
      {
        "name": "x6",
        "op": "+-",
        "args": [
          "r",
          "0",
          "ch"
        ]
      },
      {
        "name": "x7",
        "op": "+-",
        "args": [
          "r",
          "0",
          "ch2"
        ]
      },
      {
        "name": "x5",
        "op": "+-",
        "args": [
          "x6",
          "0",
          "ch2"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "b",
          "0",
          "ch"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "b",
          "0",
          "ch2"
        ]
      }
    ],
    "paths": [
      {
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "ch2",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "cd4",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "ch2",
              "y4"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch4",
              "ch4",
              "cd4",
              "-10800000"
            ]
          },
          {
            "type": "L",
            "data": [
              "ch",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "ch",
              "ch2"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x7",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "3cd4",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "ch"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y4"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "0",
              "cd4"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "x4",
              "ch2"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "0",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch4",
              "ch4",
              "cd4",
              "cd2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "darkenLess",
        "stroke": false,
        "commands": [
          {
            "type": "M",
            "data": [
              "x4",
              "ch2"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "0",
              "cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch4",
              "ch4",
              "cd4",
              "cd2"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "ch",
              "y4"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "0",
              "3cd4"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch4",
              "ch4",
              "3cd4",
              "cd2"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      },
      {
        "fill": "none",
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "ch",
              "y3"
            ]
          },
          {
            "type": "L",
            "data": [
              "ch",
              "ch2"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x7",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "3cd4",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "ch"
            ]
          },
          {
            "type": "L",
            "data": [
              "x6",
              "y4"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "0",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "ch2",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "cd4",
              "cd2"
            ]
          },
          {
            "type": "Z",
            "data": []
          },
          {
            "type": "M",
            "data": [
              "x3",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "3cd4",
              "cd2"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch4",
              "ch4",
              "cd4",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "x4",
              "ch2"
            ]
          },
          {
            "type": "M",
            "data": [
              "x6",
              "ch"
            ]
          },
          {
            "type": "L",
            "data": [
              "x3",
              "ch"
            ]
          },
          {
            "type": "M",
            "data": [
              "ch2",
              "y3"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch4",
              "ch4",
              "3cd4",
              "cd2"
            ]
          },
          {
            "type": "L",
            "data": [
              "ch",
              "y4"
            ]
          },
          {
            "type": "M",
            "data": [
              "ch2",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "ch2",
              "ch2",
              "cd4",
              "-5400000"
            ]
          },
          {
            "type": "L",
            "data": [
              "ch",
              "y3"
            ]
          }
        ]
      }
    ],
    "textRect": {
      "l": "ch",
      "t": "ch",
      "r": "x6",
      "b": "y4"
    }
  },
  "wave": {
    "adjustments": {
      "adj1": 12500,
      "adj2": 0
    },
    "guides": [
      {
        "name": "a1",
        "op": "pin",
        "args": [
          "0",
          "adj1",
          "20000"
        ]
      },
      {
        "name": "a2",
        "op": "pin",
        "args": [
          "-10000",
          "adj2",
          "10000"
        ]
      },
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "100000"
        ]
      },
      {
        "name": "dy2",
        "op": "*/",
        "args": [
          "y1",
          "10",
          "3"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "y1",
          "0",
          "dy2"
        ]
      },
      {
        "name": "y3",
        "op": "+-",
        "args": [
          "y1",
          "dy2",
          "0"
        ]
      },
      {
        "name": "y4",
        "op": "+-",
        "args": [
          "b",
          "0",
          "y1"
        ]
      },
      {
        "name": "y5",
        "op": "+-",
        "args": [
          "y4",
          "0",
          "dy2"
        ]
      },
      {
        "name": "y6",
        "op": "+-",
        "args": [
          "y4",
          "dy2",
          "0"
        ]
      },
      {
        "name": "dx1",
        "op": "*/",
        "args": [
          "w",
          "a2",
          "100000"
        ]
      },
      {
        "name": "of2",
        "op": "*/",
        "args": [
          "w",
          "a2",
          "50000"
        ]
      },
      {
        "name": "x1",
        "op": "abs",
        "args": [
          "dx1"
        ]
      },
      {
        "name": "dx2",
        "op": "?:",
        "args": [
          "of2",
          "0",
          "of2"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "l",
          "0",
          "dx2"
        ]
      },
      {
        "name": "dx5",
        "op": "?:",
        "args": [
          "of2",
          "of2",
          "0"
        ]
      },
      {
        "name": "x5",
        "op": "+-",
        "args": [
          "r",
          "0",
          "dx5"
        ]
      },
      {
        "name": "dx3",
        "op": "+/",
        "args": [
          "dx2",
          "x5",
          "3"
        ]
      },
      {
        "name": "x3",
        "op": "+-",
        "args": [
          "x2",
          "dx3",
          "0"
        ]
      },
      {
        "name": "x4",
        "op": "+/",
        "args": [
          "x3",
          "x5",
          "2"
        ]
      },
      {
        "name": "x6",
        "op": "+-",
        "args": [
          "l",
          "dx5",
          "0"
        ]
      },
      {
        "name": "x10",
        "op": "+-",
        "args": [
          "r",
          "dx2",
          "0"
        ]
      },
      {
        "name": "x7",
        "op": "+-",
        "args": [
          "x6",
          "dx3",
          "0"
        ]
      },
      {
        "name": "x8",
        "op": "+/",
        "args": [
          "x7",
          "x10",
          "2"
        ]
      },
      {
        "name": "x9",
        "op": "+-",
        "args": [
          "r",
          "0",
          "x1"
        ]
      },
      {
        "name": "xAdj",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "xAdj2",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "dx1"
        ]
      },
      {
        "name": "il",
        "op": "max",
        "args": [
          "x2",
          "x6"
        ]
      },
      {
        "name": "ir",
        "op": "min",
        "args": [
          "x5",
          "x10"
        ]
      },
      {
        "name": "it",
        "op": "*/",
        "args": [
          "h",
          "a1",
          "50000"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "b",
          "0",
          "it"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "x2",
              "y1"
            ]
          },
          {
            "type": "C",
            "data": [
              "x3",
              "y2",
              "x4",
              "y3",
              "x5",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "x10",
              "y4"
            ]
          },
          {
            "type": "C",
            "data": [
              "x8",
              "y6",
              "x7",
              "y5",
              "x6",
              "y4"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "wedgeEllipseCallout": {
    "adjustments": {
      "adj1": -20833,
      "adj2": 62500
    },
    "guides": [
      {
        "name": "dxPos",
        "op": "*/",
        "args": [
          "w",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "dyPos",
        "op": "*/",
        "args": [
          "h",
          "adj2",
          "100000"
        ]
      },
      {
        "name": "xPos",
        "op": "+-",
        "args": [
          "hc",
          "dxPos",
          "0"
        ]
      },
      {
        "name": "yPos",
        "op": "+-",
        "args": [
          "vc",
          "dyPos",
          "0"
        ]
      },
      {
        "name": "sdx",
        "op": "*/",
        "args": [
          "dxPos",
          "h",
          "1"
        ]
      },
      {
        "name": "sdy",
        "op": "*/",
        "args": [
          "dyPos",
          "w",
          "1"
        ]
      },
      {
        "name": "pang",
        "op": "at2",
        "args": [
          "sdx",
          "sdy"
        ]
      },
      {
        "name": "stAng",
        "op": "+-",
        "args": [
          "pang",
          "660000",
          "0"
        ]
      },
      {
        "name": "enAng",
        "op": "+-",
        "args": [
          "pang",
          "0",
          "660000"
        ]
      },
      {
        "name": "dx1",
        "op": "cos",
        "args": [
          "wd2",
          "stAng"
        ]
      },
      {
        "name": "dy1",
        "op": "sin",
        "args": [
          "hd2",
          "stAng"
        ]
      },
      {
        "name": "x1",
        "op": "+-",
        "args": [
          "hc",
          "dx1",
          "0"
        ]
      },
      {
        "name": "y1",
        "op": "+-",
        "args": [
          "vc",
          "dy1",
          "0"
        ]
      },
      {
        "name": "dx2",
        "op": "cos",
        "args": [
          "wd2",
          "enAng"
        ]
      },
      {
        "name": "dy2",
        "op": "sin",
        "args": [
          "hd2",
          "enAng"
        ]
      },
      {
        "name": "x2",
        "op": "+-",
        "args": [
          "hc",
          "dx2",
          "0"
        ]
      },
      {
        "name": "y2",
        "op": "+-",
        "args": [
          "vc",
          "dy2",
          "0"
        ]
      },
      {
        "name": "stAng1",
        "op": "at2",
        "args": [
          "dx1",
          "dy1"
        ]
      },
      {
        "name": "enAng1",
        "op": "at2",
        "args": [
          "dx2",
          "dy2"
        ]
      },
      {
        "name": "swAng1",
        "op": "+-",
        "args": [
          "enAng1",
          "0",
          "stAng1"
        ]
      },
      {
        "name": "swAng2",
        "op": "+-",
        "args": [
          "swAng1",
          "21600000",
          "0"
        ]
      },
      {
        "name": "swAng",
        "op": "?:",
        "args": [
          "swAng1",
          "swAng1",
          "swAng2"
        ]
      },
      {
        "name": "idx",
        "op": "cos",
        "args": [
          "wd2",
          "2700000"
        ]
      },
      {
        "name": "idy",
        "op": "sin",
        "args": [
          "hd2",
          "2700000"
        ]
      },
      {
        "name": "il",
        "op": "+-",
        "args": [
          "hc",
          "0",
          "idx"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "hc",
          "idx",
          "0"
        ]
      },
      {
        "name": "it",
        "op": "+-",
        "args": [
          "vc",
          "0",
          "idy"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "vc",
          "idy",
          "0"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "xPos",
              "yPos"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "y1"
            ]
          },
          {
            "type": "A",
            "data": [
              "wd2",
              "hd2",
              "stAng1",
              "swAng"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "it",
      "r": "ir",
      "b": "ib"
    }
  },
  "wedgeRectCallout": {
    "adjustments": {
      "adj1": -20833,
      "adj2": 62500
    },
    "guides": [
      {
        "name": "dxPos",
        "op": "*/",
        "args": [
          "w",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "dyPos",
        "op": "*/",
        "args": [
          "h",
          "adj2",
          "100000"
        ]
      },
      {
        "name": "xPos",
        "op": "+-",
        "args": [
          "hc",
          "dxPos",
          "0"
        ]
      },
      {
        "name": "yPos",
        "op": "+-",
        "args": [
          "vc",
          "dyPos",
          "0"
        ]
      },
      {
        "name": "dx",
        "op": "+-",
        "args": [
          "xPos",
          "0",
          "hc"
        ]
      },
      {
        "name": "dy",
        "op": "+-",
        "args": [
          "yPos",
          "0",
          "vc"
        ]
      },
      {
        "name": "dq",
        "op": "*/",
        "args": [
          "dxPos",
          "h",
          "w"
        ]
      },
      {
        "name": "ady",
        "op": "abs",
        "args": [
          "dyPos"
        ]
      },
      {
        "name": "adq",
        "op": "abs",
        "args": [
          "dq"
        ]
      },
      {
        "name": "dz",
        "op": "+-",
        "args": [
          "ady",
          "0",
          "adq"
        ]
      },
      {
        "name": "xg1",
        "op": "?:",
        "args": [
          "dxPos",
          "7",
          "2"
        ]
      },
      {
        "name": "xg2",
        "op": "?:",
        "args": [
          "dxPos",
          "10",
          "5"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "w",
          "xg1",
          "12"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "xg2",
          "12"
        ]
      },
      {
        "name": "yg1",
        "op": "?:",
        "args": [
          "dyPos",
          "7",
          "2"
        ]
      },
      {
        "name": "yg2",
        "op": "?:",
        "args": [
          "dyPos",
          "10",
          "5"
        ]
      },
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "h",
          "yg1",
          "12"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "yg2",
          "12"
        ]
      },
      {
        "name": "t1",
        "op": "?:",
        "args": [
          "dxPos",
          "l",
          "xPos"
        ]
      },
      {
        "name": "xl",
        "op": "?:",
        "args": [
          "dz",
          "l",
          "t1"
        ]
      },
      {
        "name": "t2",
        "op": "?:",
        "args": [
          "dyPos",
          "x1",
          "xPos"
        ]
      },
      {
        "name": "xt",
        "op": "?:",
        "args": [
          "dz",
          "t2",
          "x1"
        ]
      },
      {
        "name": "t3",
        "op": "?:",
        "args": [
          "dxPos",
          "xPos",
          "r"
        ]
      },
      {
        "name": "xr",
        "op": "?:",
        "args": [
          "dz",
          "r",
          "t3"
        ]
      },
      {
        "name": "t4",
        "op": "?:",
        "args": [
          "dyPos",
          "xPos",
          "x1"
        ]
      },
      {
        "name": "xb",
        "op": "?:",
        "args": [
          "dz",
          "t4",
          "x1"
        ]
      },
      {
        "name": "t5",
        "op": "?:",
        "args": [
          "dxPos",
          "y1",
          "yPos"
        ]
      },
      {
        "name": "yl",
        "op": "?:",
        "args": [
          "dz",
          "y1",
          "t5"
        ]
      },
      {
        "name": "t6",
        "op": "?:",
        "args": [
          "dyPos",
          "t",
          "yPos"
        ]
      },
      {
        "name": "yt",
        "op": "?:",
        "args": [
          "dz",
          "t6",
          "t"
        ]
      },
      {
        "name": "t7",
        "op": "?:",
        "args": [
          "dxPos",
          "yPos",
          "y1"
        ]
      },
      {
        "name": "yr",
        "op": "?:",
        "args": [
          "dz",
          "y1",
          "t7"
        ]
      },
      {
        "name": "t8",
        "op": "?:",
        "args": [
          "dyPos",
          "yPos",
          "b"
        ]
      },
      {
        "name": "yb",
        "op": "?:",
        "args": [
          "dz",
          "t8",
          "b"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "xt",
              "yt"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "xr",
              "yr"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "xb",
              "yb"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "xl",
              "yl"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y1"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "l",
      "t": "t",
      "r": "r",
      "b": "b"
    }
  },
  "wedgeRoundRectCallout": {
    "adjustments": {
      "adj1": -20833,
      "adj2": 62500,
      "adj3": 16667
    },
    "guides": [
      {
        "name": "dxPos",
        "op": "*/",
        "args": [
          "w",
          "adj1",
          "100000"
        ]
      },
      {
        "name": "dyPos",
        "op": "*/",
        "args": [
          "h",
          "adj2",
          "100000"
        ]
      },
      {
        "name": "xPos",
        "op": "+-",
        "args": [
          "hc",
          "dxPos",
          "0"
        ]
      },
      {
        "name": "yPos",
        "op": "+-",
        "args": [
          "vc",
          "dyPos",
          "0"
        ]
      },
      {
        "name": "dq",
        "op": "*/",
        "args": [
          "dxPos",
          "h",
          "w"
        ]
      },
      {
        "name": "ady",
        "op": "abs",
        "args": [
          "dyPos"
        ]
      },
      {
        "name": "adq",
        "op": "abs",
        "args": [
          "dq"
        ]
      },
      {
        "name": "dz",
        "op": "+-",
        "args": [
          "ady",
          "0",
          "adq"
        ]
      },
      {
        "name": "xg1",
        "op": "?:",
        "args": [
          "dxPos",
          "7",
          "2"
        ]
      },
      {
        "name": "xg2",
        "op": "?:",
        "args": [
          "dxPos",
          "10",
          "5"
        ]
      },
      {
        "name": "x1",
        "op": "*/",
        "args": [
          "w",
          "xg1",
          "12"
        ]
      },
      {
        "name": "x2",
        "op": "*/",
        "args": [
          "w",
          "xg2",
          "12"
        ]
      },
      {
        "name": "yg1",
        "op": "?:",
        "args": [
          "dyPos",
          "7",
          "2"
        ]
      },
      {
        "name": "yg2",
        "op": "?:",
        "args": [
          "dyPos",
          "10",
          "5"
        ]
      },
      {
        "name": "y1",
        "op": "*/",
        "args": [
          "h",
          "yg1",
          "12"
        ]
      },
      {
        "name": "y2",
        "op": "*/",
        "args": [
          "h",
          "yg2",
          "12"
        ]
      },
      {
        "name": "t1",
        "op": "?:",
        "args": [
          "dxPos",
          "l",
          "xPos"
        ]
      },
      {
        "name": "xl",
        "op": "?:",
        "args": [
          "dz",
          "l",
          "t1"
        ]
      },
      {
        "name": "t2",
        "op": "?:",
        "args": [
          "dyPos",
          "x1",
          "xPos"
        ]
      },
      {
        "name": "xt",
        "op": "?:",
        "args": [
          "dz",
          "t2",
          "x1"
        ]
      },
      {
        "name": "t3",
        "op": "?:",
        "args": [
          "dxPos",
          "xPos",
          "r"
        ]
      },
      {
        "name": "xr",
        "op": "?:",
        "args": [
          "dz",
          "r",
          "t3"
        ]
      },
      {
        "name": "t4",
        "op": "?:",
        "args": [
          "dyPos",
          "xPos",
          "x1"
        ]
      },
      {
        "name": "xb",
        "op": "?:",
        "args": [
          "dz",
          "t4",
          "x1"
        ]
      },
      {
        "name": "t5",
        "op": "?:",
        "args": [
          "dxPos",
          "y1",
          "yPos"
        ]
      },
      {
        "name": "yl",
        "op": "?:",
        "args": [
          "dz",
          "y1",
          "t5"
        ]
      },
      {
        "name": "t6",
        "op": "?:",
        "args": [
          "dyPos",
          "t",
          "yPos"
        ]
      },
      {
        "name": "yt",
        "op": "?:",
        "args": [
          "dz",
          "t6",
          "t"
        ]
      },
      {
        "name": "t7",
        "op": "?:",
        "args": [
          "dxPos",
          "yPos",
          "y1"
        ]
      },
      {
        "name": "yr",
        "op": "?:",
        "args": [
          "dz",
          "y1",
          "t7"
        ]
      },
      {
        "name": "t8",
        "op": "?:",
        "args": [
          "dyPos",
          "yPos",
          "b"
        ]
      },
      {
        "name": "yb",
        "op": "?:",
        "args": [
          "dz",
          "t8",
          "b"
        ]
      },
      {
        "name": "u1",
        "op": "*/",
        "args": [
          "ss",
          "adj3",
          "100000"
        ]
      },
      {
        "name": "u2",
        "op": "+-",
        "args": [
          "r",
          "0",
          "u1"
        ]
      },
      {
        "name": "v2",
        "op": "+-",
        "args": [
          "b",
          "0",
          "u1"
        ]
      },
      {
        "name": "il",
        "op": "*/",
        "args": [
          "u1",
          "29289",
          "100000"
        ]
      },
      {
        "name": "ir",
        "op": "+-",
        "args": [
          "r",
          "0",
          "il"
        ]
      },
      {
        "name": "ib",
        "op": "+-",
        "args": [
          "b",
          "0",
          "il"
        ]
      }
    ],
    "paths": [
      {
        "stroke": true,
        "commands": [
          {
            "type": "M",
            "data": [
              "l",
              "u1"
            ]
          },
          {
            "type": "A",
            "data": [
              "u1",
              "u1",
              "cd2",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "xt",
              "yt"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "t"
            ]
          },
          {
            "type": "L",
            "data": [
              "u2",
              "t"
            ]
          },
          {
            "type": "A",
            "data": [
              "u1",
              "u1",
              "3cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y1"
            ]
          },
          {
            "type": "L",
            "data": [
              "xr",
              "yr"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "r",
              "v2"
            ]
          },
          {
            "type": "A",
            "data": [
              "u1",
              "u1",
              "0",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "x2",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "xb",
              "yb"
            ]
          },
          {
            "type": "L",
            "data": [
              "x1",
              "b"
            ]
          },
          {
            "type": "L",
            "data": [
              "u1",
              "b"
            ]
          },
          {
            "type": "A",
            "data": [
              "u1",
              "u1",
              "cd4",
              "cd4"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y2"
            ]
          },
          {
            "type": "L",
            "data": [
              "xl",
              "yl"
            ]
          },
          {
            "type": "L",
            "data": [
              "l",
              "y1"
            ]
          },
          {
            "type": "Z",
            "data": []
          }
        ]
      }
    ],
    "textRect": {
      "l": "il",
      "t": "il",
      "r": "ir",
      "b": "ib"
    }
  }
};
