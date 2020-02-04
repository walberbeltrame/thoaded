// swift-tools-version:5.0
// The swift-tools-version declares the minimum version of Swift required to build this package.

import PackageDescription

let package = Package(
    name: "Thoulded",
    products: [
        .library(
            name: "Thoulded",
            targets: ["Thoulded"]),
    ],
    dependencies: [
    ],
    targets: [
        .target(
            name: "Thoulded",
            dependencies: []),
        .testTarget(
            name: "ThouldedTests",
            dependencies: ["Thoulded"]),
    ]
)