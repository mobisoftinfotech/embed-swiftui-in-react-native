//
//  NativeBridge.m
//  RNWithSwiftUI
//
//  Created by Prashant Telangi on 21/04/25.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(NativeBridge, NSObject)

RCT_EXTERN_METHOD(openSwiftUIScreen:(NSDictionary *)data
                  callback:(RCTResponseSenderBlock)callback)

@end
