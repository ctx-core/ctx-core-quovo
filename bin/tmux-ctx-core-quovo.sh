#!/bin/sh
CTX_CORE_QUOVO_DIR_DEFAULT=~/work/ctx-core-quovo/
CTX_CORE_QUOVO_DIR="${CTX_CORE_QUOVO_DIR:-$CTX_CORE_QUOVO_DIR_DEFAULT}"

tmux rename-window ctx-core-quovo
tmux send-keys "cd $CTX_CORE_QUOVO_DIR" 'C-m'
cd $CTX_CORE_QUOVO_DIR
tmux split-window -v
tmux send-keys 'tig' 'C-m'
tmux select-pane -t 0

tmux select-window -t 0
