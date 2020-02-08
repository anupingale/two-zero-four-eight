// Compiled by ClojureScript 1.10.597 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__5203__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5203 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5204__i = 0, G__5204__a = new Array(arguments.length -  0);
while (G__5204__i < G__5204__a.length) {G__5204__a[G__5204__i] = arguments[G__5204__i + 0]; ++G__5204__i;}
  args = new cljs.core.IndexedSeq(G__5204__a,0,null);
} 
return G__5203__delegate.call(this,args);};
G__5203.cljs$lang$maxFixedArity = 0;
G__5203.cljs$lang$applyTo = (function (arglist__5205){
var args = cljs.core.seq(arglist__5205);
return G__5203__delegate(args);
});
G__5203.cljs$core$IFn$_invoke$arity$variadic = G__5203__delegate;
return G__5203;
})()
);

(o.error = (function() { 
var G__5206__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5206 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5207__i = 0, G__5207__a = new Array(arguments.length -  0);
while (G__5207__i < G__5207__a.length) {G__5207__a[G__5207__i] = arguments[G__5207__i + 0]; ++G__5207__i;}
  args = new cljs.core.IndexedSeq(G__5207__a,0,null);
} 
return G__5206__delegate.call(this,args);};
G__5206.cljs$lang$maxFixedArity = 0;
G__5206.cljs$lang$applyTo = (function (arglist__5208){
var args = cljs.core.seq(arglist__5208);
return G__5206__delegate(args);
});
G__5206.cljs$core$IFn$_invoke$arity$variadic = G__5206__delegate;
return G__5206;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});
