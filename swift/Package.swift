// swift-tools-version:5.0
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "Thoaded",
    products: [
        .library(
            name: "Thoaded",
            targets: ["Thoaded"]),
    ],
    dependencies: [
    ],
    targets: [
        .target(
            name: "Thoaded",
            dependencies: []),
        .testTarget(
            name: "ThoadedTests",
            dependencies: ["Thoaded"]),
    ]
)