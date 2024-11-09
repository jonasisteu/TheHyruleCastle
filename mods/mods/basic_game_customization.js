"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diffEnnemy = exports.titleScreen = void 0;
// import stageCheck from '../stageEnnemy';
function titleScreen() {
    var c = require('ansi-colors');
    var prompt = require('prompt-sync')();
    var icon = '\r\n                                                                                                                                                                                \r\n                                                                                       \u2588\u2588\u2588                                                                                      \r\n                                                                                      \u2588\u2588\u2588\u2588\u2588\u2588                                                                                    \r\n                                                                                    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                                                                   \r\n                                                                                  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                                                                  \r\n                                                                                 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                                                                \r\n                \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588         \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                   \r\n                \u2588\u2588           \u2588\u2588    \u2588\u2588    \u2588\u2588         \u2588\u2588   \u2588\u2588\u2588    \u2588\u2588\u2588 \u2588\u2588          \u2588\u2588         \u2588\u2588          \u2588    \u2588\u2588    \u2588         \u2588\u2588\u2588    \u2588\u2588          \u2588\u2588          \u2588\u2588                   \r\n                \u2588\u2588 \u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588   \u2588\u2588\u2588    \u2588\u2588    \u2588\u2588\u2588\u2588 \u2588\u2588    \u2588\u2588    \u2588\u2588 \u2588\u2588\u2588     \u2588\u2588\u2588  \u2588    \u2588\u2588\u2588\u2588\u2588 \u2588\u2588    \u2588\u2588\u2588\u2588  \u2588          \u2588    \u2588\u2588    \u2588\u2588   \u2588\u2588    \u2588\u2588\u2588\u2588    \u2588     \u2588\u2588\u2588  \u2588\u2588                   \r\n                \u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588          \u2588\u2588       \u2588\u2588\u2588\u2588    \u2588\u2588    \u2588\u2588\u2588\u2588 \u2588       \u2588\u2588\u2588     \u2588\u2588     \u2588       \u2593\u2588\u2588\u2588          \u2588    \u2588\u2588\u2588    \u2588\u2588 \u2588\u2588             \u2588        \u2588\u2588\u2588                    \r\n                   \u2588\u2588    \u2588\u2588  \u2588\u2588   \u2588\u2588\u2588    \u2588\u2588    \u2588\u2588\u2588\u2588 \u2588\u2588    \u2588\u2588    \u2588\u2588\u2591  \u2588     \u2588\u2588\u2588  \u2588    \u2588\u2588\u2588   \u2588\u2588    \u2588\u2588\u2588\u2588  \u2588    \u2588\u2593    \u2588    \u2588\u2588    \u2588\u2588   \u2588\u2588    \u2588\u2588\u2588\u2588    \u2588     \u2588\u2588\u2588\u2588                      \r\n                  \u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588    \u2588\u2588    \u2588\u2588         \u2588\u2588   \u2588\u2588\u2588         \u2588          \u2588\u2588         \u2588\u2588          \u2588    \u2588\u2588\u2588   \u2588        \u2591\u2588\u2588\u2588    \u2588\u2588         \u2588\u2588\u2588     \u2588\u2588                        \r\n                  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588         \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                        \r\n                                                                     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                                                    \r\n                                                                   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                                                  \r\n                                                                  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                                                 \r\n                                                                \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                                               \r\n                                                               \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                                              \r\n                                                   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                                          \r\n                                                   \u2588\u2593            \u2588\u2588            \u2588\u2588      \u2588\u2588\u2588\u2588\u2588\u2588\u2588          \u2588\u2588\u2588\u2588\u2588\u2588\u2588     \u2592\u2588                                                          \r\n                                                   \u2588\u2593   \u2588\u2588\u2588     \u2588\u2588\u2588      \u2588\u2588\u2588   \u2588\u2588\u2588     \u2588\u2588    \u2588\u2588    \u2588\u2588\u2588    \u2588\u2588 \u2588\u2588      \u2588\u2588                                                         \r\n                                                   \u2588\u2593 \u2588\u2588\u2588\u2588     \u2588\u2588 \u2588\u2588     \u2588\u2588\u2588\u2588  \u2588\u2588\u2588     \u2588\u2588    \u2588\u2588    \u2588\u2588\u2588\u2588    \u2588\u2588\u2588        \u2588\u2588                                                        \r\n                                                   \u2588\u2588\u2588\u2588\u2588\u2588     \u2588\u2588\u2588\u2588\u2588\u2588        \u2588\u2588\u2588\u2588\u2588\u2588     \u2588\u2588 \u2588\u2588\u2588\u2588\u2591    \u2588\u2588\u2588\u2588     \u2588\u2588   \u2588    \u2588\u2588\u2588\u2588                                                      \r\n                                                      \u2588\u2588     \u2588\u2588\u2588\u2588\u2588\u2588\u2591     \u2588  \u2588\u2588 \u2588\u2588\u2588     \u2588\u2588\u2588\u2588  \u2588\u2591    \u2588\u2588\u2588\u2588     \u2588         \u2588\u2588\u2588\u2588\u2588                                                     \r\n                                                    \u2588\u2588\u2588     \u2588\u2588\u2588   \u2588      \u2588\u2588\u2588\u2588  \u2588\u2588\u2588     \u2588\u2588\u2588   \u2588\u2588    \u2588\u2588\u2588     \u2588\u2588          \u2588\u2588\u2588\u2588\u2588\u2588                                                   \r\n                                                   \u2588\u2588\u2588     \u2588\u2588     \u2588      \u2588\u2588\u2588   \u2588\u2588\u2588     \u2588\u2588    \u2588\u2591    \u2588      \u2588\u2588   \u2588\u2588\u2588\u2588     \u2588\u2588\u2588\u2588\u2588\u2588                                                  \r\n                                                 \u2588\u2588\u2588\u2588                          \u2588                       \u2588\u2588\u2588      \u2588\u2588        \u2588\u2588\u2588\u2588\u2588\u2588                                                \r\n                                                \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                               \r\n                                              \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                            \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                             \r\n                                             \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                         \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                            \r\n                \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588      \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588              \r\n                \u2588\u2588\u2588   \u2588\u2588\u2588    \u2588\u2588    \u2588\u2588\u2588   \u2588\u2588          \u2588    \u2588\u2588\u2588    \u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588\u2588         \u2588\u2588   \u2588\u2588\u2588        \u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2593         \u2588           \u2588\u2588     \u2588\u2588\u2588\u2588\u2588\u2588         \u2592\u2588              \r\n                 \u2588\u2588   \u2588\u2588\u2588    \u2588\u2588\u2588    \u2588   \u2588\u2588\u2588    \u2588\u2588    \u2588    \u2588\u2588\u2588    \u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588 \u2588\u2588  \u2588\u2588    \u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588      \u2588\u2588\u2588    \u2588\u2588\u2588\u2588  \u2588 \u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588    \u2591\u2588   \u2588\u2588    \u2588\u2588\u2588\u2588 \u2592\u2588              \r\n                 \u2588\u2588          \u2588\u2588\u2588\u2588      \u2588\u2588\u2588\u2588         \u2588\u2588    \u2588\u2588\u2588    \u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588\u2588       \u2588\u2588\u2588\u2588  \u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588      \u2588\u2588\u2588\u2588      \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588       \u2588\u2588\u2588\u2588              \r\n                 \u2588\u2588   \u2588\u2588\u2588    \u2588\u2588 \u2588\u2588    \u2588\u2588\u2588\u2588\u2588        \u2588\u2588\u2588    \u2588\u2588\u2588    \u2588\u2588    \u2588\u2588\u2588  \u2588\u2588    \u2588\u2588\u2591\u2588 \u2588\u2588  \u2588\u2588    \u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588        \u2588\u2588 \u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588     \u2588\u2588   \u2588    \u2588\u2588 \u2588 \u2591\u2588              \r\n                \u2588\u2588\u2588   \u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588    \u2588\u2593    \u2588\u2588        \u2588\u2588\u2588\u2588         \u2588\u2588         \u2588\u2588   \u2588\u2588         \u2588\u2588   \u2588\u2588\u2588    \u2588          \u2588\u2588\u2588\u2588\u2592   \u2588\u2588\u2588\u2588\u2588\u2588          \u2588         \u2592\u2588              \r\n               \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588              \r\n                                 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                                \r\n                                                                                                                                                                                \r\n                                                                                                                                                                                ';
    while (true) {
        console.clear();
        console.log(icon);
        console.log('\n                                                         1.New Game                                            2.Quit\n');
        var menu = prompt('').toLowerCase();
        if (menu === 'new game' || menu === 'new' || menu === '1') {
            console.log('\n                                                                            Chose your difficulty level :\n');
            console.log('\n                                                     Normal                   Hard(Recommended)                Insane\n');
            var difficulty = prompt('').toLowerCase();
            if (difficulty === 'normal' || difficulty === 'hard' || difficulty === 'insane') {
                console.log('\n                                                                         Chose your number of fights :\n');
                console.log('\n                                                               10              20              50              100\n');
                var maxFloor = prompt('').toLowerCase();
                if (maxFloor === '10' || maxFloor === '20' || maxFloor === '50' || maxFloor === '100') {
                    return [difficulty, maxFloor];
                }
                else {
                    prompt('Please chose a valid number of fights.');
                }
            }
            else {
                prompt('Please chose a valid level of difficulty.');
            }
        }
        else if (menu === 'quit' || menu === '2') {
            console.log('\nAre you sure to leave the game now?\n1. Yes    2. No');
            var choice = prompt('> ').toLowerCase();
            if (choice === 'yes' || choice === '1') {
                console.clear();
                process.exit();
            }
            else if (choice === 'no' || choice === '2') {
            }
        }
        else {
            console.log('\nThat is not a valid option');
        }
    }
}
exports.titleScreen = titleScreen;
function diffEnnemy(ennemy, difficulty) {
    var multiplier = 0;
    if (difficulty === 'normal') {
        multiplier = 1;
    }
    else if (difficulty === 'hard') {
        multiplier = 1.5;
    }
    else if (difficulty === 'insane') {
        multiplier = 2;
    }
    for (var _i = 0, _a = Object.keys(ennemy); _i < _a.length; _i++) {
        var i = _a[_i];
        if (typeof ennemy[i] === "number") {
            ennemy[i] = ennemy[i] * multiplier;
        }
    }
    return ennemy;
}
exports.diffEnnemy = diffEnnemy;